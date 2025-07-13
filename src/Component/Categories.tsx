import React from 'react'
import {  FaEdit, FaTrash,  } from 'react-icons/fa';

function Categories() {
    const categories = [
        { id: 'C001', name: 'Electronics', products: 156 },
        { id: 'C002', name: 'Accessories', products: 89 },
        { id: 'C003', name: 'Clothing', products: 234 },
        { id: 'C004', name: 'Home & Garden', products: 67 },
      ];
    
    


  return (
    <div className="space-y-6">
    {/* Categories Table */}
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Category ID</th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Name</th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Products</th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-sm text-primary font-medium">{category.id}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{category.name}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{category.products}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors">
                      <FaEdit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Categories