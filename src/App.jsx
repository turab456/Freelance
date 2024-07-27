import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Services from './pages/Services'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
 {/* <Navbar/> */}
 {/* <Home/>  */}
 {/* <Services/> */}
 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:name" element={<Services />} />
    </Routes>
    </>
  )
}

export default App
