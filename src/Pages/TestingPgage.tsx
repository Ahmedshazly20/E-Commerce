// Demo
import React, { useState } from 'react';
import ProductCreationPopup from './../Component/shared/PopUpProduct';
import { ProductFormData } from '../interface/productsInterfaces';

const Demo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: 1, documentId: '1', title: 'Electronics', createdAt: '', updatedAt: '', publishedAt: '' },
    { id: 2, documentId: '2', title: 'Clothing', createdAt: '', updatedAt: '', publishedAt: '' },
    { id: 3, documentId: '3', title: 'Books', createdAt: '', updatedAt: '', publishedAt: '' },
    { id: 4, documentId: '4', title: 'Home & Garden', createdAt: '', updatedAt: '', publishedAt: '' }
  ];

  const handleSubmit = async (data: ProductFormData) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Product created:', data);
    alert('Product created successfully!');
    setLoading(false);
    setIsOpen(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Product Management</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Create New Product
        </button>
      </div>

      <ProductCreationPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        categories={categories}
        submission="Create Product"
        isLoading={loading}
      />
    </div>
  );
};

export default Demo;