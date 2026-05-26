import React from 'react'
import ServiceDetails from '../components/ServiceDetails'

function DetailsPage({ service, onBack, onNext }) {
  return <ServiceDetails service={service} onBack={onBack} onNext={onNext} />
}

export default DetailsPage
