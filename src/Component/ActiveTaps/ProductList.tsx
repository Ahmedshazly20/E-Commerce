import React,{useState,useEffect} from 'react'
import {  FaEdit, FaTrash, FaSearch, FaPlus } from 'react-icons/fa';
import { useDeletdashboardproductsMutation, useGetDashboardProductsQuery } from '../../store/Services/Products';
import DeleteConfirmationPopup from '../shared/DeletPopup';
import { ApiUrl } from '../../api/axios.config';
import ProductCreationPopup from '../shared/PopUpProduct';
import { ExistingProductData } from 'interface/productsInterfaces';
import { useGetDashboardcategoriesQuery } from '../../store/Services/categories';


function ProductList() {
   
    const[AddModal,setAddModal] =useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [ApiProduct, setApiProduct] = useState([]);
    const [itemidToDelete, setitemidToDelete] = useState<string>();
    const [itemToDelete, setItemToDelete] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProductToEdit, setSelectedProductToEdit] = useState<ExistingProductData | null>(null);


    const {data: categoriesData, error: categoriesError, isLoading: categoriesLoading} = useGetDashboardcategoriesQuery()
    const {data, error, isLoading} = useGetDashboardProductsQuery({
      min:0,
      max:100000
    })
    
    useEffect(() => {
      if (data?.data) {
        setApiProduct(data.data);
      }
    }, [data]);

    // Filter products based on search term
    const filteredProducts = ApiProduct.filter((product: any) =>
      product.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
   
    const [destroy ,{isLoading: deleteLoading, isSuccess }] = useDeletdashboardproductsMutation()
    
    const handleDeleteClick = (title: string , documentId: string) => {
      setItemToDelete(title);
      setitemidToDelete(documentId)
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(false);
      setItemToDelete('');
    };
  
    const handleConfirmDelete = () => {
      if (itemidToDelete) {
        destroy(itemidToDelete);
      }
    };
  
    const handleEditProduct = (product: ExistingProductData) => {
     console.log(product);
     
       const productWithThumbnailUrl = {
         ...product,
         thumbnailUrl: product.thumbnail && product.thumbnail.length > 0
           ? ApiUrl + product.thumbnail[0].url
           : null,
      };
       setSelectedProductToEdit(productWithThumbnailUrl); 
      setAddModal(true);
    };

    const handleAddProduct = () => {
      setSelectedProductToEdit(null);
      setAddModal(true);
    };

    const handleCloseAddModal = () => {
      setAddModal(false);
      setSelectedProductToEdit(null);
    };

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading products...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-red-600">Error loading products. Please try again.</div>
        </div>
      );
    }

  return (
    <div className="space-y-6">
       <ProductCreationPopup 
         isOpen={AddModal}   
         categories={categoriesData?.data || []} 
         onClose={handleCloseAddModal} 
         initialData={selectedProductToEdit || undefined} 
         submission={selectedProductToEdit ? "Update product" : "Add product"}  
       />
       
       {/* Header with Add Button */}
       <div className="flex justify-between items-center">
         <h2 className="text-2xl font-bold text-gray-900">Products</h2>
         <button
           onClick={handleAddProduct}
           className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
         >
           <FaPlus className="w-4 h-4" />
           <span>Add Product</span>
         </button>
       </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm border-[#00000024] p-6">
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
                {categoriesData?.data?.map((category: any) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
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
          <div className="bg-white rounded-lg shadow-sm border-[#00000024]">
            <div className="overflow-x-auto">
              <table className="min-w-full border-red border-opacity-50">
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
                  {filteredProducts.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-8 text-gray-500">
                        {searchTerm ? 'No products found matching your search.' : 'No products available.'}
                      </td>
                    </tr>
                  ) : (
                    filteredProducts.map((product: any) => {
                      const {id, documentId, title, description, price, stock, thumbnail, categories} = product; 
                    
                      return (
                        <tr key={id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-3">
                              <img 
                                src={thumbnail && thumbnail.length > 0 ? thumbnail[0].url : '/placeholder-image.png'} 
                                alt={title} 
                                className="w-12 h-12 rounded-lg object-cover" 
                                onError={(e) => {
                                  e.currentTarget.src = '/placeholder-image.png';
                                }}
                              />
                              <div>
                                <p className="text-sm font-medium text-gray-900">{title}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-900">
                            {categories && categories.length > 0 ? categories[0]?.title : "No category"}
                          </td>
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
                                onClick={() => handleEditProduct(product)}
                                className="p-2 text-gray-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
                                title="Edit Product"
                              >
                                <FaEdit className="w-4 h-4" />
                              </button>
                              
                              <button
                                onClick={() => handleDeleteClick(title, documentId)}
                                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete Product"
                                disabled={deleteLoading}
                              >
                                <FaTrash className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <DeleteConfirmationPopup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            onConfirm={handleConfirmDelete}
            title="Confirm Deletion of Item"
            message={` ${itemToDelete}`}
            itemName={itemToDelete}
          />
        </div>
  )
}

export default ProductList