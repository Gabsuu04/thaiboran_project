import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  const handleNavClick = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <section className="hero" style={{
      backgroundImage: 'linear-gradient(135deg, rgba(163, 138, 78, 0.85) 0%, rgba(139, 125, 107, 0.85) 100%), url(/images/thaiboranwall.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-label">SIAM SERENITY</span>
          <h2 className="hero-title">
            Experience the Art of <span className="highlight">Ancient Healing</span>
          </h2>
          <p className="hero-description">
            Steeped in luxury where traditional Thai wisdom meets modern comfort. Discover healing in every moment.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => handleNavClick('/services')}>Book Your Session</button>
            <button className="btn btn-secondary" onClick={() => handleNavClick('/services')}>Explore Services</button>
          </div>
        </div>
      </div>
    </section>
  )
}
