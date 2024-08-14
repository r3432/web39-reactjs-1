import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/user/common/Footer'
import Header from '../components/user/common/Header'

const Layout = () => {
  return (

    <>

  
     <Header />
     <Outlet/>
     
      <Footer/>
    </>
 
  )
}

export default Layout
