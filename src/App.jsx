import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroSection from './pages/HeroSection';
import Footer from './components/Footer';
import Login from './pages/Login';
import OtpVerify from './pages/OtpVerify';
import Signup from './pages/Signup';
import Header from './components/Header';
import DropdownMenu from './pages/DropdownMenu';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar />}>
          <Route index element={<LandingPage/>} />

          {/* Nested routes (⚠ HERE: remove / from child paths) */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="otp-verify" element={<OtpVerify />} />
          <Route path="/Header" element={<Header/>}/>
        </Route>

      </Routes>
      </BrowserRouter>
       
       <Footer />
    
  

    </>

  )
}

export default App