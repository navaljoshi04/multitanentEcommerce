import React, { useState } from 'react'
import {Outlet} from "react-router-dom"

import Header from '../Home/Header'
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Footer from "../Home/Footer";
const Layout = () => {
     const [authModal, setAuthModal] = useState(null);
     console.log(authModal, "authmodel")
  return (
    <div>
        <Header onLoginClick={()=>setAuthModal("login")} />
        <Outlet />
        <Footer />
         {authModal === "login" && (
        <Login onClose={() => setAuthModal(null)} onSignup={() => setAuthModal("signup")} />
      )}

      {authModal === "signup" && (
        <Signup onClose={() => setAuthModal(null)} onLogin={() => setAuthModal("login")} />
      )}
    </div>
  )
}

export default Layout