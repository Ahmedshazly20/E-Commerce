import React , { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { X, Package } from 'lucide-react';
import { toast } from 'react-toastify';
import { useUpdateDashboardcategoriesMutation,useAddDashboardcategoriesMutation } from '../store/Services/categories';
import {  ProductCreationPopupProps } from "../interface/productsInterfaces";

const PopUpCategoraise: React.FC<ProductCreationPopupProps> = ({ isOpen, onClose, submission,initialData}) => {
  

const [updateCategory, { isLoading: isUpdating, isSuccess, isError }] = useUpdateDashboardcategoriesMutation();
const [createCategory, { isLoading: isCreating, isSuccess: isCreateSuccess, isError: isCreateError }] = useAddDashboardcategoriesMutation();



  const { register, handleSubmit, formState: { errors },reset} = useForm();

   useEffect(() => {
    
    reset({title:initialData.title,
          documentId:initialData.documentId})}
    
    ,[initialData]);

    useEffect(() => {
       if (isSuccess) {
         toast.success(`✅ Category updated successfully`);
         handleClose();
       }
       if (isError) {
         toast.error(`❌ Category Fild  to  update `);
        
       }
       if(isCreateSuccess){
        toast.success(`✅ Category created successfully`);
        handleClose()
       }
       if(isCreateError){
        toast.error(`❌ Category Fild  to  create `);
        
       }
     }, [isSuccess, isError,isCreateSuccess,isCreateError]);

   const handleClose = () => {
    reset({categories:""});
    onClose();
  };


 const onFormSubmit = async (formData) => {
const isEdit = initialData && Object.keys(initialData).length > 0;

  if (isEdit) {
    updateCategory({
      documentId: formData.documentId,
      data: { title: formData.title },
    });
  } else {
    createCategory({
      data: { title: formData.title },
    });
  }
        

    };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 m-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <Package className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">{  'Edit Categorais' }</h2>
          </div>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">categories Title *</label>
            <input
              {...register('title', { required: 'categories is required' })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter product title"
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
          </div>

          
        
             

         
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit(onFormSubmit)}
              // disabled={currentLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submission }
            </button>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default PopUpCategoraise;

