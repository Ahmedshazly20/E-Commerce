import Navbar from '../Component/Navbar'
import { Outlet } from "react-router-dom";
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