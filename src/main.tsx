import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,} from "react-router-dom";
import { Provider } from './components/ui/provider';
import router from './Routes/routes';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

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
  

    <Provider>

   <RouterProvider router={router} />
   </Provider>

  
  </QueryClientProvider>,
)

