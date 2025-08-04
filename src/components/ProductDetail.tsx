import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiHeart, FiShare2, FiStar, FiTruck, FiShield, FiRotateCcw } from 'react-icons/fi'
import SEO from './SEO'
import { useCart } from '../context/CartContext'

// Sample product data - in a real app, this would come from an API
const productData = [
  {
    id: 1,
    name: "FC Barcelona Home Jersey 2025‑26",
    price: "₨ 1,990",
    originalPrice: "₨ 2,500",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/35d74cdc-290e-4c11-9ece-cb1a7692e957/fc-barcelona-2022-23-stadium-home-dri-fit-football-shirt-M2L7KZ.png",
    team: "FC Barcelona",
    category: "Home",
    description: "Official FC Barcelona home jersey for the 2025-26 season. Made with Nike's Dri-FIT technology for superior comfort and performance.",
    features: [
      "Nike Dri-FIT technology",
      "Official club crest",
      "Breathable fabric",
      "Lightweight construction"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    playerNames: [
      { name: "LEWANDOWSKI", number: "9" },
      { name: "PEDRI", number: "8" },
      { name: "DE JONG", number: "21" },
      { name: "GUNDOGAN", number: "22" }
    ],
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/35d74cdc-290e-4c11-9ece-cb1a7692e957/fc-barcelona-2022-23-stadium-home-dri-fit-football-shirt-M2L7KZ.png",
      "https://thejerseyarena.in/wp-content/uploads/2022/12/fcb-away.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPCqbKqyYXzJBGUDH0Uvsw1EBbU8psc0w10qXTXmIhwGOScEeIc0yHrLtLok5EC36wXQ3gxFnZXjy5WFvz9A20o7dYH8L6Le5D3B0jXk3n76P8BRGGezRp2DWMCSoviAORmxD11zvL-vjTBE0EeCjKRGaFM9tlqt-qU5o-RWV5fsyfBylcKL4fdu1Y/s1600/Real%20Madrid%2023-24%20Home%20Kit%20%20(1).jpg"
    ]
  },
  {
    id: 2,
    name: "FC Barcelona Away Jersey 2025‑26",
    price: "₨ 1,999",
    originalPrice: "₨ 2,400",
    image: "https://thejerseyarena.in/wp-content/uploads/2022/12/fcb-away.jpg",
    team: "FC Barcelona",
    category: "Away",
    description: "Official FC Barcelona away jersey for the 2025-26 season. Features a unique design with premium materials.",
    features: [
      "Nike Dri-FIT technology",
      "Official club crest",
      "Breathable fabric",
      "Lightweight construction"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    playerNames: [
      { name: "LEWANDOWSKI", number: "9" },
      { name: "PEDRI", number: "8" },
      { name: "DE JONG", number: "21" }
    ],
    images: [
      "https://thejerseyarena.in/wp-content/uploads/2022/12/fcb-away.jpg",
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/35d74cdc-290e-4c11-9ece-cb1a7692e957/fc-barcelona-2022-23-stadium-home-dri-fit-football-shirt-M2L7KZ.png"
    ]
  },
  {
    id: 3,
    name: "Real Madrid Home Kit 2025‑26",
    price: "₨ 2,399",
    originalPrice: "₨ 2,800",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPCqbKqyYXzJBGUDH0Uvsw1EBbU8psc0w10qXTXmIhwGOScEeIc0yHrLtLok5EC36wXQ3gxFnZXjy5WFvz9A20o7dYH8L6Le5D3B0jXk3n76P8BRGGezRp2DWMCSoviAORmxD11zvL-vjTBE0EeCjKRGaFM9tlqt-qU5o-RWV5fsyfBylcKL4fdu1Y/s1600/Real%20Madrid%2023-24%20Home%20Kit%20%20(1).jpg",
    team: "Real Madrid",
    category: "Home",
    description: "Official Real Madrid home kit for the 2025-26 season. Classic white design with modern performance technology.",
    features: [
      "Adidas Climacool technology",
      "Official club crest",
      "Moisture-wicking fabric",
      "Elastic fit"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    playerNames: [
      { name: "BENZEMA", number: "9" },
      { name: "VINICIUS JR", number: "7" },
      { name: "MODRIC", number: "10" },
      { name: "BELLINGHAM", number: "5" }
    ],
    images: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPCqbKqyYXzJBGUDH0Uvsw1EBbU8psc0w10qXTXmIhwGOScEeIc0yHrLtLok5EC36wXQ3gxFnZXjy5WFvz9A20o7dYH8L6Le5D3B0jXk3n76P8BRGGezRp2DWMCSoviAORmxD11zvL-vjTBE0EeCjKRGaFM9tlqt-qU5o-RWV5fsyfBylcKL4fdu1Y/s1600/Real%20Madrid%2023-24%20Home%20Kit%20%20(1).jpg",
      "https://thefootballheritage.com/wp-content/uploads/2023/10/f1e6b410_1024x1024_2x_5eeed4c5-e0bd-488c-aa16-5349e615973e.jpg"
    ]
  },
  {
    id: 4,
    name: "Real Madrid Third Kit 2025‑26",
    price: "₨ 2,499",
    originalPrice: "₨ 2,900",
    image: "https://thefootballheritage.com/wp-content/uploads/2023/10/f1e6b410_1024x1024_2x_5eeed4c5-e0bd-488c-aa16-5349e615973e.jpg",
    team: "Real Madrid",
    category: "Third",
    description: "Official Real Madrid third kit for the 2025-26 season. Unique design with premium materials and comfort.",
    features: [
      "Adidas Climacool technology",
      "Official club crest",
      "Breathable mesh panels",
      "Elastic fit"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    playerNames: [
      { name: "BENZEMA", number: "9" },
      { name: "VINICIUS JR", number: "7" },
      { name: "MODRIC", number: "10" }
    ],
    images: [
      "https://thefootballheritage.com/wp-content/uploads/2023/10/f1e6b410_1024x1024_2x_5eeed4c5-e0bd-488c-aa16-5349e615973e.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPCqbKqyYXzJBGUDH0Uvsw1EBbU8psc0w10qXTXmIhwGOScEeIc0yHrLtLok5EC36wXQ3gxFnZXjy5WFvz9A20o7dYH8L6Le5D3B0jXk3n76P8BRGGezRp2DWMCSoviAORmxD11zvL-vjTBE0EeCjKRGaFM9tlqt-qU5o-RWV5fsyfBylcKL4fdu1Y/s1600/Real%20Madrid%2023-24%20Home%20Kit%20%20(1).jpg"
    ]
  },
  {
    id: 5,
    name: "Arsenal Away Shirt 2024‑25",
    price: "₨ 2,250",
    originalPrice: "₨ 2,600",
    image: "https://content.sportslogos.net/news/2025/07/arsenal-away-front-20250724-european-kit-shirt-jersey-uniform-unveilings-spain-la-liga-england-premier-league-germany-bundesliga-france-ligue-1-italy-serie-a.jpg",
    team: "Arsenal",
    category: "Away",
    description: "Official Arsenal away shirt for the 2024-25 season. Modern design with Adidas performance technology.",
    features: [
      "Adidas AEROREADY technology",
      "Official club crest",
      "Moisture-wicking fabric",
      "Regular fit"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    playerNames: [
      { name: "SAKA", number: "7" },
      { name: "MARTINELLI", number: "11" },
      { name: "ØDEGAARD", number: "8" }
    ],
    images: [
      "https://content.sportslogos.net/news/2025/07/arsenal-away-front-20250724-european-kit-shirt-jersey-uniform-unveilings-spain-la-liga-england-premier-league-germany-bundesliga-france-ligue-1-italy-serie-a.jpg"
    ]
  },
  {
    id: 6,
    name: "PSG Home Jersey 2024‑25",
    price: "₨ 2,150",
    originalPrice: "₨ 2,500",
    image: "https://jerseybox.net/wp-content/uploads/2023/08/dx2694_411_nike_psg_home_jsy_202.png",
    team: "Paris Saint‑Germain",
    category: "Home",
    description: "Official PSG home jersey for the 2024-25 season. Classic design with Nike's latest performance technology.",
    features: [
      "Nike Dri-FIT technology",
      "Official club crest",
      "Breathable fabric",
      "Athletic fit"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    playerNames: [
      { name: "MBAPPÉ", number: "7" },
      { name: "NEYMAR", number: "10" },
      { name: "MESSI", number: "30" }
    ],
    images: [
      "https://jerseybox.net/wp-content/uploads/2023/08/dx2694_411_nike_psg_home_jsy_202.png"
    ]
  },
  {
    id: 7,
    name: "Manchester City Home Shirt 2025‑26",
    price: "₨ 1,990",
    originalPrice: "₨ 2,400",
    image: "https://calcioitalia.com/media/cache/sylius_shop_product_original/95/b0/f43c35fa81a36beccd4eadce2c7a.jpeg",
    team: "Manchester City",
    category: "Home",
    description: "Official Manchester City home shirt for the 2025-26 season. Puma performance technology with classic design.",
    features: [
      "Puma DRYCELL technology",
      "Official club crest",
      "Moisture-wicking fabric",
      "Regular fit"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    playerNames: [
      { name: "HAALAND", number: "9" },
      { name: "DE BRUYNE", number: "17" },
      { name: "FODEN", number: "47" }
    ],
    images: [
      "https://calcioitalia.com/media/cache/sylius_shop_product_original/95/b0/f43c35fa81a36beccd4eadce2c7a.jpeg"
    ]
  },
  {
    id: 8,
    name: "Liverpool Home Jersey 2024‑25",
    price: "₨ 2,000",
    originalPrice: "₨ 2,400",
    image: "https://thumblr.uniid.it/product/174758/f24182f7a92e.jpg",
    team: "Liverpool",
    category: "Home",
    description: "Official Liverpool home jersey for the 2024-25 season. Nike performance technology with classic red design.",
    features: [
      "Nike Dri-FIT technology",
      "Official club crest",
      "Breathable fabric",
      "Regular fit"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    playerNames: [
      { name: "SALAH", number: "11" },
      { name: "DIOGO J.", number: "20" },
      { name: "VAN DIJK", number: "4" }
    ],
    images: [
      "https://thumblr.uniid.it/product/174758/f24182f7a92e.jpg"
    ]
  }
]

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem, toggleCart } = useCart()
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedPlayer, setSelectedPlayer] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = productData.find(p => p.id === parseInt(id || "1"))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-black text-white px-6 py-2 rounded"
          >
            Go Back Home
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size")
      return
    }
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      team: product.team,
      category: product.category,
      size: selectedSize,
      player: selectedPlayer || undefined,
      quantity
    })
    
    // Show success message and open cart
    alert("Item added to cart!")
    toggleCart()
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size")
      return
    }
    console.log("Buy now:", {
      product: product.name,
      size: selectedSize,
      player: selectedPlayer,
      quantity
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={`${product.name} - ${product.team} | Cronaldo Sports`}
        description={`Buy official ${product.name} from ${product.team}. ${product.description} Available in sizes S-XXL with player customization. Free shipping worldwide.`}
        keywords={`${product.team}, ${product.name}, ${product.category} jersey, football shirt, soccer jersey, official kit, ${product.team} jersey`}
        image={product.images[0]}
        url={`https://cronaldosports.com/product/${product.id}`}
        type="product"
        productData={{
          name: product.name,
          price: product.price,
          brand: product.team,
          category: `${product.category} Jersey`
        }}
      />
      {/* Header */}
      <div className="bg-black text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:text-gray-300 transition-colors"
          >
            <FiArrowLeft className="text-xl" />
            <span className="font-['Big_Shoulders_Display']">Back to Collection</span>
          </button>
          <h1 className="text-2xl font-black font-['Big_Shoulders_Display']">CRONALDO SPORTS</h1>
          <div className="flex items-center gap-4">
            <button className="hover:text-gray-300 transition-colors">
              <FiShare2 className="text-xl" />
            </button>
            <button 
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`hover:text-gray-300 transition-colors ${isWishlisted ? 'text-red-500' : ''}`}
            >
              <FiHeart className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-black text-white text-xs px-3 py-1 font-bold font-['Big_Shoulders_Display']">
                  {product.category}
                </span>
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-black font-['Big_Shoulders_Display'] mb-2">
                {product.team}
              </h1>
              <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans'] text-gray-700 mb-4">
                {product.name}
              </h2>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-black text-black font-['Big_Shoulders_Display']">
                  {product.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded font-bold">
                  SALE
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-bold font-['Big_Shoulders_Display'] mb-2">Description</h3>
              <p className="text-gray-600 font-['Plus_Jakarta_Sans'] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-bold font-['Big_Shoulders_Display'] mb-2">Features</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 font-['Plus_Jakarta_Sans']">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-bold font-['Big_Shoulders_Display'] mb-3">Select Size</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border-2 font-bold font-['Big_Shoulders_Display'] transition-all ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-gray-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Player Name Selection */}
            {product.playerNames.length > 0 && (
              <div>
                <h3 className="text-lg font-bold font-['Big_Shoulders_Display'] mb-3">Add Player Name (Optional)</h3>
                <div className="flex gap-3 flex-wrap">
                  <button
                    onClick={() => setSelectedPlayer("")}
                    className={`px-4 py-2 border-2 font-bold font-['Big_Shoulders_Display'] text-sm transition-all ${
                      selectedPlayer === "" 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-gray-500'
                    }`}
                  >
                    PLAIN
                  </button>
                  {product.playerNames.map((player) => (
                    <button
                      key={player.number}
                      onClick={() => setSelectedPlayer(`${player.name} ${player.number}`)}
                      className={`px-4 py-2 border-2 font-bold font-['Big_Shoulders_Display'] text-sm transition-all ${
                        selectedPlayer === `${player.name} ${player.number}` 
                          ? 'border-black bg-black text-white' 
                          : 'border-gray-300 text-gray-700 hover:border-gray-500'
                      }`}
                    >
                      {player.name} {player.number}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-bold font-['Big_Shoulders_Display'] mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 text-center font-bold font-['Big_Shoulders_Display']">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500 font-['Plus_Jakarta_Sans']">
                  {quantity} in cart
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-white border-2 border-black text-black py-4 font-bold font-['Big_Shoulders_Display'] text-lg hover:bg-gray-50 transition-colors"
              >
                ADD TO CART
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full bg-black text-white py-4 font-bold font-['Big_Shoulders_Display'] text-lg hover:bg-gray-800 transition-colors"
              >
                BUY IT NOW
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <FiTruck className="text-2xl mx-auto mb-2 text-gray-600" />
                <p className="text-xs font-['Plus_Jakarta_Sans'] text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <FiShield className="text-2xl mx-auto mb-2 text-gray-600" />
                <p className="text-xs font-['Plus_Jakarta_Sans'] text-gray-600">Secure Payment</p>
              </div>
              <div className="text-center">
                <FiRotateCcw className="text-2xl mx-auto mb-2 text-gray-600" />
                <p className="text-xs font-['Plus_Jakarta_Sans'] text-gray-600">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 