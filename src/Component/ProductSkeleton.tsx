import React from 'react'

function ProductSkeleton() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-600 animate-pulse">
   
    <div className="relative group">
      <div className="w-full h-48 bg-gray-200 rounded-t-xl"></div>
    </div>
    
    <div className="p-5 min-h-[190px] flex flex-col justify-between">
      
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
     
      <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
     
      <div className="flex items-center justify-between">
        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        <div className="flex items-center gap-2">
          <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductSkeleton