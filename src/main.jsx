import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')

if (!root) {
  console.error('Root element not found!')
} else {
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  } catch (error) {
    console.error('Error rendering app:', error)
    root.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <h1>Error Loading Application</h1>
        <p>${error.message}</p>
      </div>
    `
  }
}

