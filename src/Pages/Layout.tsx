import React,{ useEffect,useState }  from 'react';
import Navbar from '../Component/Navbar'
import { Outlet } from "react-router-dom";
import Footer from './../Component/Footer';

function Layout() {


  return (
    <>
  <Navbar/>
 
  <Outlet/>

 <Footer/>
  </>

  )
}

export default Layout