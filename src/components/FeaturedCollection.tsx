import React from 'react'

// Sample shirt data
const shirtData = [
  {
    id: 1,
    name: "FC Barcelona Home Jersey 2025‑26",
    price: "₨ 1,990",
    image: "https://orangeblacksports.com/wp-content/uploads/fc-barcelona-home.jpg",
    team: "FC Barcelona",
    category: "Home",
    link: "https://orangeblacksports.com/product/fc-barcelona-home-shirt/"
  },
  {
    id: 2,
    name: "FC Barcelona Away Jersey 2025‑26",
    price: "₨ 1,999",
    image: "https://orangeblacksports.com/wp-content/uploads/fc-barcelona-away.jpg",
    team: "FC Barcelona",
    category: "Away",
    link: "https://orangeblacksports.com/product/fc-barcelona-away-shirt/"
  },
  {
    id: 3,
    name: "Real Madrid Home Kit 2025‑26",
    price: "From ₨ 2,399",
    image: "https://footballshirtspk.com/wp-content/uploads/realmadrid-home.jpg",
    team: "Real Madrid",
    category: "Home",
    link: "https://footballshirtspk.com/new-arrivals/real-25-26-home-kit/"
  },
  {
    id: 4,
    name: "Real Madrid Third Kit 2025‑26",
    price: "₨ 2,499",
    image: "https://footballshirtspk.com/wp-content/uploads/realmadrid-third.jpg",
    team: "Real Madrid",
    category: "Third",
    link: "https://footballshirtspk.com/new-arrivals/real-25-26-third-kit/"
  },
  {
    id: 5,
    name: "Arsenal Away Shirt 2024‑25",
    price: "₨ 2,250",
    image: "https://sportsplanet.pk/wp-content/uploads/arsenal-away.jpg",
    team: "Arsenal",
    category: "Away",
    link: "https://sportsplanet.pk/collections/arsenal"
  },
  {
    id: 6,
    name: "PSG Home Jersey 2024‑25",
    price: "₨ 2,150",
    image: "https://sportsplanet.pk/wp-content/uploads/psg-home.jpg",
    team: "Paris Saint‑Germain",
    category: "Home",
    link: "https://sportsplanet.pk/collections/psg"
  },
  {
    id: 7,
    name: "Manchester City Home Shirt 2025‑26",
    price: "₨ 1,990",
    image: "https://orangeblacksports.com/wp-content/uploads/mancity-home.jpg",
    team: "Manchester City",
    category: "Home",
    link: "https://orangeblacksports.com/product/manchester-city-home-shirt/"
  },
  {
    id: 8,
    name: "Liverpool Home Jersey 2024‑25",
    price: "₨ 2,000",
    image: "https://antstore.pk/wp-content/uploads/barcelona-home.jpg",
    team: "Liverpool",
    category: "Home",
    link: "https://antstore.pk/products/liverpool-home-shirt-24-25"
  }
];

export default function FeaturedCollection() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-['Plus_Jakarta_Sans']">
            Featured Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of premium football jerseys from top clubs around the world
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shirtData.map((shirt) => (
            <div 
              key={shirt.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={shirt.image} 
                  alt={shirt.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-black text-white text-xs px-2 py-1 rounded-full font-medium">
                    {shirt.category}
                  </span>
                </div>
                {/* Quick Add Button */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-black px-4 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                  {shirt.team}
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {shirt.name}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    {shirt.price}
                  </span>
                  <button className="text-black hover:text-gray-600 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  )
} 