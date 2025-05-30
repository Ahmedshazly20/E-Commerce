
import {RouterProvider,} from "react-router-dom";
import router from './Routes/routes';
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import { ToastContainer, toast } from 'react-toastify';

 import './output.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      refetchOnWindowFocus:false
    }
  },
}
  
)


export default function App() {


  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />   
    <ToastContainer />

   </QueryClientProvider>
  )
}

 
