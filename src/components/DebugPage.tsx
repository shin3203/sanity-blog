import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState<any>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function runDebugChecks() {
      const info: any = {}
      
      try {
        // 1. Check Sanity client configuration
        info.sanityConfig = {
          projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
          dataset: import.meta.env.VITE_SANITY_DATASET,
          apiVersion: '2024-01-01',
          useCdn: true
        }

        // 2. Test basic connection by fetching all post types
        const postTypes = await client.fetch(`*[_type == "post"] {
          _id,
          title,
          "bodyPreview": body[0...3]
        }`)
        info.postsFound = postTypes.length
        info.firstPost = postTypes[0]

        // 3. Fetch detailed body content from first post
        if (postTypes.length > 0) {
          const detailedPost = await client.fetch(`*[_type == "post"][0] {
            title,
            body[] {
              ...,
              _type,
              style,
              "rawData": @
            }
          }`)
          info.detailedBody = detailedPost.body
        }

        // 4. Check for custom styles in body content
        if (info.detailedBody) {
          const customStyles = info.detailedBody
            .filter((block: any) => block.style && !['normal', 'h1', 'h2', 'h3', 'h4', 'blockquote'].includes(block.style))
          info.customStylesFound = customStyles
        }

        setDebugInfo(info)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        info.error = err
        setDebugInfo(info)
      } finally {
        setLoading(false)
      }
    }

    runDebugChecks()
  }, [])

  if (loading) {
    return <div className="p-8">Loading debug information...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sanity Debug Information</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Sanity Configuration</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">
            {JSON.stringify(debugInfo.sanityConfig, null, 2)}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Posts Overview</h2>
          <p>Total posts found: <strong>{debugInfo.postsFound || 0}</strong></p>
          {debugInfo.firstPost && (
            <div className="mt-2">
              <p>First post title: <strong>{debugInfo.firstPost.title}</strong></p>
              <p>Body preview:</p>
              <pre className="bg-gray-100 p-4 rounded overflow-auto mt-2">
                {JSON.stringify(debugInfo.firstPost.bodyPreview, null, 2)}
              </pre>
            </div>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Body Content Analysis</h2>
          {debugInfo.detailedBody && (
            <div>
              <p>Total body blocks: <strong>{debugInfo.detailedBody.length}</strong></p>
              <details className="mt-4">
                <summary className="cursor-pointer bg-blue-100 p-2 rounded">
                  Click to see all body blocks
                </summary>
                <pre className="bg-gray-100 p-4 rounded overflow-auto mt-2">
                  {JSON.stringify(debugInfo.detailedBody, null, 2)}
                </pre>
              </details>
            </div>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Custom Styles Found</h2>
          {debugInfo.customStylesFound && debugInfo.customStylesFound.length > 0 ? (
            <div>
              <p className="text-green-600 mb-2">
                Found {debugInfo.customStylesFound.length} blocks with custom styles!
              </p>
              <pre className="bg-gray-100 p-4 rounded overflow-auto">
                {JSON.stringify(debugInfo.customStylesFound, null, 2)}
              </pre>
            </div>
          ) : (
            <p className="text-yellow-600">
              No custom styles (largeText, extraLargeText, smallText) found in body content.
            </p>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Browser Console Instructions</h2>
          <div className="bg-blue-50 p-4 rounded">
            <p className="mb-2">To check for errors and API requests:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open browser DevTools (F12 or right-click → Inspect)</li>
              <li>Go to the <strong>Console</strong> tab to see any JavaScript errors</li>
              <li>Go to the <strong>Network</strong> tab and filter by "Fetch/XHR"</li>
              <li>Look for requests to <code>api.sanity.io</code></li>
              <li>Click on a request to see the response data</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  )
}