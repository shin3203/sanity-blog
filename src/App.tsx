import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import DebugPage from './components/DebugPage'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-gray-700/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="group flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <span className="text-white font-bold text-xl">朝</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Morning Blog
              </h1>
            </a>
            <div className="flex items-center space-x-6">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">
                ホーム
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Subscribe
              </button>
            </div>
          </nav>
        </div>
      </header>
      
      {/* ヒーローセクション（トップページのみ） */}
      {isHomePage && (
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 py-20 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                朝活で<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">人生を変える</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                毎朝4時起きを5年間継続。朝活で得た知見とライフハックを共有します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#latest" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all font-semibold">
                  最新記事を読む
                </a>
                <a href="#about" className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all font-semibold border border-gray-700">
                  朝活について学ぶ
                </a>
              </div>
            </div>
          </div>
          {/* アニメーション要素 */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
      )}
      
      <main id="latest" className="relative z-10">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/debug" element={<DebugPage />} />
        </Routes>
      </main>
      
      {/* フッター */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Morning Blog</h3>
              <p className="text-gray-400">
                朝活で人生を変える。毎日の小さな習慣が大きな成果を生み出します。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">カテゴリー</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">朝活の基本</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">早起きのコツ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">朝の健康習慣</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">フォロー</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-gray-400">X</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-gray-400">FB</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <span className="text-gray-400">IG</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Morning Blog. Powered by Sanity & Next.js</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App