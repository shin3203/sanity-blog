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
          <div className="w-16 h-16 border-4 border-blue-200 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-blue-600 rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
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
        title="Morning × AI - 朝活とAIで人生を最適化"
        description="朝活の習慣化とAI活用を組み合わせて、生産性を最大化する方法を発信"
      />
      <div className="container mx-auto px-6 py-20">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              🚀 最新の朝活×AI情報
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">記事一覧</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              朝の時間を最大限に活用し、AIツールで生産性を爆上げする方法をお届けします
            </p>
          </div>
        </div>
      
        {/* 記事グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={post._id} 
              className="group relative transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/blog/${post.slug.current}`} className="block">
                {/* グラデーション背景 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                {/* コンテンツ */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {post.mainImage && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      {/* カテゴリーバッジ */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {post.categories && post.categories.map((category, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                            {category.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* タイトル */}
                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {post.title}
                    </h2>
                    
                    {/* 抜粋 */}
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                    
                    {/* メタ情報 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {post.author.image && (
                          <img
                            src={post.author.image.asset.url}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full border-2 border-gray-200"
                          />
                        )}
                        <div>
                          <span className="text-gray-700 text-sm font-medium">{post.author.name}</span>
                          <time className="block text-gray-500 text-xs">
                            {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                          </time>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-blue-600 group-hover:text-purple-600 transition-colors">
                        <span className="text-sm font-medium">読む</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">📝</span>
            </div>
            <p className="text-gray-500">まだ記事がありません</p>
            <p className="text-gray-400 text-sm mt-2">朝活×AIの情報を準備中です</p>
          </div>
        )}
      </div>
    </>
  )
}