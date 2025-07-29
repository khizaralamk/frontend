import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import logo from '../assets/icons/cronaldosports-01.png'

export default function Navbar() {

  return (
        <nav className="bg-white px-8 py-5 w-full">
      <div className="flex items-center justify-between">
        
        {/* Logo on the left */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Cronaldo Sports Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation links in the middle */}
        <div className="hidden md:flex items-center space-x-8 -ml-24">
          <a 
            href="#products" 
            className="text-black hover:text-black no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-200 hover:after:w-full font-big-shoulders font-semibold text-xl"
          >
            Products
          </a>
          <a 
            href="#products" 
            className="text-black hover:text-black no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-200 hover:after:w-full font-big-shoulders font-semibold text-xl"
          >
            Clubs
          </a>
          <a 
            href="#products" 
            className="text-black hover:text-black no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-200 hover:after:w-full font-big-shoulders font-semibold text-xl"
          >
            Contact
          </a>
         
        </div>

        {/* Right side: Cart */}
        <div className="flex items-center">
          {/* Cart button */}
          <button className="p-2  rounded-full transition-colors duration-200 relative">
            <FiShoppingCart className="w-6 h-6 hover:text-gray-500 text-black transition-colors duration-200" />
            {/* Cart badge */}
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}
