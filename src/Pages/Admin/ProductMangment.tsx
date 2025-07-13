
import React, { useEffect, useState } from 'react';
import DeleteConfirmationPopup from '../../Component/shared/DeletPopup';
import ProductCreationPopup from '../../Component/shared/PopUpProduct'
import { FaPlus, FaEdit, FaTrash, FaSearch, FaImage } from 'react-icons/fa';
import  {useDeletdashboardproductsMutation, useGetDashboardProductsQuery}  from '../../store/Services/Products';
import ProductList from '../../Component/ProductList';
import Categories from '../../Component/Categories';

const ProductManagement = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [showAddModal, setShowAddModal] = useState<Boolean>(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [ApiProduct, setApiProduct] = useState([]);
  const [itemidToDelete, setitemidToDelete] = useState<number>();
  const [itemToDelete, setItemToDelete] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const {data, error, isLoading} = useGetDashboardProductsQuery()
  
  useEffect(() => {
    if (data?.data) {
      setApiProduct(data.data);
    }
  }, [data]);
 
  
 
  const [destroy ,{isLoading: looad, isSuccess }] = useDeletdashboardproductsMutation()



  const handleDeleteClick = (title: string , documentId: number) => {
    setItemToDelete(title);
    setitemidToDelete(documentId)
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setItemToDelete(''); 
  };

  const handleConfirmDelete = () => {
    destroy(itemidToDelete)
    
  };
  

  const ApiUrl = import.meta.env.VITE_SERVER_URL;



  const categories = [
    { id: 'C001', name: 'Electronics', products: 156 },
    { id: 'C002', name: 'Accessories', products: 89 },
    { id: 'C003', name: 'Clothing', products: 234 },
    { id: 'C004', name: 'Home & Garden', products: 67 },
  ];



  const handleAddProduct = () => {
    setShowAddModal(true);
  };

  const handleEditProduct = (productId: string) => {
    console.log('Editing product:', productId);
  };

  const handleDeleteProduct = (productId: string) => {
    console.log('Deleting product:', productId);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>    
        <button
          onClick={handleAddProduct}
          className="flex items-center space-x-2 bg-primary border-2 border-solid px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
        >
          <FaPlus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
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

      {activeTab === 'products' && (
        <ProductList />
      )}

      {activeTab === 'categories' && (
       <Categories/>
      )}

      {/* Add Product Modal */}
      
    </div>
  );
};

export default ProductManagement;
