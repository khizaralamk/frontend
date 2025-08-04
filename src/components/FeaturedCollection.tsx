import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchFeaturedShirts, type Shirt } from '../api'
import { useCart } from '../context/CartContext'

export default function FeaturedCollection() {
  const [shirts, setShirts] = useState<Shirt[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { addItem, toggleCart } = useCart();

  useEffect(() => {
    const loadShirts = async () => {
      try {
        setLoading(true);
        const data = await fetchFeaturedShirts();
        setShirts(data);
      } catch (err) {
        setError('Failed to load featured shirts');
        console.error('Error loading shirts:', err);
      } finally {
        setLoading(false);
      }
    };

    loadShirts();
  }, []);

  const handleQuickAdd = (e: React.MouseEvent, shirt: Shirt) => {
    e.stopPropagation(); 
    
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
    });
    
    // Show success message and open cart
    alert("Item added to cart!");
    toggleCart();
  };

  const handleCardClick = (shirtId: number) => {
    navigate(`/product/${shirtId}`);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight mb-4 font-['Big_Shoulders_Display']">
            FEATURED COLLECTION
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
            Discover our latest collection of football jerseys from top clubs around the world
          </p>
        </div>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {shirts.map((shirt) => (
              <ProductItem 
                key={shirt.id} 
                shirt={shirt} 
                onQuickAdd={handleQuickAdd}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-16">
          <button 
            onClick={() => navigate('/collections')}
            className="bg-black text-white px-8 py-3 font-bold font-['Big_Shoulders_Display'] text-lg tracking-wide hover:bg-gray-800 transition-colors duration-200"
          >
            VIEW ALL COLLECTIONS
          </button>
        </div>
      </div>
    </section>
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