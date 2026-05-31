import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import DetailsPage from './pages/DetailsPage'
import ConfirmationPage from './pages/ConfirmationPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import '../css/index.css'
import '../css/services.css'
import '../css/service-details.css'
import '../css/service-confirmation.css'

function AppContent() {
  const navigate = useNavigate()
  const [selectedService, setSelectedService] = useState(null)

  const handleNavigate = (path, service = null) => {
    if (service) setSelectedService(service)
    navigate(path)
    window.scrollTo(0, 0)
  }

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId)
    handleNavigate('/details')
  }

  const handleConfirm = (formData) => {
    console.log('Booking confirmed:', formData)
    alert('Booking confirmed! Check your email for confirmation.')
    handleNavigate('/')
  }

  return (
    <div className="app">
      <Header onNavigate={handleNavigate} />
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigate} onSelectService={handleSelectService} />} />
        <Route 
          path="/services" 
          element={
            <ServicesPage 
              onSelectService={handleSelectService}
              onBack={() => handleNavigate('/')}
            />
          } 
        />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route 
          path="/details" 
          element={
            <DetailsPage 
              service={selectedService}
              onBack={() => handleNavigate('/services')}
              onNext={() => handleNavigate('/confirmation')}
            />
          } 
        />
        <Route 
          path="/confirmation" 
          element={
            <ConfirmationPage 
              service={selectedService}
              onBack={() => handleNavigate('/details')}
              onConfirm={handleConfirm}
            />
          } 
        />
      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
