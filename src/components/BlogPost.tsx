import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { getBlogPost, type BlogPost as BlogPostType } from '../lib/sanity'
import SEO from './SEO'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPostType | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) return

    async function fetchPost() {
      try {
        const data = await getBlogPost(slug!)
        setPost(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch post')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-600 mb-4">
          {error || 'Post not found'}
        </p>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt || `Read ${post.title} on our blog`}
        image={post.mainImage?.asset.url}
        url={`${window.location.origin}/blog/${post.slug.current}`}
      />
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-8">
          ← Back to blog
        </Link>

      {post.mainImage && (
        <img
          src={post.mainImage.asset.url}
          alt={post.mainImage.alt || post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
      )}

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            {post.author.image && (
              <img
                src={post.author.image.asset.url}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
            )}
            <span>{post.author.name}</span>
          </div>
          
          <time>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          
          {post.categories && post.categories.length > 0 && (
            <div className="flex gap-2">
              {post.categories.map((category, idx) => (
                <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {category.title}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <PortableText 
          value={post.body}
          components={{
            types: {
              image: ({value}) => {
                return (
                  <img
                    src={value.asset.url}
                    alt={value.alt || ''}
                    className="rounded-lg my-8"
                  />
                )
              }
            }
          }}
        />
      </div>
    </article>
    </>
  )
}