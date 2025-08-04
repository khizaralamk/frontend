import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchAllShirts, type Shirt } from '../api'
import { useCart } from '../context/CartContext'
import SEO from './SEO'

// Sample data for different clubs
const clubData = [
  {
    id: 'barcelona',
    name: 'FC Barcelona',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    description: 'Official FC Barcelona jerseys and kits'
  },
  {
    id: 'real-madrid',
    name: 'Real Madrid',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    description: 'Official Real Madrid jerseys and kits'
  },
  {
    id: 'arsenal',
    name: 'Arsenal',
    logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
    description: 'Official Arsenal jerseys and kits'
  },
  {
    id: 'psg',
    name: 'Paris Saint-Germain',
    logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
    description: 'Official PSG jerseys and kits'
  },
  {
    id: 'man-city',
    name: 'Manchester City',
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    description: 'Official Manchester City jerseys and kits'
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
    description: 'Official Liverpool jerseys and kits'
  }
]

export default function CollectionsPage() {
  const [activeTab, setActiveTab] = useState('barcelona')
  const [shirts, setShirts] = useState<Shirt[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const { addItem, toggleCart } = useCart()

  useEffect(() => {
    const loadShirts = async () => {
      try {
        setLoading(true)
        const data = await fetchAllShirts()
        setShirts(data)
      } catch (err) {
        setError('Failed to load shirts')
        console.error('Error loading shirts:', err)
      } finally {
        setLoading(false)
      }
    }

    loadShirts()
  }, [])

  const handleQuickAdd = (e: React.MouseEvent, shirt: Shirt) => {
    e.stopPropagation()
    
    // Add item to cart with default size M
    addItem({
      id: shirt.id,
      name: shirt.name,
      price: shirt.price,
      originalPrice: shirt.price, // Use same price as original for now
      image: shirt.image,
      team: shirt.team,
      category: shirt.category,
      size: 'M', // Default size
      quantity: 1
    })
    
    // Show success message and open cart
    alert("Item added to cart!")
    toggleCart()
  }

  const handleCardClick = (shirtId: number) => {
    navigate(`/product/${shirtId}`)
  }

  // Filter shirts based on active tab
  const filteredShirts = shirts.filter(shirt => {
    const clubName = shirt.team.toLowerCase()
    const activeClub = clubData.find(club => club.id === activeTab)
    return activeClub && clubName.includes(activeClub.name.toLowerCase().replace('fc ', '').replace(' ', ''))
  })

  const activeClub = clubData.find(club => club.id === activeTab)

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={`${activeClub?.name} Jerseys & Kits | Collections | Cronaldo Sports`}
        description={`Shop official ${activeClub?.name} jerseys and kits. ${activeClub?.description} Available in all sizes with player customization.`}
        keywords={`${activeClub?.name}, ${activeClub?.name} jersey, ${activeClub?.name} kit, football shirt, soccer jersey, official kit`}
        url={`https://cronaldosports.com/collections/${activeTab}`}
      />
      
      {/* Header */}
      <div className="bg-black text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:text-gray-300 transition-colors font-['Big_Shoulders_Display']"
          >
            ← Back to Home
          </button>
          <h1 className="text-3xl font-black font-['Big_Shoulders_Display']">COLLECTIONS</h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Club Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {clubData.map((club) => (
              <button
                key={club.id}
                onClick={() => setActiveTab(club.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-200 font-['Big_Shoulders_Display'] font-bold ${
                  activeTab === club.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <img 
                  src={club.logo} 
                  alt={`${club.name} logo`}
                  className="w-6 h-6 object-contain"
                />
                <span>{club.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Club Info */}
        {activeClub && (
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img 
                src={activeClub.logo} 
                alt={`${activeClub.name} logo`}
                className="w-16 h-16 object-contain"
              />
              <h2 className="text-4xl font-black font-['Big_Shoulders_Display']">
                {activeClub.name}
              </h2>
            </div>
            <p className="text-gray-600 font-['Plus_Jakarta_Sans'] text-lg max-w-2xl mx-auto">
              {activeClub.description}
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-600 font-['Plus_Jakarta_Sans'] text-lg">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-black text-white px-6 py-2 font-bold font-['Big_Shoulders_Display'] hover:bg-gray-800 transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Products Grid */}
        {!loading && !error && (
          <>
            {filteredShirts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredShirts.map((shirt) => (
                  <ProductItem 
                    key={shirt.id} 
                    shirt={shirt} 
                    onQuickAdd={handleQuickAdd}
                    onCardClick={handleCardClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 font-['Plus_Jakarta_Sans'] text-lg">
                  No jerseys available for {activeClub?.name} at the moment.
                </p>
                <p className="text-gray-400 font-['Plus_Jakarta_Sans'] text-sm mt-2">
                  Check back soon for new arrivals!
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function ProductItem({ 
  shirt, 
  onQuickAdd, 
  onCardClick
}: { 
  shirt: Shirt; 
  onQuickAdd: (e: React.MouseEvent, shirt: Shirt) => void;
  onCardClick: (shirtId: number) => void;
}) {
  return (
    <div 
      className="space-y-4 cursor-pointer group transition-transform duration-200 hover:scale-105"
      onClick={() => onCardClick(shirt.id)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img 
          src={shirt.image} 
          alt={shirt.name}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-black text-white text-xs px-3 py-1 font-bold font-['Big_Shoulders_Display']">
            {shirt.category}
          </span>
        </div>
        
        {/* Quick Add Button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={(e) => onQuickAdd(e, shirt)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 bg-white text-black hover:bg-black hover:text-white shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-bold text-black font-['Big_Shoulders_Display'] text-lg group-hover:text-gray-700 transition-colors duration-200">
          {shirt.team}
        </h3>
        <p className="text-gray-600 font-['Plus_Jakarta_Sans'] text-sm group-hover:text-gray-500 transition-colors duration-200">
          {shirt.name}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-xl font-black text-black font-['Big_Shoulders_Display']">
            {shirt.price}
          </span>
          <span className="text-xs text-gray-400 font-['Plus_Jakarta_Sans']">
            Click to view
          </span>
        </div>
      </div>
    </div>
  )
} 