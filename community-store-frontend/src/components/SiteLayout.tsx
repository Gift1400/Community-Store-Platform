import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './site.css'

export default function SiteLayout() {
  return (
    <div className="site-layout">
      <Navbar />
      <div className="site-main">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}