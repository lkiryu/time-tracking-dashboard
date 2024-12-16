import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TimeframeProvider from './context/TimeframeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimeframeProvider>
      <App />
    </TimeframeProvider>
  </StrictMode>,
)
