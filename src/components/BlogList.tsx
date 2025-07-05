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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
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
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">最新の記事</h1>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post._id} className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {post.mainImage && (
                <Link to={`/blog/${post.slug.current}`} className="relative overflow-hidden block">
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt || post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              )}
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm mb-3">
                  {post.categories && post.categories.map((category, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {category.title}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-bold mb-3">
                  <Link 
                    to={`/blog/${post.slug.current}`}
                    className="text-gray-900 hover:text-purple-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                {post.excerpt && (
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    {post.author.image && (
                      <img
                        src={post.author.image.asset.url}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <span className="text-sm text-gray-700 font-medium">{post.author.name}</span>
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