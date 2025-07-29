import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ClubsBanner from './components/ClubsBanner'
import FeaturedCollection from './components/FeaturedCollection'
import OurClubs from './components/OurClubs'
import ContactUs from './components/ContactUs'
import logo from './assets/icons/cronaldosports-06.png'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showLogo, setShowLogo] = useState(true)

  useEffect(() => {
    // Blinking effect
    const blinkInterval = setInterval(() => {
      setShowLogo(prev => !prev)
    }, 1000) // Blink every 500ms

    // Stop loading after 10 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false)
      clearInterval(blinkInterval)
    }, 10000) // 10 seconds

    return () => {
      clearInterval(blinkInterval)
      clearTimeout(loadingTimeout)
    }
  }, [])



  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className={`transition-all duration-1000 ${showLogo ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src={logo} 
            alt="Cronaldo Sports Logo" 
            className="h-16 w-auto"
          />
        </div>
      </div>
    )
  }

  return (
    <div className='bg-white'>
      <Navbar />
      <ClubsBanner />
      <FeaturedCollection />
      <OurClubs />
      <ContactUs />
    </div>
  )
}
