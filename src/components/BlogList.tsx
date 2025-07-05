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
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">最新の記事</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post._id} className="group bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-slate-800/80 transition-all duration-300 border border-slate-700/50 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20">
            {post.mainImage && (
              <Link to={`/blog/${post.slug.current}`} className="relative overflow-hidden block">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </Link>
            )}
            
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm mb-3">
                {post.categories && post.categories.map((category, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs">
                    {category.title}
                  </span>
                ))}
              </div>
              
              <h2 className="text-xl font-bold mb-3">
                <Link 
                  to={`/blog/${post.slug.current}`}
                  className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                >
                  {post.title}
                </Link>
              </h2>
              
              {post.excerpt && (
                <p className="text-slate-300 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <div className="flex items-center gap-2">
                  {post.author.image && (
                    <img
                      src={post.author.image.asset.url}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full ring-2 ring-purple-500/50"
                    />
                  )}
                  <span className="text-sm text-slate-200">{post.author.name}</span>
                </div>
                
                <time className="text-sm text-slate-400">
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