import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import ProductsPage from "../Pages/ProductsPage";
import Testing from "../Pages/TestingPgage";
import Auth from './../Pages/Auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <div>Hello world!</div>,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/testing",
        element: <Testing />,
      },
    ],
  },
  {
    path: "/Auth",
    element: <Auth/>,
  },
]);

export default router;
