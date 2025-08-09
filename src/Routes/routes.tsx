import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Pages/Layout";
import ProductsPage from "../Pages/ProductsPage";
import Testing from "../Pages/TestingPgage";
import Auth from './../Pages/Auth';
import ProtectedRoute from "../Component/ProtectedRoute";
import Contact from "../Pages/ContactUs";
import CookieService from "../Services/CreateServices";
import Cart from './../Pages/Cart';
import ProductDetails from "../Pages/ProductDetails";
import AdminLayout from "../Pages/Admin/AdminLayout";
import UserManagement from './../Pages/Admin/UsersPage';
import ProductManagement from './../Pages/Admin/ProductMangment';
import OrdersPage from "./../Pages/Admin/Orders";
import CustomerSupport from "./../Pages/Admin/CustomerSupport";
import Landing from './../Pages/Landing';
import Aboutus from "./../Pages/Aboutus";
import UserProfile from './../Pages/Profile';
import Legal from './../Pages/legal';
import Support from './../Pages/Support';

const isAuthenticated = CookieService.get("Jwt");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        index: true,
        element: <Landing/>,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },     
      {
        path: "/mycart",
        element: <Cart />,
      },
      {
        path: "/AboutUs",
        element: <Aboutus />,
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
        path: "/Legal",
        element: (
            <Legal />
          ),
      },
      {
        path: "/CustomerSupport",
        element: (<Support/>)
      },
      {
        path: "/MyProfile",
        element: (
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/testing",
        element: <Testing />,
      },
    ],
  },

  //admin dashboard
      {
        path: "/dashboard",
        element: <AdminLayout />, 
        children: [
        {
          path: "/dashboard",
          index: true,
          element: <div>Hello from dashboard!</div>,
        },
        {
          path: "/dashboard/users",
          element: <UserManagement />,
        },
        {
          path: "/dashboard/OrdersPage",
          element: <OrdersPage />,
        },     
        {
          path: "/dashboard/analytics",
          element: <Cart />,
        },
        {
          path: "/dashboard/ProductManagement",
          element: <ProductManagement />,
        },
        {
          path: "/dashboard/CustomerSupport",
          element: <CustomerSupport />,
        },
        {
          path: "Contact",
          element: (
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Contact />
            </ProtectedRoute>
          ),
        },
       
      ],
    },

  


  {
    path: "/Auth",
    element: !isAuthenticated ? <Auth /> : <Navigate  to="/" replace />,
  },
]);

export default router;