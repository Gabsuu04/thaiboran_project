import React from 'react'
import ServiceConfirmation from '../components/ServiceConfirmation'

function ConfirmationPage({ service, onBack, onConfirm }) {
  return <ServiceConfirmation service={service} onBack={onBack} onConfirm={onConfirm} />
}

export default ConfirmationPage
