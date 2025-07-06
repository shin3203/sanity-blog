import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import DebugPage from './components/DebugPage'
import DiagnosePage from './components/DiagnosePage'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* プレミアム朝の湖畔の背景 */}
      <div className="fixed inset-0 premium-lake-gradient"></div>
      
      {/* 深い霧のエフェクト（3層） */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 morning-mist animate-mist" style={{opacity: 0.4}}></div>
        <div className="absolute inset-0 morning-mist animate-mist" style={{animationDelay: '10s', opacity: 0.3}}></div>
        <div className="absolute inset-0 morning-mist animate-mist" style={{animationDelay: '20s', opacity: 0.35}}></div>
      </div>
      
      {/* 壮大な朝日の光 */}
      <div className="fixed top-[-20%] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="w-full h-full sunrise-glow animate-sunrise"></div>
        <div className="absolute inset-0 sunrise-glow animate-pulse-glow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* 水面のきらめき（より多く、より美しく） */}
      <div className="fixed bottom-0 left-0 right-0 h-1/2 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-yellow-200 to-white rounded-full animate-shimmer"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          ></div>
        ))}
      </div>

      {/* プレミアムヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 premium-water-blur">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
          <nav className="flex items-center justify-between">
            <a href="/" className="group flex items-center space-x-3 md:space-x-4">
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-indigo-400 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 premium-shadow">
                  <span className="text-white font-bold text-lg md:text-xl">湖</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-indigo-400 via-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold text-white text-shadow-strong">
                  Morning Lake
                </h1>
                <p className="text-xs text-blue-200 text-shadow">究極の癒しと静寂の場所</p>
              </div>
            </a>
            
            {/* デスクトップメニュー */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white/80 hover:text-white transition-colors text-sm font-medium text-shadow hover-lift">
                ホーム
              </a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm font-medium text-shadow hover-lift">
                体験
              </a>
              <a href="#categories" className="text-white/80 hover:text-white transition-colors text-sm font-medium text-shadow hover-lift">
                瞑想
              </a>
              <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full font-medium premium-shadow premium-button overflow-hidden relative">
                <span className="relative z-10">始める</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      
      {/* 壮大なヒーローセクション */}
      {isHomePage && (
        <div className="relative min-h-screen flex items-center justify-center pt-20">
          {/* 中央の波紋エフェクト */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-white/20 rounded-full animate-ripple"
                style={{
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: '10s'
                }}
              ></div>
            ))}
          </div>
          
          {/* 浮遊する光の粒子 */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${10 + Math.random() * 10}s`,
                  opacity: Math.random() * 0.6 + 0.2
                }}
              ></div>
            ))}
          </div>
          
          {/* メインコンテンツ */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 md:px-6">
            <div className="mb-12 animate-float">
              <span className="inline-block px-6 py-3 readable-bg rounded-full text-sm sm:text-base font-medium text-gray-800 mb-6 premium-shadow">
                🌅 朝5時の奇跡 × 🌊 無限の静寂
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white text-shadow-strong mb-4">
                朝の湖畔が
              </span>
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent text-shadow-strong">
                あなたを呼んでいる
              </span>
            </h2>
            
            <div className="readable-bg rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mb-12 premium-shadow">
              <p className="text-base sm:text-lg md:text-2xl text-gray-800 leading-relaxed">
                深い霧に包まれた朝の湖。
                <br className="hidden sm:block" />
                その静寂の中で、あなたの心は本当の自分と出会う。
                <br className="hidden sm:block" />
                <span className="font-bold text-blue-700">毎朝5時、新しい人生が始まる。</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#latest" className="group px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full font-bold text-base sm:text-lg premium-shadow premium-button hover-lift">
                <span className="flex items-center gap-3 relative z-10">
                  今すぐ体験する
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a href="#video" className="group px-8 py-4 sm:px-10 sm:py-5 readable-bg text-gray-800 rounded-full font-bold text-base sm:text-lg premium-shadow hover-lift">
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  映像で見る
                </span>
              </a>
            </div>
            
            {/* 下部の波 */}
            <div className="absolute -bottom-20 left-0 right-0 h-40 pointer-events-none">
              <div className="absolute bottom-0 left-0 right-0 h-full">
                <svg className="w-full h-full animate-wave" viewBox="0 0 1440 200" preserveAspectRatio="none">
                  <path d="M0,100 C360,150 720,50 1440,100 L1440,200 L0,200 Z" fill="rgba(255, 255, 255, 0.05)"></path>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-full" style={{animationDelay: '2s'}}>
                <svg className="w-full h-full animate-wave" viewBox="0 0 1440 200" preserveAspectRatio="none">
                  <path d="M0,120 C360,70 720,130 1440,80 L1440,200 L0,200 Z" fill="rgba(255, 255, 255, 0.03)"></path>
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

      {/* プレミアムフッター */}
      <footer className="relative z-10 premium-water-blur py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 text-shadow">© 2024 Morning Lake - 究極の朝活体験</p>
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