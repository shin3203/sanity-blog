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
      {/* AI×朝の湖畔の背景 */}
      <div className="fixed inset-0 ai-lake-gradient"></div>
      
      {/* ニューラルネットワークパターン */}
      <div className="fixed inset-0 neural-pattern pointer-events-none"></div>
      
      {/* デジタル霧のエフェクト（3層） */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 digital-mist animate-mist" style={{opacity: 0.3}}></div>
        <div className="absolute inset-0 morning-mist animate-mist" style={{animationDelay: '10s', opacity: 0.25}}></div>
        <div className="absolute inset-0 digital-mist animate-mist" style={{animationDelay: '20s', opacity: 0.3}}></div>
      </div>
      
      {/* データストリーム背景 */}
      <div className="fixed inset-0 digital-wave-bg pointer-events-none"></div>
      
      {/* サイバー朝日の光 */}
      <div className="fixed top-[-20%] left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] pointer-events-none">
        <div className="w-full h-full cyber-sunrise animate-sunrise"></div>
        <div className="absolute inset-0 sunrise-glow animate-pulse-glow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* デジタル粒子の流れ */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={`digital-${i}`}
            className="absolute w-1 h-1 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full animate-digital-flow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* AIマインドウェーブ */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={`mind-${i}`}
            className="absolute w-[600px] h-[200px] bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-mind-wave"
            style={{
              animationDelay: `${i * 2}s`,
              transform: `rotate(${i * 60}deg)`
            }}
          ></div>
        ))}
      </div>
      
      {/* 水面のきらめき（AI強化版） */}
      <div className="fixed bottom-0 left-0 right-0 h-1/2 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-shimmer"
            style={{
              background: `linear-gradient(45deg, #60a5fa, #34d399, #a78bfa)`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: Math.random() * 0.9 + 0.1
            }}
          ></div>
        ))}
      </div>

      {/* AIエンハンスドヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 ai-water-blur">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
          <nav className="flex items-center justify-between">
            <a href="/" className="group flex items-center space-x-3 md:space-x-4">
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 holographic-button rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 animate-holographic">
                  <span className="text-white font-bold text-lg md:text-xl relative z-10">🤖</span>
                </div>
                <div className="absolute -inset-2 holographic-button rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity animate-holographic"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold text-white ai-glow-text">
                  AI Morning Lake
                </h1>
                <p className="text-xs text-blue-200 text-shadow">朝活×AI 究極の覚醒体験</p>
              </div>
            </a>
            
            {/* デスクトップメニュー */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white/80 hover:text-white transition-colors text-sm font-medium text-shadow ai-hover-effect">
                ホーム
              </a>
              <a href="#ai-insights" className="text-white/80 hover:text-white transition-colors text-sm font-medium text-shadow ai-hover-effect">
                AIインサイト
              </a>
              <a href="#neural-meditation" className="text-white/80 hover:text-white transition-colors text-sm font-medium text-shadow ai-hover-effect">
                瞑想AI
              </a>
              <button className="px-6 py-2.5 holographic-button text-white rounded-full font-medium overflow-hidden relative animate-ai-pulse">
                <span className="relative z-10">AI体験開始</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      
      {/* AI×朝活ヒーローセクション */}
      {isHomePage && (
        <div className="relative min-h-screen flex items-center justify-center pt-20">
          {/* ニューラルネットワークアニメーション */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity: 0.2}}>
            {[...Array(8)].map((_, i) => (
              <g key={`neural-${i}`}>
                <circle
                  cx={`${20 + (i % 4) * 20}%`}
                  cy={`${30 + Math.floor(i / 4) * 40}%`}
                  r="3"
                  fill="#60a5fa"
                  className="animate-ai-pulse"
                  style={{animationDelay: `${i * 0.2}s`}}
                />
                {i < 7 && (
                  <line
                    x1={`${20 + (i % 4) * 20}%`}
                    y1={`${30 + Math.floor(i / 4) * 40}%`}
                    x2={`${20 + ((i + 1) % 4) * 20}%`}
                    y2={`${30 + Math.floor((i + 1) / 4) * 40}%`}
                    stroke="#60a5fa"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className="animate-neural"
                    style={{animationDelay: `${i * 0.3}s`}}
                  />
                )}
              </g>
            ))}
          </svg>
          
          {/* 中央の波紋エフェクト（AI強化） */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-blue-400/30 rounded-full animate-ripple"
                style={{
                  width: `${200 + i * 150}px`,
                  height: `${200 + i * 150}px`,
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: '8s',
                  boxShadow: '0 0 20px rgba(147, 197, 253, 0.3)'
                }}
              ></div>
            ))}
          </div>
          
          {/* メインコンテンツ */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 md:px-6">
            <div className="mb-12 ai-assistant-float">
              <span className="inline-block px-6 py-3 ai-insight-panel rounded-full text-sm sm:text-base font-medium text-gray-800 mb-6">
                🤖 AI×朝活 × 🌊 無限の可能性
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white ai-glow-text mb-4">
                AIが導く
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-holographic">
                究極の朝活体験
              </span>
            </h2>
            
            <div className="ai-insight-panel rounded-2xl p-6 md:p-8 max-w-4xl mx-auto mb-12">
              <p className="text-base sm:text-lg md:text-2xl text-gray-800 leading-relaxed">
                <span className="font-bold text-blue-600">AI分析による最適な覚醒時間。</span>
                <br className="hidden sm:block" />
                あなたの生体リズムと朝の湖畔の調和が
                <br className="hidden sm:block" />
                <span className="font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  最高のパフォーマンスを引き出す。
                </span>
              </p>
              
              {/* AIメトリクス表示 */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 animate-pulse">98.2%</div>
                  <div className="text-xs text-gray-600">覚醒効率</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 animate-pulse" style={{animationDelay: '0.5s'}}>5:00</div>
                  <div className="text-xs text-gray-600">最適時刻</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 animate-pulse" style={{animationDelay: '1s'}}>+42%</div>
                  <div className="text-xs text-gray-600">生産性向上</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#ai-analysis" className="group px-8 py-4 sm:px-10 sm:py-5 holographic-button text-white rounded-full font-bold text-base sm:text-lg ai-hover-effect">
                <span className="flex items-center gap-3 relative z-10">
                  AI分析を開始
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              
              <a href="#neural-demo" className="group px-8 py-4 sm:px-10 sm:py-5 ai-insight-panel text-gray-800 rounded-full font-bold text-base sm:text-lg ai-hover-effect">
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  デモを見る
                </span>
              </a>
            </div>
            
            {/* 下部の波（AI強化版） */}
            <div className="absolute -bottom-20 left-0 right-0 h-40 pointer-events-none">
              <div className="absolute bottom-0 left-0 right-0 h-full">
                <svg className="w-full h-full animate-wave" viewBox="0 0 1440 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(96, 165, 250, 0.1)" />
                      <stop offset="50%" stopColor="rgba(52, 211, 153, 0.1)" />
                      <stop offset="100%" stopColor="rgba(167, 139, 250, 0.1)" />
                    </linearGradient>
                  </defs>
                  <path d="M0,100 C360,150 720,50 1440,100 L1440,200 L0,200 Z" fill="url(#wave-gradient)"></path>
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

      {/* AIフッター */}
      <footer className="relative z-10 ai-water-blur py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80 text-shadow">© 2024 AI Morning Lake - 朝活×AI 次世代の覚醒体験</p>
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