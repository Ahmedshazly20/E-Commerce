
import {RouterProvider,} from "react-router-dom";
import router from './Routes/routes';
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'

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
   </QueryClientProvider>
  )
}

 
