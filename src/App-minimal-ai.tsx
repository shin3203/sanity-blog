import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import DebugPage from './components/DebugPage'
import DiagnosePage from './components/DiagnosePage'
import { useEffect } from 'react'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  
  // Theme verification
  useEffect(() => {
    console.log('✨ Minimal AI Theme Active - v0.0.3');
    console.log('🎨 Theme: Clean, Simple, Readable');
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Theme Verification Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 p-1 text-center font-mono text-xs border-b border-gray-200">
        ✨ MINIMAL AI THEME v0.0.3 | Clean & Simple | Build: 2025-01-07
      </div>
      
      {/* Header */}
      <header className="fixed top-8 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text">
              Morning × AI
            </a>
            <div className="flex gap-6">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>
      
      {/* Hero Section */}
      {isHomePage && (
        <div className="relative pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Minimal gradient accent */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-40"></div>
            
            <div className="relative">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                朝活 × AI で
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  人生を最適化
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                シンプルで効果的な朝活習慣と、最新AIツールの活用法をお届けします
              </p>
              
              <div className="flex gap-4 justify-center">
                <a href="#posts" className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  記事を読む
                </a>
                <a href="#about" className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors">
                  詳しく見る
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <main className="relative z-10" id="posts">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/debug" element={<DebugPage />} />
          <Route path="/diagnose" element={<DiagnosePage />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">© 2024 Morning × AI - シンプルに、効果的に</p>
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