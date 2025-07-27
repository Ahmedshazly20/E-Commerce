
import Cardcomponent from '../Component/Cardcomponent';

function ProductsPage() {
    



    return (
      <div className='max-w-7xl mx-auto'>
       
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <Cardcomponent/>
          </div>
        
        </div>
      )
}

export default ProductsPage