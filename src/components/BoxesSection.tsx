import React from 'react'

export default function BoxesSection() {
  return (
    <div className="flex flex-wrap">
      {/* Box 1 */}
      <div 
        className="w-1/2 h-[47vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="text-center text-white relative z-10">
          <h2 className="text-3xl font-bold mb-4">Box 1</h2>
          <p className="text-lg">Content for box 1</p>
        </div>
      </div>

      {/* Box 2 */}
      <div 
        className="w-1/2 h-[47vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="text-center text-white relative z-10">
          <h2 className="text-3xl font-bold mb-4">Box 2</h2>
          <p className="text-lg">Content for box 2</p>
        </div>
      </div>

      {/* Box 3 */}
      <div 
        className="w-1/2 h-[47vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3621103/pexels-photo-3621103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="text-center text-white relative z-10">
          <h2 className="text-3xl font-bold mb-4">Box 3</h2>
          <p className="text-lg">Content for box 3</p>
        </div>
      </div>

      {/* Box 4 */}
      <div 
        className="w-1/2 h-[47vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3628913/pexels-photo-3628913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="text-center text-white relative z-10">
          <h2 className="text-3xl font-bold mb-4">Box 4</h2>
          <p className="text-lg">Content for box 4</p>
        </div>
      </div>
    </div>
  )
} 