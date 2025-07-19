import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { X, Upload, Package } from 'lucide-react';
import { toast } from 'react-toastify';

import { ProductFormData, ExistingProductData, ProductCreationPopupProps } from "../../interface/productsInterfaces";
import { useUpdateDashboardProductsMutation, useCreatedashboardproductMutation } from '../../store/Services/Products';

const ProductCreationPopup: React.FC<ProductCreationPopupProps> = ({
  isOpen,
  onClose,
  categories,
  submation,
  initialData
}) => {
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm<ProductFormData>({
    defaultValues: {
      documentId: '',
      title: '',
      stock: 0,
      price: 0,
      description: '',
      thumbnail: null
    }
  });

  const watchedThumbnail = watch('thumbnail');

  const [createProduct, { isLoading: isCreating, isSuccess: isCreateSuccess, isError: isCreateError }] = useCreatedashboardproductMutation();
  const [updateProduct, { isLoading: isUpdating, isSuccess: isUpdateSuccess, isError: isUpdateError }] = useUpdateDashboardProductsMutation();

  const isEditMode = !!initialData;
  const currentLoading = isEditMode ? isUpdating : isCreating;
  const currentSuccess = isEditMode ? isUpdateSuccess : isCreateSuccess;
  const currentError = isEditMode ? isUpdateError : isCreateError;

  useEffect(() => {
    if (initialData) {
      reset({
        documentId: initialData.documentId,
        title: initialData.title,
        stock: initialData.stock,
        price: initialData.price,
        description: initialData.description,
        thumbnail: null,
      });
      if (initialData.thumbnailUrl) {
        setThumbnailPreview(initialData.thumbnailUrl);
      }
    } else {
      reset({
        documentId: '',
        title: '',
        stock: 0,
        price: 0,
        description: '',
        thumbnail: null,
      });
      setThumbnailPreview(null);
    }
  }, [initialData, reset]);

  useEffect(() => {
    if (watchedThumbnail?.[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setThumbnailPreview(e.target?.result as string);
      reader.readAsDataURL(watchedThumbnail[0]);
    }
  }, [watchedThumbnail]);

  useEffect(() => {
    if (currentSuccess) {
      toast.success(`✅ Product ${isEditMode ? 'updated' : 'created'} successfully!`);
      handleClose();
    }
    if (currentError) {
      toast.error(`❌ Failed to ${isEditMode ? 'update' : 'create'} product.`);
      console.error("Operation Error:", currentError);
    }
  }, [currentSuccess, currentError, isEditMode]);

  const handleClose = () => {
    reset();
    setThumbnailPreview(null);
    onClose();
  };

  const onFormSubmit = async (data: ProductFormData) => {
    const commonProductData = {
      title: data.title,
      price: data.price,
      stock: data.stock,
      description: data.description,
    };

    const imageFile = data.thumbnail?.[0] || null;

    try {
      if (isEditMode) {
        const removeThumbnailFlag = !imageFile && initialData.thumbnailUrl && !thumbnailPreview;

        await updateProduct({
          documentId: initialData.documentId,
          productData: commonProductData,
          imageFile: imageFile,
          removeThumbnailFlag: removeThumbnailFlag,
        }).unwrap();

      } else {
        await createProduct({
          productData: commonProductData,
          imageFile: imageFile,
        }).unwrap();
      }
    } catch (error) {
      console.log(error);
      
      // Errors are handled by the useEffect hook above
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 m-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <Package className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">{isEditMode ? 'Edit Product' : 'Create New Product'}</h2>
          </div>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Product Title *</label>
            <input
              {...register('title', { required: 'Title is required' })}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter product title"
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stock *</label>
              <input
                type="number"
                {...register('stock', { required: 'Stock is required', min: { value: 0, message: 'Stock cannot be negative' } })}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.stock ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.stock && <p className="mt-1 text-sm text-red-600">{errors.stock.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price ($) *</label>
              <input
                type="number"
                step="0.01"
                {...register('price', { required: 'Price is required', min: { value: 0.01, message: 'Price must be greater than 0' } })}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.price ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
            <textarea
              {...register('description', { required: 'Description is required' })}
              rows={4}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter product description"
            />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
          </div>    
               
                {/* Categories */}
                    {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Categories *</label>
                    <div className="border rounded-md p-3 max-h-32 overflow-y-auto">
                      {categories.length === 0 ? (
                        <p className="text-gray-500 text-sm">No categories available</p>
                      ) : (
                        <div className="space-y-2">
                          {categories.map((category) => (
                            <label key={category.id} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                value={category.id}
                                {...register('categories', { required: 'At least one category is required' })}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="text-sm text-gray-700">{category.name}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                    {errors.categories && <p className="mt-1 text-sm text-red-600">{errors.categories.message}</p>}
                    </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                <Upload className="w-4 h-4" />
                <span>Choose File</span>
                <input
                  type="file"
                  accept="image/*"
                  {...register('thumbnail')}
                  className="hidden"
                />
              </label>
              {thumbnailPreview && (
                <div className="relative">
                  <img src={thumbnailPreview} alt="Preview" className="w-16 h-16 object-cover rounded-md border" />
                  <button
                    type="button"
                    onClick={() => {
                      setThumbnailPreview(null);
                      setValue('thumbnail', null);
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
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
              disabled={currentLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submation}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreationPopup;

