import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import DebugPage from './components/DebugPage'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen bg-black">
      {/* 高級感のあるヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <a href="/" className="group flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-br from-gold to-amber-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-black rounded-full flex items-center justify-center border border-gold/50">
                  <span className="text-gold font-serif text-xl">朝</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-light tracking-widest text-white">
                  MORNING
                </h1>
                <p className="text-xs tracking-[0.3em] text-gold/70 uppercase">Luxury Lifestyle Blog</p>
              </div>
            </a>
            <div className="flex items-center space-x-8">
              <a href="/" className="text-white/70 hover:text-gold transition-all duration-300 text-sm tracking-wider uppercase">
                Home
              </a>
              <a href="#about" className="text-white/70 hover:text-gold transition-all duration-300 text-sm tracking-wider uppercase">
                About
              </a>
              <a href="#contact" className="text-white/70 hover:text-gold transition-all duration-300 text-sm tracking-wider uppercase">
                Contact
              </a>
              <button className="px-6 py-2 border border-gold/50 text-gold hover:bg-gold hover:text-black transition-all duration-500 text-sm tracking-wider uppercase">
                Subscribe
              </button>
            </div>
          </nav>
        </div>
      </header>
      
      {/* 豪華なヒーローセクション */}
      {isHomePage && (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* 背景のグラデーションアニメーション */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-amber-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          {/* メインコンテンツ */}
          <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
            <div className="mb-8">
              <div className="inline-block">
                <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-32 mb-8"></div>
                <p className="text-gold/70 tracking-[0.3em] uppercase text-sm mb-4">Transform Your Life</p>
              </div>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-thin text-white mb-6 leading-tight">
              朝活で築く
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold font-light">
                成功への道
              </span>
            </h2>
            
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              毎朝4時起床。5年間の実践から得た、エリートだけが知る成功の秘訣を公開。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#latest" className="group relative px-8 py-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gold via-amber-400 to-gold transition-all duration-500 group-hover:scale-105"></div>
                <span className="relative text-black font-medium tracking-wider uppercase">Explore Articles</span>
              </a>
              <a href="#about" className="px-8 py-4 border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-500 tracking-wider uppercase">
                Learn More
              </a>
            </div>
          </div>
          
          {/* スクロール指示 */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border border-gold/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      )}
      
      <main id="latest" className="relative z-10 bg-black min-h-screen pt-24">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/debug" element={<DebugPage />} />
        </Routes>
      </main>
      
      {/* 高級感のあるフッター */}
      <footer className="bg-black border-t border-gold/20">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-light text-white mb-4 tracking-wider">MORNING</h3>
              <p className="text-white/60 leading-relaxed">
                エグゼクティブのための朝活メソッド。<br />
                成功者たちが実践する、朝の黄金時間の使い方を伝授します。
              </p>
            </div>
            <div>
              <h4 className="text-white font-light tracking-wider mb-6 uppercase">Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-gold transition-colors duration-300">朝活の哲学</a></li>
                <li><a href="#" className="text-white/60 hover:text-gold transition-colors duration-300">成功者の習慣</a></li>
                <li><a href="#" className="text-white/60 hover:text-gold transition-colors duration-300">マインドセット</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-light tracking-wider mb-6 uppercase">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                  <span className="text-sm">X</span>
                </a>
                <a href="#" className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                  <span className="text-sm">IN</span>
                </a>
                <a href="#" className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                  <span className="text-sm">FB</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm">© 2024 MORNING. All rights reserved.</p>
            <p className="text-white/40 text-sm">Crafted with excellence</p>
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

// Tailwind CSSカスタムカラー定義
const style = document.createElement('style')
style.textContent = `
  .text-gold { color: #D4AF37; }
  .bg-gold { background-color: #D4AF37; }
  .border-gold { border-color: #D4AF37; }
  .from-gold { --tw-gradient-from: #D4AF37; }
  .via-gold { --tw-gradient-via: #D4AF37; }
  .to-gold { --tw-gradient-to: #D4AF37; }
`
document.head.appendChild(style)

export default App