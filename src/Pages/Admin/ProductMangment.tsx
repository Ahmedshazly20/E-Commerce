
import React, {  useState } from 'react';
import ProductCreationPopup from '../../Component/shared/PopUpProduct'
import { FaPlus } from 'react-icons/fa';
import  {useDeletdashboardproductsMutation, useGetDashboardProductsQuery}  from '../../store/Services/Products';
import ProductList from '../../Component/ActiveTaps/ProductList';
import Categories from '../../Component/ActiveTaps/CategoriesList';

const ProductManagement = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [showAddModal, setShowAddModal] = useState<Boolean>(false);
  

  

 

  const handleAddProduct = () => {
    setShowAddModal(true);
  };

  const categories = [
    { id: 'C001', name: 'Electronics', products: 156 },
    { id: 'C002', name: 'Accessories', products: 89 },
    { id: 'C003', name: 'Clothing', products: 234 },
    { id: 'C004', name: 'Home & Garden', products: 67 },
  ];



  
  return (
    <div className="p-6 space-y-6">
              <ProductCreationPopup isOpen={showAddModal} onClose={()=>setShowAddModal(false)} categories={categories} submission={'Create product'} />
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>    
        
      </div>
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('products')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'products'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'categories'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Categories
          </button>
        </nav>
      </div>

      {activeTab === 'products' && (<ProductList />)}

      {activeTab === 'categories' && (<Categories/>)} 
      </div>
  );
};

export default ProductManagement;
