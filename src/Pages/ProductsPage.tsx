
import { useEffect, useState } from 'react';
import Cardcomponent from '../Component/Cardcomponent';
import ProductFilters from './../Component/Filters';
import { useGetDashboardcategoriesQuery } from '../store/Services/categories';

interface Category {
  documentId: string;
  title: string;
}

function ProductsPage() {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const { data, isSuccess, isError } = useGetDashboardcategoriesQuery();

  useEffect(() => {
    if (data) {
      setCategories(data.data);
    }
  }, [data]);

   
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setMinPrice(0);
    setMaxPrice(100000);
    setSelectedCategories([]);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 100000;
    setMaxPrice(value);
  };

  return (
    <div className='max-w-7xl mx-auto min-h-[90vh] my-5'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className='col-span-1'>
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button 
                onClick={clearFilters} 
                className="cursor-pointer  hover:bg-indigo-500 hover:text-white px-2 py-1 rounded  text-sm text-primary hover:text-primary-600 transition-colors"
              >
                Clear All
              </button>
            </div>

            <div>
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="w-full px-3 py-2 border border-indigo-600 rounded-md text-sm"
                    placeholder="Min"
                    min="0"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="w-full px-3 py-2 border border-indigo-600 rounded-md text-sm"
                    placeholder="Max"
                    min="0"
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category.documentId} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.title)}
                      onChange={() => handleCategoryChange(category.title)}
                      className="mr-2 checked:text-white accent-sky-600"
                    />
                    {category.title}
                  </label>
                ))}
              </div>
            </div>
            <div className='flex justify-center '>
                  <button className='bg-indigo-500 text-white px-4 py-1 cursor-pointer  rounded'>show result</button>
            </div>
          </div>
        </div>

        <div className='col-span-1 md:col-span-3'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Cardcomponent  min={minPrice} max={maxPrice}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;