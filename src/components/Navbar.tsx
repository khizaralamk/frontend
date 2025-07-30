import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import logo from '../assets/icons/cronaldosports-01.png'

export default function Navbar() {

  return (
        <nav className="bg-white px-8 py-2 w-full">
      <div className="flex items-center justify-between">
        
        {/* Logo on the left */}
        <div className="flex items-center w-32">
          <img 
            src={logo} 
            alt="Cronaldo Sports Logo" 
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation links in the middle */}
        <div className="hidden md:flex items-center space-x-8 -ml-12">
          <a 
            href="#products" 
            className="text-black hover:text-black no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-200 hover:after:w-full font-big-shoulders font-semibold text-lg"
          >
            Products
          </a>
          <a 
            href="#products" 
            className="text-black hover:text-black no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-200 hover:after:w-full font-big-shoulders font-semibold text-lg"
          >
            Clubs
          </a>
          <a 
            href="#products" 
            className="text-black hover:text-black no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-200 hover:after:w-full font-big-shoulders font-semibold text-lg"
          >
            Contact
          </a>
         
        </div>

        {/* Right side: Cart */}
        <div className="flex items-center">
          {/* Cart button */}
          <button className="flex items-center space-x-2 px-3 py-1 border border-black text-black rounded-full transition-colors duration-200 hover:bg-gray-100">
            <FiShoppingBag className="w-4 h-4" />
            <span className="text-sm font-medium">0</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
