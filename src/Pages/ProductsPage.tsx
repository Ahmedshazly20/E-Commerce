
import { useState } from 'react';
import Cardcomponent from '../Component/Cardcomponent';
import ProductFilters from './../Component/Filters';

function ProductsPage() {
  const [minprice , setminprice] = useState<number>(0) 
  const [Maxprice , setmaxprice] = useState<number>(100000) 
  const [Categories , setCategories] = useState<string[]>([]) 
    



    return (
     
      <div className='max-w-7xl mx-auto min-h-[90vh] my-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          <div className='col-span-1'>
            <ProductFilters/>
          </div>

          <div className='col-span-1 md:col-span-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <Cardcomponent />
            </div>
          </div>
        </div>
      </div>

        
      )
}

export default ProductsPage