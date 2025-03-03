import { createRoot } from 'react-dom/client'
import {RouterProvider,} from "react-router-dom";
import router from './Routes/routes';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
 import './output.css'
const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      refetchOnWindowFocus:false
    }
  },
}
  
)

createRoot(document.getElementById('root')!).render(
  
  <QueryClientProvider client={queryClient}>
  


   <RouterProvider router={router} />
  
  
  </QueryClientProvider>,
)

