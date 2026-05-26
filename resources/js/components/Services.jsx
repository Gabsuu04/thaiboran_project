import React, { useState } from 'react'

export default function Services({ onSelectService, onBack }) {
  const [selectedService, setSelectedService] = useState(null)

  const serviceCategories = [
    {
      id: 0,
      categoryName: 'Popular Services',
      duration: 'Best Sellers',
      services: [
        {
          id: 1,
          name: 'Hot Stone Massage',
          description: 'Warm stone therapy to relieve muscle tension and promote deep relaxation.',
          icon: '🔥',
          durations: [90],
          prices: { 90: 950 }
        },
        {
          id: 2,
          name: 'Aroma Therapy',
          description: 'Aromatic essential oils to restore balance and enhance well-being.',
          icon: '🌿',
          durations: [60],
          prices: { 60: 500 }
        },
        {
          id: 3,
          name: 'Scalp Massage',
          description: 'Therapeutic scalp treatment for deep relaxation and stress relief.',
          icon: '👤',
          durations: [90],
          prices: { 90: 500 }
        }
      ]
    },
    {
      id: 1,
      categoryName: 'Regular Rates',
      duration: '1 Hour',
      services: [
        {
          id: 101,
          name: 'Thai Body Massage',
          description: 'Traditional Thai full body massage therapy to restore balance and improve flexibility.',
          icon: '🧘',
          durations: [60],
          prices: { 60: 500 }
        },
        {
          id: 102,
          name: 'Back Massage',
          description: 'Specialized back massage to relieve tension and muscle soreness.',
          icon: '💪',
          durations: [60],
          prices: { 60: 500 }
        },
        {
          id: 103,
          name: 'Foot Massage',
          description: 'Therapeutic foot reflexology treatment for complete body relaxation.',
          icon: '👣',
          durations: [60],
          prices: { 60: 500 }
        },
        {
          id: 104,
          name: 'Swedish Massage',
          description: 'Classic Swedish massage technique for deep muscle relaxation.',
          icon: '✨',
          durations: [60],
          prices: { 60: 500 }
        }
      ]
    },
    {
      id: 2,
      categoryName: 'Combo Rates',
      duration: '2 Hours',
      services: [
        {
          id: 201,
          name: '(1) Swedish & Foot Massage',
          description: 'Combination of Swedish massage and therapeutic foot reflexology.',
          icon: '💆',
          durations: [120],
          prices: { 120: 950 }
        },
        {
          id: 202,
          name: '(2) Thai Body & Foot Massage',
          description: 'Traditional Thai body massage combined with foot reflexology therapy.',
          icon: '🧘',
          durations: [120],
          prices: { 120: 950 }
        },
        {
          id: 203,
          name: '(3) Back & Foot Massage',
          description: 'Back massage paired with soothing foot reflexology treatment.',
          icon: '🎯',
          durations: [120],
          prices: { 120: 950 }
        },
        {
          id: 204,
          name: '(4) Back & Thai Body Massage',
          description: 'Combination of back massage and traditional Thai body therapy.',
          icon: '💪',
          durations: [120],
          prices: { 120: 950 }
        },
        {
          id: 205,
          name: '(5) Swedish & Back Massage',
          description: 'Swedish massage technique combined with specialized back treatment.',
          icon: '✨',
          durations: [120],
          prices: { 120: 950 }
        },
        {
          id: 206,
          name: '(6) Swedish & Thai Body Massage',
          description: 'Perfect blend of Swedish and traditional Thai massage therapies.',
          icon: '🌟',
          durations: [120],
          prices: { 120: 950 }
        }
      ]
    },
    {
      id: 3,
      categoryName: 'Combo Rates',
      duration: '3 Hours',
      services: [
        {
          id: 301,
          name: '(7) Unlimited Choice of Massage',
          description: 'Ultimate relaxation package with your choice of any massage combinations.',
          icon: '👑',
          durations: [180],
          prices: { 180: 1400 }
        }
      ]
    }
  ]

  const handleSelectTreatment = (serviceId) => {
    setSelectedService(serviceId)
    // Navigate to details page
    onSelectService && onSelectService(serviceId)
  }

  return (
    <section className="services-page">
      <div className="services-container">
        {/* Step Indicator */}
        <div className="step-indicator">
          <div className="step active">
            <span className="step-number">1</span>
            <span className="step-label">Services</span>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <span className="step-label">Details</span>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <span className="step-label">Confirm</span>
          </div>
        </div>

        {/* Page Title */}
        <div className="services-header">
          <h1 className="services-title">Choose Your Path to Healing</h1>
          <p className="services-subtitle">
            Select from our curated range of authentic Thai therapies, designed to restore balance and revitalize your spirit.
          </p>
        </div>

        {/* Service Categories */}
        {serviceCategories.map(category => (
          <div key={category.id} className="service-category">
            <h2 className="category-title">{category.categoryName}</h2>
            
            <div className="treatments-grid">
              {category.services.map(service => (
                <div key={service.id} className="treatment-card">
                  <div className="treatment-icon">{service.icon}</div>
                  
                  <h3 className="treatment-name">{service.name}</h3>
                  <p className="treatment-description">{service.description}</p>
                  
                  <div className="treatment-options">
                    {service.durations.map(duration => (
                      <div key={duration} className="duration-option">
                        <span className="duration">{duration} min</span>
                        <span className="price">From ₱{service.prices[duration]}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className="select-treatment-btn"
                    onClick={() => handleSelectTreatment(service.id)}
                  >
                    Select Treatment
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
