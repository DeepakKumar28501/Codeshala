import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Navbar2 from './Components/Navbar2.jsx'
import Footer from './Components/Footer.jsx'
import './index.css';
import Banner from './Components/Banner.jsx';
function Layout() {
  return (
    <>
    
      {/* <Navbar/> */}
      <Navbar/>
        <Outlet/>
      {/* <Footer/> */}
    </>
  )
}

export default Layout
