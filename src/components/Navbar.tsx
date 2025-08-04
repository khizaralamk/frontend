import React, { useState } from 'react'
import { FiShoppingBag, FiSearch, FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/icons/cronaldosports-01.png'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { toggleCart, getTotalItems } = useCart()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery)
  }



  const handleProductsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const productsSection = document.getElementById('products')
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after click
  }

  const handleClubsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const clubsSection = document.getElementById('clubs')
    if (clubsSection) {
      clubsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after click
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after click
  }

  return (
    <nav className="bg-white px-4 md:px-8 py-2 w-full relative">
      <div className="flex items-center justify-between">
        
        {/* Logo on the left */}
        <div className="flex items-center w-24 md:w-32">
          <img 
            src={logo} 
            alt="Cronaldo Sports Logo" 
            className="h-6 md:h-8 w-auto"
          />
        </div>

        {/* Desktop Navigation links - hidden on mobile */}
        <div className="hidden md:flex items-center space-x-8 -ml-12">
          <a 
            href="#products" 
            onClick={handleProductsClick}
            className="text-black hover:text-black no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-200 hover:after:w-full font-big-shoulders font-semibold text-lg"
          >
            Products
          </a>
          <a 
            href="#clubs" 
            onClick={handleClubsClick}
            className="text-black hover:text-black no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-200 hover:after:w-full font-big-shoulders font-semibold text-lg"
          >
            Clubs
          </a>
          <a 
            href="#contact" 
            onClick={handleContactClick}
            className="text-black hover:text-black no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-200 hover:after:w-full font-big-shoulders font-semibold text-lg"
          >
            Contact
          </a>
        </div>

        {/* Right side: Cart and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Cart button */}
          <button 
            onClick={toggleCart}
            className="flex items-center space-x-2 px-2 md:px-3 py-1 border border-black text-black rounded-full transition-colors duration-200 hover:bg-gray-100"
          >
            <FiShoppingBag className="w-4 h-4" />
            <span className="text-sm font-medium">{getTotalItems()}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#products" 
              onClick={handleProductsClick}
              className="block text-black hover:text-gray-600 no-underline font-big-shoulders font-semibold text-xl py-3 border-b border-gray-100"
            >
              Products
            </a>
            <a 
              href="#clubs" 
              onClick={handleClubsClick}
              className="block text-black hover:text-gray-600 no-underline font-big-shoulders font-semibold text-xl py-3 border-b border-gray-100"
            >
              Clubs
            </a>
            <a 
              href="#contact" 
              onClick={handleContactClick}
              className="block text-black hover:text-gray-600 no-underline font-big-shoulders font-semibold text-xl py-3 border-b border-gray-100"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
