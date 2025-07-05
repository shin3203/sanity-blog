import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import DebugPage from './components/DebugPage'
import DiagnosePage from './components/DiagnosePage'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* 爽やかでモダンなヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="group flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">朝AI</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Morning × AI
                </h1>
                <p className="text-xs text-gray-600">朝活とAIで創る新しい生活</p>
              </div>
            </a>
            <div className="flex items-center space-x-6">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
                ホーム
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
                このサイトについて
              </a>
              <a href="#categories" className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
                カテゴリー
              </a>
              <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all text-sm font-medium">
                メルマガ登録
              </button>
            </div>
          </nav>
        </div>
      </header>
      
      {/* 朝活×AIコンセプトのヒーローセクション */}
      {isHomePage && (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* 背景のグラデーションアニメーション */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          {/* メインコンテンツ */}
          <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-gray-700 mb-6">
                🌅 早朝の習慣 × 🤖 AI活用術
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                朝活とAIで
              </span>
              <span className="block text-gray-800 mt-2">
                人生を最適化する
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              朝4時起床の習慣とAIツールを組み合わせて、
              生産性を最大化する方法を発信しています。
              ChatGPT、Claude、その他最新AIツールの活用法も紹介。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#latest" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2">
                  最新記事を読む
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a href="#about" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                朝活×AIとは？
              </a>
            </div>
            
            {/* 特徴アイコン */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                  🌅
                </div>
                <h3 className="font-bold text-gray-800 mb-2">朝4時起床</h3>
                <p className="text-sm text-gray-600">5年間継続中の朝活メソッド</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                  🤖
                </div>
                <h3 className="font-bold text-gray-800 mb-2">AI活用術</h3>
                <p className="text-sm text-gray-600">最新AIツールの実践的な使い方</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                  📈
                </div>
                <h3 className="font-bold text-gray-800 mb-2">生産性向上</h3>
                <p className="text-sm text-gray-600">朝活×AIで効率を最大化</p>
              </div>
            </div>
          </div>
          
          {/* スクロール指示 */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      )}
      
      <main id="latest" className="relative z-10 min-h-screen pt-24">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/debug" element={<DebugPage />} />
          <Route path="/diagnose" element={<DiagnosePage />} />
        </Routes>
      </main>
      
      {/* モダンで爽やかなフッター */}
      <footer id="categories" className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Morning × AI</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                朝活の習慣化とAI活用を組み合わせて、
                あなたの人生を次のレベルへ。
                毎朝4時起床で得た知見と最新AIツールの
                実践的な活用法をお届けします。
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all">
                  <span className="text-sm font-bold">X</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all">
                  <span className="text-sm font-bold">N</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all">
                  <span className="text-sm font-bold">Y</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-gray-800 font-bold mb-6">カテゴリー</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="text-lg">🌅</span> 朝活メソッド
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="text-lg">🤖</span> AI活用術
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="text-lg">📚</span> 生産性向上
                </a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2">
                  <span className="text-lg">💡</span> ライフハック
                </a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 font-bold mb-6">人気のAIツール</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">ChatGPT活用法</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Claude使い方ガイド</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Midjourney入門</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">GitHub Copilot</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 Morning × AI. All rights reserved.</p>
            <p className="text-gray-500 text-sm">朝活とAIで、毎日を最高の一日に</p>
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

// カスタムアニメーション定義
const style = document.createElement('style')
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .delay-1000 { animation-delay: 1s; }
`
document.head.appendChild(style)

export default App