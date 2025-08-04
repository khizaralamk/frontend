import React from 'react'
import { FiX, FiTrash2, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi'
import { useCart } from '../context/CartContext'

export default function CartSidebar() {
  const { state, closeCart, removeItem, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart()

  if (!state.isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeCart}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <FiShoppingBag className="text-2xl" />
              <h2 className="text-xl font-bold font-['Big_Shoulders_Display']">
                Shopping Cart ({getTotalItems()})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <FiShoppingBag className="text-6xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2 font-['Big_Shoulders_Display']">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 font-['Plus_Jakarta_Sans']">
                  Add some products to get started
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item, index) => (
                  <div key={`${item.id}-${item.size}-${item.player}-${index}`} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                    {/* Product Image */}
                    <div className="w-20 h-20 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm font-['Big_Shoulders_Display'] mb-1 truncate">
                        {item.team}
                      </h4>
                      <p className="text-xs text-gray-600 font-['Plus_Jakarta_Sans'] mb-2 truncate">
                        {item.name}
                      </p>
                      
                      {/* Size and Player */}
                      <div className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] mb-2">
                        <span>Size: {item.size}</span>
                        {item.player && (
                          <span className="ml-2">• {item.player}</span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm font-['Big_Shoulders_Display']">
                          {item.price}
                        </span>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                          >
                            <FiMinus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold font-['Big_Shoulders_Display']">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                          >
                            <FiPlus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              {/* Clear Cart Button */}
              <button
                onClick={clearCart}
                className="w-full text-sm text-gray-500 hover:text-red-500 transition-colors font-['Plus_Jakarta_Sans']"
              >
                Clear Cart
              </button>

              {/* Total */}
              <div className="flex justify-between items-center py-4 border-t border-gray-200">
                <span className="text-lg font-bold font-['Big_Shoulders_Display']">
                  Total
                </span>
                <span className="text-xl font-black font-['Big_Shoulders_Display']">
                  {getTotalPrice()}
                </span>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-black text-white py-4 font-bold font-['Big_Shoulders_Display'] text-lg hover:bg-gray-800 transition-colors">
                PROCEED TO CHECKOUT
              </button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full bg-white border-2 border-black text-black py-3 font-bold font-['Big_Shoulders_Display'] hover:bg-gray-50 transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
} 