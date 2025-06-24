import React from 'react';

const ProductPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-200"></div>
            <div className="flex gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="w-20 h-20 rounded-lg overflow-hidden bg-gray-200"
                ></div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-gray-200 rounded-full"></div>
                  ))}
                  <div className="h-4 bg-gray-200 rounded w-16 ml-2"></div>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-6 bg-gray-200 rounded w-20"></div>
                <div className="h-5 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-12"></div>
              </div>
            </div>

            <div>
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>

            <div>
              <div className="h-5 bg-gray-200 rounded w-1/3 mb-3"></div>
              <ul className="space-y-2">
                {[...Array(3)].map((_, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 py-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="h-4 bg-gray-200 rounded w-16"></div>
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <div className="h-6 bg-gray-200 rounded w-12"></div>
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 h-12 bg-gray-200 rounded-lg"></div>
              <div className="h-12 w-12 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="space-y-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-5 bg-gray-200 rounded w-24"></div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-gray-200 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <div className="w-full h-48 bg-gray-200"></div>
                </div>
                <div className="p-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="flex items-center justify-between">
                    <div className="h-5 bg-gray-200 rounded w-16"></div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-8"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSkeleton;