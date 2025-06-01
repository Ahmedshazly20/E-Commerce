import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Pages/Layout";
import ProductsPage from "../Pages/ProductsPage";
import Testing from "../Pages/TestingPgage";
import Auth from './../Pages/Auth';
import ProtectedRoute from "../Component/ProtectedRoute";
import Contact from "../Pages/ContactUs";
import CookieService from "../Services/CreateServices";

const isAuthenticated = CookieService.get("Jwt");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        index: true,
        element: <div>Hello world!</div>,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/Contact",
        element: (
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "/testing",
        element: <Testing />,
      },
    ],
  },
  {
    path: "/Auth",
    element: !isAuthenticated ? <Auth /> : <Navigate  to="/" replace />,
  },
]);

export default router;