import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  const handleNavClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => handleNavClick('/')} style={{cursor: 'pointer'}}>
          <img src="/images/thaiboranlogo.jpg" alt="Thai Boran" className="logo-img" />
        </div>
        <nav className="nav-menu">
          <a href="#service" onClick={(e) => { e.preventDefault(); handleNavClick('/services') }}>Service</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="book-now-btn" onClick={() => handleNavClick('/services')}>Book Now</button>
      </div>
    </header>
  )
}
