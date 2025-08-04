import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ClubsBanner from './components/ClubsBanner'
import FeaturedCollection from './components/FeaturedCollection'
import OurClubs from './components/OurClubs'
import OurProducts from './components/OurProducts'
import TestimonialsAndNumbers from './components/TestimonialsAndNumbers'
import ContactUs from './components/ContactUs'
import ProductDetail from './components/ProductDetail'
import CollectionsPage from './components/CollectionsPage'
import CartSidebar from './components/CartSidebar'
import SEO from './components/SEO'
import { CartProvider } from './context/CartContext'
import logo from './assets/icons/cronaldosports-03.png'

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
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50 bg-black">
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
    <CartProvider>
      {/* Main application container */}
      <div className='bg-white transition-all duration-1000'>
        <Routes>
          <Route path="/" element={
            <>
              <SEO 
                title="Cronaldo Sports - Premium Football Jerseys & Sports Gear"
                description="Shop official football jerseys from top clubs like FC Barcelona, Real Madrid, Arsenal, PSG, Manchester City, and Liverpool. Authentic sports gear with worldwide shipping."
                keywords="football jerseys, soccer shirts, sports gear, FC Barcelona, Real Madrid, Arsenal, PSG, Manchester City, Liverpool, official jerseys, football kits"
                url="https://cronaldosports.com"
              />
              <Navbar />
              <ClubsBanner />
              <FeaturedCollection />
              <OurClubs />
              <OurProducts />
              <TestimonialsAndNumbers />
              <ContactUs />
            </>
          } />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/collections" element={<CollectionsPage />} />
        </Routes>
        <CartSidebar />
      </div>
    </CartProvider>
  )
}
