import React  from 'react';
import Navbar from '../Component/Navbar'
import { Outlet } from "react-router-dom";
import DrawerCart from '../Component/CartDrower'

//import { DrawerDefault } from './../Component/CartDrower';
function Layout() {
  return (
    <>
  <Navbar/>
 
  <Outlet/>

  <div>
    footer 
  </div>
  </>

  )
}

export default Layout