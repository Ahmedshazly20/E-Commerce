import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaBars } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useSelector , useDispatch } from "react-redux";
import { RootState } from '../store/store';
import CookieService from "../Services/CreateServices";
import MenuItemDropdwon from "./dropdown";
import DrawerCart from "./CartDrower";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiHeart, FiSearch } from 'react-icons/fi';
import Example from "./ProfileDropDown";


  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
   
  ];


const isAuthenticated = CookieService.get("Jwt");


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemCount = useSelector((state: RootState) => state.cart.cartProduct.length)
  const isActive = (path: string) => location.pathname === path;
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  




  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            {/*  the is logo 
             <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <FiMenu className="text-white text-lg" />
            </div> */}
            <h1 className="text-xl font-bold text-gray-900 mr-1">ElectroStore</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 text-gray-600 hover:text-primary transition-colors">
              <FiHeart className="text-xl" />
            </button>
            
            <button
              onClick={() => navigate('/mycart')}
              className="relative p-2 text-gray-600 hover:text-primary transition-colors"
            >
              <FiShoppingCart className="text-xl" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            
            <button
              
              className="p-2 text-gray-600 hover:text-primary transition-colors"
            >
             
              <Example/>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      navigate(item.path);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'text-primary bg-primary-50'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );



};

export default Navbar; 


// return (
//   <nav className="flex justify-between bg-indigo-500 text-white w-screen mb-9">
//     <div className="px-5 xl:px-12 py-4 flex w-full items-center">
//       {/* Logo */}
//       <Link to="/" className="text-3xl font-bold">
//         Delta
//       </Link>
      
//       {/* Navigation Links */}
//       <ul className="hidden md:flex px-4 mx-auto font-semibold space-x-12">
//         {navLinks.map((link) => (
//           <li key={link.path}>
//             <Link className="hover:text-gray-200" to={link.path}>
//               {link.title}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Icons Section */}
//       <div className="hidden xl:flex items-center space-x-5">
//         <Link className="hover:text-gray-200 text-xl" to="#">
//           <FaHeart className="text-2xl" />
//         </Link>

//         <Link className="relative flex items-center hover:text-gray-200 text-xl" to="#">
          
//           <DrawerCart />
//           {cartItemCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//               {cartItemCount}
//             </span>
//           )}
//         </Link>

//         {isAuthenticated ? (
//           <MenuItemDropdwon />
//         ) : (
//           <button>
//             <Link to="/Auth">log in</Link>
//           </button>
//         )}
//       </div>
//     </div>

//     {/* Mobile Menu Button */}
//     <button className="xl:hidden mr-6 text-xl" onClick={() => setIsOpen(!isOpen)}>
//       <div className="flex justify-center">
//       <Link className="relative flex items-center hover:text-gray-200 text-xl" to="#">
//           <PiShoppingCartSimpleBold className="text-2xl mr-2" />
//           {cartItemCount > 0 && (
//             <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//               {cartItemCount}
//             </span>
//           )}
//         </Link>
//         <MenuItemDropdwon />
//         <FaBars className="text-2xl ml-2" />

     
//       </div>
//     </button>

//     {/* Mobile Menu */}
//     {isOpen && (
//       <ul className="absolute top-16 left-0 bg-gray-50 text-gray-900 w-full p-5 space-y-3">
//         {navLinks.map((link) => (
//           <li key={link.path} className="x-2 py-1">
//             <Link to={link.path}>{link.title}</Link>
//           </li>
//         ))}
//       </ul>
//     )}
//   </nav>
// );