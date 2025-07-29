import React from 'react'

export default function BannerSection() {
  return (
    <section className="relative h-[45vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?_gl=1*13jklvg*_ga*NzU4MTQ0MzcyLjE3NTM4MTI3NDM.*_ga_8JE65Q40S6*czE3NTM4MTI3NDIkbzEkZzEkdDE3NTM4MTI3NTgkajQ0JGwwJGgw')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Vignette effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-80 opacity-60 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-end justify-start h-full px-8 pb-24">
        <div className="text-left text-white max-w-5xl">
          <h1 className="text-5xl md:text-[120px] font-bold mb-2 font-['Plus_Jakarta_Sans']">
            Welcome to CRonaldo Sports
          </h1>
        
        </div>
      </div>

      {/* Arrow button on the right center */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <button className="bg-white bg-opacity-10 hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
} 