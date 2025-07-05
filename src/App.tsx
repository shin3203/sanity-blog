import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import DebugPage from './components/DebugPage'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="group flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg">
                <span className="text-white font-bold text-xl">朝</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Morning Blog
              </h1>
            </a>
            <div className="flex items-center space-x-6">
              <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                ホーム
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                About
              </a>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-medium">
                Subscribe
              </button>
            </div>
          </nav>
        </div>
      </header>
      
      {/* ヒーローセクション（トップページのみ） */}
      {isHomePage && (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-4 py-20 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                朝活で<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">人生を変える</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                毎朝4時起きを5年間継続。朝活で得た知見とライフハックを共有します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#latest" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all font-semibold">
                  最新記事を読む
                </a>
                <a href="#about" className="px-8 py-4 bg-white text-gray-800 rounded-lg hover:bg-gray-50 transition-all font-semibold border-2 border-gray-200">
                  朝活について学ぶ
                </a>
              </div>
            </div>
          </div>
          {/* デコレーション要素 */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
        </div>
      )}
      
      <main id="latest" className="relative z-10 bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/debug" element={<DebugPage />} />
        </Routes>
      </main>
      
      {/* フッター */}
      <footer className="bg-gradient-to-br from-purple-50 to-blue-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Morning Blog</h3>
              <p className="text-gray-600">
                朝活で人生を変える。毎日の小さな習慣が大きな成果を生み出します。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">カテゴリー</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">朝活の基本</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">早起きのコツ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">朝の健康習慣</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">フォロー</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-purple-100 transition-colors shadow-md">
                  <span className="text-gray-600">X</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-purple-100 transition-colors shadow-md">
                  <span className="text-gray-600">FB</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-purple-100 transition-colors shadow-md">
                  <span className="text-gray-600">IG</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Morning Blog. Powered by Sanity & React</p>
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