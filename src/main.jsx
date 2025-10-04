import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'  // Explicit .jsx extension

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)