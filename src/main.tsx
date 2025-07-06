import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index-ai-nature.css'
import App from './App-ai-nature.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Force rebuild
