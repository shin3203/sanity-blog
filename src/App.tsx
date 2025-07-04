import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-900">
              <a href="/">My Blog</a>
            </h1>
          </div>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t mt-12">
          <div className="container mx-auto px-4 py-8 text-center text-gray-600">
            <p>&copy; 2024 My Blog. Powered by Sanity.</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App