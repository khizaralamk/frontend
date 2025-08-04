import React from 'react'

const productCategories = [
  {
    id: 1,
    name: "Jerseys",
    image: "https://wallpapercave.com/wp/wp10209855.jpg",
    description: "Official team jerseys"
  },
  {
    id: 2,
    name: "Trousers",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&w=1000&q=80",
    description: "Sports trousers & shorts"
  },
  {
    id: 3,
    name: "Sports Items",
    image: "https://wallpaperaccess.com/full/1594708.jpg",
    description: "Accessories & equipment"
  }
]

export default function OurProducts() {
  return (
    <section id="products" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight mb-4 font-['Big_Shoulders_Display']">
            OUR PRODUCTS
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
            Premium sports gear for every athlete
          </p>
        </div>

        {/* Products Grid - Three equal columns with no gap */}
        <div className="grid grid-cols-3 gap-0">
          {productCategories.map((category) => (
            <ProductCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCategory({ category }: { category: any }) {
  return (
    <div className="relative group cursor-pointer overflow-hidden">
      {/* Image Container with 3:4 aspect ratio */}
      <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
        <img 
          src={category.image} 
          alt={`${category.name} category`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback for broken images
            e.currentTarget.src = 'https://via.placeholder.com/400x533?text=' + category.name
          }}
        />
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Category Name - Positioned at bottom center */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
          <h3 className="font-black text-white font-['Big_Shoulders_Display'] text-3xl mb-2">
            {category.name}
          </h3>
          <p className="text-gray-200 font-['Plus_Jakarta_Sans'] text-sm">
            {category.description}
          </p>
        </div>
      </div>
    </div>
  )
} 