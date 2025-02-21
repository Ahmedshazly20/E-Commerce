import {createBrowserRouter,} from "react-router-dom";
import ProductsPage from './../Pages/ProductsPage';



const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/Products",
      element: <ProductsPage/>,
    },
  ]);

  export default router;