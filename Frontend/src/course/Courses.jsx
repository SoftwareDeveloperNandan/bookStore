import React from 'react'
import Navbar from '../component/Navbar.jsx'
import Course from '../component/Course.jsx'
import Footer from '../component/Footer.jsx'

function Courses() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen '>
        <Course />
      </div>
      <Footer />
    </>
  )
}

export default Courses
