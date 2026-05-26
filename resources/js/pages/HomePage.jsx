import React from 'react'
import Hero from '../components/Hero'
import PopularServices from '../components/PopularServices'
import ThaiBoranStandard from '../components/ThaiBoranStandard'
import CTA from '../components/CTA'

function HomePage({ onNavigate, onSelectService }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <PopularServices onSelectService={onSelectService} />
      <ThaiBoranStandard />
      <CTA />
    </>
  )
}

export default HomePage
