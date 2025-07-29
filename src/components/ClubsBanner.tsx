import React, { useState, useEffect } from 'react'

// Carousel data
const carouselData = [
  {
    id: 1,
    title: "FC Barcelona",
    image: "https://wallpapercave.com/wp/wp15449355.jpg"
  },
  {
    id: 2,
    title: "Real Madrid",
    image: "https://wallpaperbat.com/img/8047354-4k-wallpaper-desktop.jpg"
  },
  {
    id: 3,
    title: "Man city",
    image: "https://wallpapercave.com/wp/wp4565642.jpg"
  },
  {
    id: 4,
    title: "Join the Champions",
    image: "https://wallpapercave.com/wp/wp12233046.jpg"
  }
]

export default function ClubsBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(carouselInterval)
  }, [])

  return (
    <div className="w-full h-[65vh] relative overflow-hidden">
      {carouselData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          {/* Vignette overlay from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-8 mb-8">
            <h1 className="text-white text-5xl font-['Plus_Jakarta_Sans'] font-bold px-8">
              {slide.title}
            </h1>
          </div>
        </div>
      ))}
      
      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
} 