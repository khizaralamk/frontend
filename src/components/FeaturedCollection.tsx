import React, { useState } from 'react'

// Sample shirt data
const shirtData = [
  {
    id: 1,
    name: "FC Barcelona Home Jersey 2025‑26",
    price: "₨ 1,990",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/35d74cdc-290e-4c11-9ece-cb1a7692e957/fc-barcelona-2022-23-stadium-home-dri-fit-football-shirt-M2L7KZ.png",
    team: "FC Barcelona",
    category: "Home",
    link: "https://orangeblacksports.com/product/fc-barcelona-home-shirt/"
  },
  {
    id: 2,
    name: "FC Barcelona Away Jersey 2025‑26",
    price: "₨ 1,999",
    image: "https://thejerseyarena.in/wp-content/uploads/2022/12/fcb-away.jpg",
    team: "FC Barcelona",
    category: "Away",
    link: "https://orangeblacksports.com/product/fc-barcelona-away-shirt/"
  },
  {
    id: 3,
    name: "Real Madrid Home Kit 2025‑26",
    price: "From ₨ 2,399",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPCqbKqyYXzJBGUDH0Uvsw1EBbU8psc0w10qXTXmIhwGOScEeIc0yHrLtLok5EC36wXQ3gxFnZXjy5WFvz9A20o7dYH8L6Le5D3B0jXk3n76P8BRGGezRp2DWMCSoviAORmxD11zvL-vjTBE0EeCjKRGaFM9tlqt-qU5o-RWV5fsyfBylcKL4fdu1Y/s1600/Real%20Madrid%2023-24%20Home%20Kit%20%20(1).jpg",
    team: "Real Madrid",
    category: "Home",
    link: "https://footballshirtspk.com/new-arrivals/real-25-26-home-kit/"
  },
  {
    id: 4,
    name: "Real Madrid Third Kit 2025‑26",
    price: "₨ 2,499",
    image: "https://thefootballheritage.com/wp-content/uploads/2023/10/f1e6b410_1024x1024_2x_5eeed4c5-e0bd-488c-aa16-5349e615973e.jpg",
    team: "Real Madrid",
    category: "Third",
    link: "https://footballshirtspk.com/new-arrivals/real-25-26-third-kit/"
  },
  {
    id: 5,
    name: "Arsenal Away Shirt 2024‑25",
    price: "₨ 2,250",
    image: "https://content.sportslogos.net/news/2025/07/arsenal-away-front-20250724-european-kit-shirt-jersey-uniform-unveilings-spain-la-liga-england-premier-league-germany-bundesliga-france-ligue-1-italy-serie-a.jpg",
    team: "Arsenal",
    category: "Away",
    link: "https://sportsplanet.pk/collections/arsenal"
  },
  {
    id: 6,
    name: "PSG Home Jersey 2024‑25",
    price: "₨ 2,150",
    image: "https://jerseybox.net/wp-content/uploads/2023/08/dx2694_411_nike_psg_home_jsy_202.png",
    team: "Paris Saint‑Germain",
    category: "Home",
    link: "https://sportsplanet.pk/collections/psg"
  },
  {
    id: 7,
    name: "Manchester City Home Shirt 2025‑26",
    price: "₨ 1,990",
    image: "https://calcioitalia.com/media/cache/sylius_shop_product_original/95/b0/f43c35fa81a36beccd4eadce2c7a.jpeg",
    team: "Manchester City",
    category: "Home",
    link: "https://orangeblacksports.com/product/manchester-city-home-shirt/"
  },
  {
    id: 8,
    name: "Liverpool Home Jersey 2024‑25",
    price: "₨ 2,000",
    image: "https://thumblr.uniid.it/product/174758/f24182f7a92e.jpg",
    team: "Liverpool",
    category: "Home",
    link: "https://antstore.pk/products/liverpool-home-shirt-24-25"
  }
];

export default function FeaturedCollection() {
  const [addedItems, setAddedItems] = useState<number[]>([]);

  const handleQuickAdd = (e: React.MouseEvent, shirtId: number) => {
    e.stopPropagation(); // Prevent card click when clicking quick add button
    setAddedItems(prev => {
      if (prev.includes(shirtId)) {
        return prev.filter(id => id !== shirtId);
      } else {
        return [...prev, shirtId];
      }
    });
    
    // You can add toast notification here
    console.log(`Item ${shirtId} ${addedItems.includes(shirtId) ? 'removed from' : 'added to'} cart`);
  };

  const handleCardClick = (link: string) => {
    window.open(link, '_blank');
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {shirtData.map((shirt) => (
            <ProductItem 
              key={shirt.id} 
              shirt={shirt} 
              onQuickAdd={handleQuickAdd}
              onCardClick={handleCardClick}
              isAdded={addedItems.includes(shirt.id)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="bg-black text-white px-8 py-3 font-bold font-['Big_Shoulders_Display'] text-lg tracking-wide hover:bg-gray-800 transition-colors duration-200">
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
  onCardClick, 
  isAdded 
}: { 
  shirt: any; 
  onQuickAdd: (e: React.MouseEvent, shirtId: number) => void;
  onCardClick: (link: string) => void;
  isAdded: boolean;
}) {
  return (
    <div 
      className="space-y-4 cursor-pointer group transition-transform duration-200 hover:scale-105"
      onClick={() => onCardClick(shirt.link)}
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
            onClick={(e) => onQuickAdd(e, shirt.id)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-white text-black hover:bg-black hover:text-white'
            } shadow-lg hover:shadow-xl`}
          >
            {isAdded ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            )}
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