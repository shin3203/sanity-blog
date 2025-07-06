import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index-ultra-ai.css'
import App from './App-ultra-ai.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Force rebuild
