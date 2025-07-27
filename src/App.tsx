
import {RouterProvider,} from "react-router-dom";
import router from './Routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import './output.css'
import { store } from './store/store';
import { Provider } from 'react-redux';
import InternetConnection from './Services/internetconnaction';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus:false
    }
  },
}
  
)


export default function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <InternetConnection>
        <RouterProvider router={router} />   
        <ToastContainer />
        </InternetConnection>
      </Provider>
   </QueryClientProvider>
  )
}

 
