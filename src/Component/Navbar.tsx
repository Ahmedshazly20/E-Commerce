import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import CookieService from "../Services/CreateServices";
import MenuItems from "./dropdown";
import MenuItemDropdwon from "./dropdown";


const navLinks = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
  { title: "Collections", path: "/collections" },
  { title: "Contact Us", path: "/Contact" },

];

const isAuthenticated = CookieService.get("Jwt");

console.log(isAuthenticated);


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  

  return (
    <nav className="flex justify-between bg-indigo-500 text-white w-screen mb-9">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          Delta
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex px-4 mx-auto font-semibold space-x-12">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link className="hover:text-gray-200" to={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons Section */}
        <div className="hidden xl:flex items-center space-x-5">
          <Link className="hover:text-gray-200 text-xl" to="#">
            <FaHeart />
          </Link>

          <Link className="relative flex items-center hover:text-gray-200 text-xl" to="#">
            <FaShoppingCart />
            <span className="absolute -mt-5 ml-4 animate-ping h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-pink-500"></span>
          </Link>

 
             {isAuthenticated ? 
                  
                    <MenuItemDropdwon />

                    
                  : <button><Link to="/Auth">log in</Link></button> }
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="xl:hidden mr-6 text-xl" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-center">
        <MenuItemDropdwon  />
        <FaBars className="text-2xl ml-2" />
      
        </div>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 bg-gray-50 text-gray-900 w-full p-5 space-y-3">
          {navLinks.map((link) => (
            <li key={link.path} className="x-2 py-1">
              <Link  to={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
          
          
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
