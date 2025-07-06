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
      {/* 深淵の背景 - 吸い込まれる宇宙 */}
      <div className="fixed inset-0 ultra-void-gradient"></div>
      
      {/* 3Dパースペクティブコンテナ */}
      <div className="fixed inset-0 perspective-container">
        <div className="quantum-grid"></div>
      </div>
      
      {/* ブラックホール効果 */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[2000px] h-[2000px] pointer-events-none">
        <div className="absolute inset-0 black-hole-vortex animate-vortex"></div>
        <div className="absolute inset-0 black-hole-event animate-event-horizon"></div>
      </div>
      
      {/* 量子パーティクルストーム */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={`quantum-${i}`}
            className="absolute quantum-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 7}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* ネオンライトニング */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={`lightning-${i}`}
            className="absolute neon-lightning"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* AIニューラルウェーブ - 超強化版 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="neural-wave-ultra animate-neural-wave"></div>
      </div>
      
      {/* ホログラフィックオーロラ */}
      <div className="fixed top-0 left-0 right-0 h-1/2 pointer-events-none">
        <div className="holographic-aurora animate-aurora"></div>
      </div>

      {/* ウルトラヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 ultra-glass-morphism">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
          <nav className="flex items-center justify-between">
            <a href="/" className="group flex items-center space-x-3 md:space-x-4">
              <div className="relative">
                <div className="w-14 h-14 md:w-16 md:h-16 neon-cube-container">
                  <div className="neon-cube animate-cube-rotate">
                    <span className="cube-face front">🌀</span>
                    <span className="cube-face back">🤖</span>
                    <span className="cube-face right">⚡</span>
                    <span className="cube-face left">🌟</span>
                    <span className="cube-face top">🚀</span>
                    <span className="cube-face bottom">💫</span>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold text-white ultra-neon-text">
                  QUANTUM MORNING
                </h1>
                <p className="text-xs cyber-text animate-glitch">次元を超える朝活体験</p>
              </div>
            </a>
            
            {/* デスクトップメニュー */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="nav-link-ultra">
                <span className="nav-text">HOME</span>
                <span className="nav-glitch">HOME</span>
              </a>
              <a href="#quantum" className="nav-link-ultra">
                <span className="nav-text">QUANTUM</span>
                <span className="nav-glitch">QUANTUM</span>
              </a>
              <a href="#neural" className="nav-link-ultra">
                <span className="nav-text">NEURAL</span>
                <span className="nav-glitch">NEURAL</span>
              </a>
              <button className="ultra-neon-button">
                <span className="button-text">ENTER VOID</span>
                <span className="button-glitch" aria-hidden="true">ENTER VOID</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
      
      {/* ウルトラヒーローセクション */}
      {isHomePage && (
        <div className="relative min-h-screen flex items-center justify-center pt-20">
          {/* 3Dテキストフロート */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-3d-container animate-float-3d">
              <div className="text-3d-layer" style={{transform: 'translateZ(20px)'}}>MORNING</div>
              <div className="text-3d-layer" style={{transform: 'translateZ(40px)'}}>MORNING</div>
              <div className="text-3d-layer" style={{transform: 'translateZ(60px)'}}>MORNING</div>
            </div>
          </div>
          
          {/* メインコンテンツ */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 md:px-6">
            <div className="mb-12 animate-quantum-float">
              <span className="inline-block px-8 py-4 ultra-badge">
                <span className="badge-text">🌌 QUANTUM REALITY × 🤖 AI CONSCIOUSNESS</span>
                <span className="badge-scan"></span>
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl md:text-9xl font-bold mb-8 leading-tight">
              <span className="block ultra-chrome-text mb-4 animate-text-warp">
                朝の概念を
              </span>
              <span className="block ultra-gradient-text animate-text-flow">
                再定義する
              </span>
            </h2>
            
            <div className="ultra-hologram-panel p-8 md:p-12 max-w-4xl mx-auto mb-12">
              <p className="text-lg sm:text-xl md:text-3xl leading-relaxed text-white">
                <span className="hologram-text">量子的覚醒が</span>
                <br className="hidden sm:block" />
                <span className="hologram-text">あなたの意識を</span>
                <br className="hidden sm:block" />
                <span className="hologram-text ultra-pulse">次元上昇させる</span>
              </p>
              
              {/* 量子メトリクス */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="quantum-metric">
                  <div className="metric-value animate-counter" data-target="999">0</div>
                  <div className="metric-label">Hz 振動数</div>
                </div>
                <div className="quantum-metric">
                  <div className="metric-value animate-counter" data-target="∞">0</div>
                  <div className="metric-label">次元レベル</div>
                </div>
                <div className="quantum-metric">
                  <div className="metric-value animate-counter" data-target="100">0</div>
                  <div className="metric-label">% 覚醒度</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a href="#void" className="ultra-void-button group">
                <span className="void-text">ENTER THE VOID</span>
                <div className="void-portal"></div>
              </a>
              
              <a href="#reality" className="ultra-reality-button group">
                <span className="reality-text">BEND REALITY</span>
                <div className="reality-warp"></div>
              </a>
            </div>
            
            {/* 底部の量子波動 */}
            <div className="absolute -bottom-40 left-0 right-0 h-80 pointer-events-none">
              <div className="quantum-wave-container">
                <div className="quantum-wave animate-quantum-wave"></div>
                <div className="quantum-wave animate-quantum-wave" style={{animationDelay: '1s'}}></div>
                <div className="quantum-wave animate-quantum-wave" style={{animationDelay: '2s'}}></div>
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

      {/* ウルトラフッター */}
      <footer className="relative z-10 ultra-glass-morphism py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="cyber-text">© 2024 QUANTUM MORNING - 次元を超えた朝活体験</p>
        </div>
      </footer>
      
      {/* グリッチエフェクトオーバーレイ */}
      <div className="fixed inset-0 pointer-events-none glitch-overlay"></div>
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