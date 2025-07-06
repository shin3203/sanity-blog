import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import DebugPage from './components/DebugPage'
import DiagnosePage from './components/DiagnosePage'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 朝の湖畔の背景 */}
      <div className="fixed inset-0 lake-gradient"></div>
      
      {/* 霧のエフェクト */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 morning-mist animate-mist opacity-30"></div>
        <div className="absolute inset-0 morning-mist animate-mist opacity-20" style={{animationDelay: '5s'}}></div>
        <div className="absolute inset-0 morning-mist animate-mist opacity-25" style={{animationDelay: '10s'}}></div>
      </div>
      
      {/* 朝日の光 */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 animate-sunrise pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-yellow-200/30 via-orange-200/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* 水面のきらめき */}
      <div className="fixed bottom-0 left-0 right-0 h-1/3 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-shimmer"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* 穏やかなヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 water-blur border-b border-blue-200/30">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="group flex items-center space-x-2 md:space-x-3">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform nature-shadow">
                  <span className="text-white font-bold text-sm md:text-lg">湖</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold text-blue-800">
                  Morning Lake Blog
                </h1>
                <p className="text-xs text-blue-600">朝の湖畔から贈る癒しの言葉</p>
              </div>
            </a>
            
            {/* デスクトップメニュー */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-blue-700 hover:text-blue-900 transition-colors text-sm font-medium">
                ホーム
              </a>
              <a href="#about" className="text-blue-700 hover:text-blue-900 transition-colors text-sm font-medium">
                このサイトについて
              </a>
              <a href="#categories" className="text-blue-700 hover:text-blue-900 transition-colors text-sm font-medium">
                カテゴリー
              </a>
              <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all text-sm font-medium nature-shadow">
                メルマガ登録
              </button>
            </div>
            
            {/* モバイルメニュー */}
            <div className="md:hidden">
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs font-medium whitespace-nowrap nature-shadow">
                メニュー
              </button>
            </div>
          </nav>
        </div>
      </header>
      
      {/* 朝の湖畔ヒーローセクション */}
      {isHomePage && (
        <div className="relative min-h-screen flex items-center justify-center pt-20">
          {/* 波紋エフェクト */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-32 h-32 border border-blue-300/30 rounded-full animate-ripple"
                style={{
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: '4s'
                }}
              ></div>
            ))}
          </div>
          
          {/* メインコンテンツ */}
          <div className="relative z-10 text-center max-w-5xl mx-auto px-4 md:px-6">
            <div className="mb-12">
              <span className="inline-block px-4 py-2 water-blur border border-blue-300/50 rounded-full text-xs sm:text-sm font-medium text-blue-800 mb-4 sm:mb-6 nature-shadow">
                🌅 朝の静寂 × 🌊 心の波紋
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                朝の湖畔で
              </span>
              <span className="block text-blue-900 mt-2">
                心を整える時間
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-xl text-blue-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
              静かな水面に映る朝日のように、
              あなたの心に穏やかな波紋を広げる言葉たち。
              日々の喧騒から離れ、内なる平穏を見つけましょう。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#latest" className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base border border-blue-400/30 nature-shadow">
                <span className="flex items-center gap-2">
                  今日の癒しを読む
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a href="#subscribe" className="px-6 py-3 sm:px-8 sm:py-4 bg-white/80 water-blur text-blue-700 rounded-full hover:bg-white/90 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base border border-blue-300/50 nature-shadow">
                朝の瞑想ガイドを受け取る
              </a>
            </div>
            
            {/* 水の波アニメーション */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 h-full">
                <svg className="w-full h-full animate-wave" viewBox="0 0 1440 100" preserveAspectRatio="none">
                  <path d="M0,50 C360,90 720,10 1440,50 L1440,100 L0,100 Z" fill="rgba(70, 130, 180, 0.1)"></path>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-full" style={{animationDelay: '1s'}}>
                <svg className="w-full h-full animate-wave" viewBox="0 0 1440 100" preserveAspectRatio="none">
                  <path d="M0,60 C360,20 720,80 1440,40 L1440,100 L0,100 Z" fill="rgba(70, 130, 180, 0.08)"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* メインコンテンツエリア */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/debug" element={<DebugPage />} />
          <Route path="/diagnose" element={<DiagnosePage />} />
        </Routes>
      </main>

      {/* フッター */}
      <footer className="relative z-10 water-blur border-t border-blue-200/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-700">© 2024 Morning Lake Blog - 朝の湖畔から贈る癒しの言葉</p>
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