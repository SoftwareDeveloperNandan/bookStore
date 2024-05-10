import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './home/Home.jsx'
import About from './about/about.jsx'
import Contact from './contact/Contact.jsx'
import Courses from './course/Courses.jsx'
import Signup from './component/Signup.jsx'

function App() {
  return (
    <>
     <div className='dark:bg-slate-100 dark:text-slate-950'>
      <Routes >
          <Route path='/' element = {<Home />} />
          <Route path='/course' element = {<Courses />} />
          <Route path='/signup' element = {<Signup />}/>
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
        </Routes>
     </div>
    </>
  )
}

export default App
