import React from 'react'
import Services from '../components/Services'

function ServicesPage({ onSelectService, onBack }) {
  return <Services onSelectService={onSelectService} onBack={onBack} />
}

export default ServicesPage
