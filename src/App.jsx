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
import DropdownMenu from './pages/DropdownMenu';
import Forget from './pages/Forget';
import UserPannel from './pages/UserPannel';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import AdminHome from './pages/adminDashboard/AdminHome';
import AllUsers from './pages/adminDashboard/AllUsers';

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
          <Route path="/userpanel" element={<UserPannel/>}/>
          <Route path="/forget"  element={<Forget/>} />
        </Route>

        {/* routing for admin */}
        <Route path='/adminDashboard' element={<AdminDashboard/>}>
         <Route index element={<AdminHome/>}/>
          <Route path='users' element={<AllUsers/>}/>
          </Route>
      </Routes>
      </BrowserRouter>
       
      
    
  

    </>

  )
}

export default App