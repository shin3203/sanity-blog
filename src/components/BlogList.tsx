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
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gold/20 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-gold rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
        </div>
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
        title="Luxury Morning Blog - Elite Lifestyle Articles"
        description="Transform your life with exclusive morning routines and success strategies"
      />
      <div className="container mx-auto px-6 py-20">
        {/* セクションヘッダー */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <p className="text-gold/70 tracking-[0.3em] uppercase text-sm mb-4">Latest Articles</p>
            <h1 className="text-5xl md:text-6xl font-thin text-white mb-6">最新の記事</h1>
            <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-64"></div>
          </div>
        </div>
      
        {/* 記事グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={post._id} 
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/blog/${post.slug.current}`} className="block">
                {/* カード背景 */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* ゴールドの枠線エフェクト */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent"></div>
                  <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent"></div>
                </div>
                
                {/* コンテンツ */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-gold/30 transition-all duration-500">
                  {post.mainImage && (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* カテゴリー */}
                    <div className="flex items-center gap-2 mb-4">
                      {post.categories && post.categories.map((category, idx) => (
                        <span key={idx} className="text-gold/70 text-xs tracking-wider uppercase">
                          {category.title}
                        </span>
                      ))}
                    </div>
                    
                    {/* タイトル */}
                    <h2 className="text-2xl font-light text-white mb-4 group-hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    {/* 抜粋 */}
                    {post.excerpt && (
                      <p className="text-white/60 mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                    
                    {/* メタ情報 */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        {post.author.image && (
                          <img
                            src={post.author.image.asset.url}
                            alt={post.author.name}
                            className="w-10 h-10 rounded-full border border-gold/30"
                          />
                        )}
                        <div>
                          <span className="text-white/80 text-sm">{post.author.name}</span>
                          <time className="block text-white/40 text-xs">
                            {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                          </time>
                        </div>
                      </div>
                      <div className="text-gold/70 group-hover:text-gold transition-colors">
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        {posts.length === 0 && (
          <p className="text-center text-white/60">No articles available at the moment.</p>
        )}
      </div>
    </>
  )
}