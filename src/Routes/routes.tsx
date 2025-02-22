import {createBrowserRouter,} from "react-router-dom";
import ProductsPage from './../Pages/ProductsPage';
import Testing from './../Pages/TestingPgage';



const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/Products", 
      
      element: <ProductsPage/>,
    },
    {
      path: "/Testing",
      element: <Testing/>,
    },
  ]);

  export default router;