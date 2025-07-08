
import React, { useEffect, useState } from 'react';
import DeleteConfirmationPopup from '../../Component/shared/DeletPopup';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaImage } from 'react-icons/fa';
import  {useDeletdashboardproductsMutation, useGetDashboardProductsQuery}  from '../../store/Services/Products';

const ProductManagement = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [showAddModal, setShowAddModal] = useState(false);
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



  const handleDeleteClick = (title: string , id: number) => {
    setItemToDelete(title);
    setitemidToDelete(id)
 
    
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setItemToDelete(''); // ممكن تمسح اسم العنصر لما الـ popup يتقفل
  };

  const handleConfirmDelete = () => {
      destroy(itemidToDelete)
    
    console.log(`Deleting item: ${itemToDelete}`);
    alert(`${itemToDelete} has been deleted! (This is a simulation)`);
    // بعد الحذف، ممكن تعمل refresh للستة أو أي حاجة تانية
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
          className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
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
        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="accessories">Accessories</option>
                <option value="clothing">Clothing</option>
              </select>

              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                <option value="">Stock Status</option>
                <option value="in-stock">In Stock</option>
                <option value="low-stock">Low Stock</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
            </div>

            
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Product</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Category</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Price</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Stock</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Rating</th>
                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {ApiProduct.map(({id, documentId, title, description, price, stock, createdAt, updatedAt, publishedAt, thumbnail, categories}) => (
                    <tr key={id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                     
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          <img src={ApiUrl + thumbnail[0].url} alt={title} className="w-12 h-12 rounded-lg object-cover" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{title}</p>
                            
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">{categories[0].title}</td>
                      <td className="py-4 px-6 text-sm text-gray-900">${price}</td>
                      <td className="py-4 px-6">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          stock > 50 ? 'bg-green-100 text-green-800' :
                          stock > 10 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {stock}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">⭐ </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleEditProduct(id)}
                            className="p-2 text-gray-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
                            title="Edit Product"
                          >
                            <FaEdit className="w-4 h-4" />
                          </button>
                         
                          <button
                            onClick={() => handleDeleteClick(title,documentId)}
                            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Product"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                   <DeleteConfirmationPopup
                          isOpen={isPopupOpen}
                          onClose={handleClosePopup}
                          onConfirm={handleConfirmDelete}
                          title="Confirm Deletion of Item"
                          message={` ${itemToDelete}`}
                          itemName={itemToDelete}/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'categories' && (
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
      )}

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Add New Product</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Electronics</option>
                    <option>Accessories</option>
                    <option>Clothing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stock</label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Images</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FaImage className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400">PNG, JPG up to 10MB</p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors">
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
