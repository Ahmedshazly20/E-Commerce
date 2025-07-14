import React,{useState,useEffect} from 'react'
import {  FaEdit, FaTrash, FaSearch,  } from 'react-icons/fa';
import { useDeletdashboardproductsMutation, useGetDashboardProductsQuery } from '../store/Services/Products';
import DeleteConfirmationPopup from './shared/DeletPopup';
import { ApiUrl } from '../api/axios.config';
import ProductCreationPopup from './shared/PopUpProduct';
import { ExistingProductData } from 'interface/productsInterfaces';


function ProductList() {
   
    const[AddModal,setAddModal] =useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [ApiProduct, setApiProduct] = useState([]);
    const [itemidToDelete, setitemidToDelete] = useState<number>();
    const [itemToDelete, setItemToDelete] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProductToEdit, setSelectedProductToEdit] = useState<ExistingProductData | null>(null);

    const {data, error, isLoading} = useGetDashboardProductsQuery()
    
    useEffect(() => {
      if (data?.data) {
        setApiProduct(data.data);
      }
    }, [data]);
   
    
  const categories = [
    { id: 'C001', name: 'Electronics', products: 156 },
    { id: 'C002', name: 'Accessories', products: 89 },
    { id: 'C003', name: 'Clothing', products: 234 },
    { id: 'C004', name: 'Home & Garden', products: 67 },
  ];

   
    const [destroy ,{isLoading: looad, isSuccess }] = useDeletdashboardproductsMutation()
    const handleDeleteClick = (title: string , documentId: number) => {
      setItemToDelete(title);
      setitemidToDelete(documentId)
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false);
      setItemToDelete('');};
  
    const handleConfirmDelete = () => {destroy(itemidToDelete)};
  
  
    const handleEditProduct = (product:ExistingProductData) => {
        setAddModal(true)
        setSelectedProductToEdit(product);
        console.log(selectedProductToEdit);};
  
    
  

  return (
    <div className="space-y-6">
       {   <ProductCreationPopup isOpen={AddModal}   categories={categories} onClose={()=>setAddModal(false)} initialData={selectedProductToEdit || undefined} submation="Update product"  />}
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
                  {ApiProduct.map((product) =>{
                    const {id, documentId, title, description, price, stock, thumbnail, categories} = product; 
                  
                    return(<tr key={id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6">
                            <div className="flex items-center space-x-3">
                            <img src={thumbnail? ApiUrl + thumbnail[0].url  : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={title} className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">{title}</p>
                            </div>
                            </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-900">{"categories"}</td>
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
                                onClick={()=>handleEditProduct(product)}
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
                    )})}
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
  )
}

export default ProductList