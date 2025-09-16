import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App_Provider from './context.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App_Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </App_Provider>
  </StrictMode>
)
