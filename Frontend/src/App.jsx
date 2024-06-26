import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from './home/Home.jsx';
import About from './about/about.jsx';
import Contact from './contact/Contact.jsx';
import Courses from './course/Courses.jsx';
import Signup from './component/Signup.jsx';
import Admin from './admin/admin.jsx';
import ForgotPassword from './component/ForgotPassword.jsx';
import AdminDashboard from './dashboard/AdminDashboard.jsx';

import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvide.jsx'

function App() {
  const [authUser] = useAuth()
  console.log("deko to>>", authUser);
  return (
    <>
     <div className='dark:bg-slate-100 dark:text-slate-950'>
      <Routes >
          <Route path='/' element = {<Home />} />
          <Route path='/course' element = {authUser ? <Courses /> : <Navigate to= "/signup" />} />
          <Route path='/signup' element = {<Signup />}/>
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/admin' element ={<Admin />} />
          <Route path='/admin/forgot-password' element ={<ForgotPassword />} />
          <Route path='/admin/dashbord' element ={authUser ? <AdminDashboard /> : <Navigate to={"/admin"} /> } />
        </Routes>
        <Toaster />
     </div>
    </>
  )
}

export default App
