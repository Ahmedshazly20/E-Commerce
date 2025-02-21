import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,} from "react-router-dom";
import { Provider } from './components/ui/provider';
import router from './Routes/routes';


createRoot(document.getElementById('root')!).render(
  
  
  <StrictMode>
    <Provider>

   <RouterProvider router={router} />
   </Provider>

  </StrictMode>,
)

