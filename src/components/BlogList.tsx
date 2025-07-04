import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBlogPosts, type BlogPost } from '../lib/sanity'
import SEO from './SEO'

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getBlogPosts()
        setPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>Error: {error}</p>
      </div>
    )
  }

  return (
    <>
      <SEO 
        title="Blog Posts"
        description="Read our latest blog posts and articles"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {post.mainImage && (
              <Link to={`/blog/${post.slug.current}`}>
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
            )}
            
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                {post.categories && post.categories.map((category, idx) => (
                  <span key={idx} className="bg-gray-100 px-2 py-1 rounded">
                    {category.title}
                  </span>
                ))}
              </div>
              
              <h2 className="text-xl font-semibold mb-2">
                <Link 
                  to={`/blog/${post.slug.current}`}
                  className="text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              
              {post.excerpt && (
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              )}
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {post.author.image && (
                    <img
                      src={post.author.image.asset.url}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <span className="text-sm text-gray-600">{post.author.name}</span>
                </div>
                
                <time className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </time>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {posts.length === 0 && (
        <p className="text-center text-gray-600">No blog posts found.</p>
      )}
    </div>
    </>
  )
}