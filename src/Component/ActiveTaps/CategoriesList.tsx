import React,{useEffect,useState} from 'react'
import {  FaEdit, FaPlus, FaTrash,  } from 'react-icons/fa';
import {useGetDashboardcategoriesQuery,useDeleteDashboardcategoriesMutation} from '../../store/Services/categories'
import DeleteConfirmationPopup from '../shared/DeletPopup';
import PopUpCategoraise from '../CategoraisePopUp';
import { toast } from 'react-toastify';


function Categories() {

    const [itemidToDelete, setitemidToDelete] = useState<number>();
    const [itemToDelete, setItemToDelete] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const[AddModal,setAddModal] =useState<boolean>(false);
    const [CategoriesToEdit , setCategoriesToEdit]=useState([])
    const [Apicategories , setcategories]=useState([])
    const [submation,setsubmation]=useState<string>("Update Categories")

  const {data  , isSuccess  , isError} =useGetDashboardcategoriesQuery()

  const [destroy ,{isLoading: looad,isSuccess:deleteisSuccess  }]=useDeleteDashboardcategoriesMutation()
     
     useEffect(() => {
        if (deleteisSuccess) {
           toast.success(`✅ Category Delete successfully`);
        }
      }, [deleteisSuccess]);
    

      useEffect(() => {
        if (data?.data) {
          setcategories(data.data);
        }
      }, [data]);

     const handleClosePopup = () => {
      setIsPopupOpen(false);
      setItemToDelete('');};

     const handleEditProduct = (Categories) => {
      setsubmation("Edit  Categories")
       setAddModal(true)
       setCategoriesToEdit(Categories)
     }
     const handleAddProduct =()=>{
      setAddModal(true)
      setsubmation("Add new Categories")

     }

     //

     const handleDeleteClick = (title: string , documentId: number) => {
      setItemToDelete(title);
      setitemidToDelete(documentId)
      setIsPopupOpen(true);
    };
    const handleConfirmDelete = () => {destroy(itemidToDelete)};

     
  
  return (
    <div className="space-y-6">
      <PopUpCategoraise isOpen={AddModal} onClose={()=>setAddModal(false)}  submission={submation} initialData={CategoriesToEdit} />
    {/* Categories Table */}
    <div className="bg-white rounded-lg shadow-sm border-[#00000024]">
      <div className="overflow-x-auto">
        <div className='p-1 flex items-end justify-end m-3 '>
                 <button
                    onClick={handleAddProduct}
                    className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                    <FaPlus className="w-4 h-4" />
                    <span>Add Categories</span>
                  </button>
           
                 
          </div>
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
            {Apicategories.map((category) => (
              <tr key={category.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-sm text-primary font-medium">{category.id}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{category.title}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{category.products}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors">
                      <FaEdit className="w-4 h-4" onClick={()=>handleEditProduct(category)} />
                    </button>
                    <button  onClick={() => handleDeleteClick(category.title,category.documentId)} className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <DeleteConfirmationPopup
                          isOpen={isPopupOpen}
                          onClose={handleClosePopup}
                          onConfirm={handleConfirmDelete}
                          title="Confirm Deletion of category Item"
                          message={` ${itemToDelete}`}
                          itemName={itemToDelete}/>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Categories