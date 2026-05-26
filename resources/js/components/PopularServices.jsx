import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PopularServices({ onSelectService }) {
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      name: 'Hot Stone Massage',
      price: '₱950',
      duration: '90 mins',
      image: 'hotstonemassage.jpg'
    },
    {
      id: 2,
      name: 'Aroma Therapy',
      price: '₱500',
      duration: '60 mins',
      image: 'aromatherapy.jpg'
    },
    {
      id: 3,
      name: 'Scalp Massage',
      price: '₱500',
      duration: '90 mins',
      image: 'scalpmassage.jpg'
    }
  ]

  const handleServiceClick = (service) => {
    if (onSelectService) {
      onSelectService(service.id)
    }
  }

  return (
    <section className="popular-services" id="service">
      <div className="container">
        <h2 className="section-title">Popular Services</h2>
        <p className="section-subtitle">
          Carefully curated therapies designed to restore balance to your body and mind. Discover treatments to rejuvenate your senses.
        </p>
        
        <div className="services-grid">
          {services.map(service => (
            <div 
              key={service.id} 
              className="service-card"
              onClick={() => handleServiceClick(service)}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-image">
                <img src={`/images/${service.image}`} alt={service.name} />
              </div>
              <div className="service-info">
                <h3>{service.name}</h3>
                <p className="service-description">
                  {service.name === 'Hot Stone Massage' && 'Warm stone therapy to relieve muscle tension'}
                  {service.name === 'Aroma Therapy' && 'Aromatic essential oils to restore balance'}
                  {service.name === 'Scalp Massage' && 'Therapeutic scalp treatment for deep relaxation'}
                </p>
                <div className="service-details">
                  <span className="price">From {service.price}</span>
                  <span className="duration">{service.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-more">
          <a href="#services" onClick={(e) => { e.preventDefault(); navigate('/services'); window.scrollTo(0, 0); }}>View all Menu →</a>
        </div>
      </div>
    </section>
  )
}
