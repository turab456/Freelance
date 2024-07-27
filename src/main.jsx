import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import { BrowserRouter } from 'react-router-dom'
import MyProvider from './context/MyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
        <MyProvider>
    <ParallaxProvider>

    <App />

    </ParallaxProvider>
    </MyProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
