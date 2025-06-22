import React,{ useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Link } from 'react-router-dom';
import { Plus, Minus, X } from 'lucide-react';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { titlDrowereclise } from '../utils/Functions';

const DrawerCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?/80',
      price: 29.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/80',
      price: 49.99,
      quantity: 1,
    },
  ]);

  const ApiUrl = import.meta.env.VITE_SERVER_URL;


  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const cartItemCount = useSelector((state: RootState) => state.cart.cartProduct)

  console.log(cartItemCount);
  

  return (
    <>
      <button
        onClick={toggleDrawer}
        className="relative flex items-center text-white hover:text-gray-200"
      >
        <PiShoppingCartSimpleBold className="text-2xl" />
        {cartItemCount.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bg-white w-full max-w-sm p-4 shadow-xl"
        style={{ zIndex: 1000 }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
            <button
              onClick={toggleDrawer}
              className="text-gray-600 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
              <span className="sr-only">Close</span>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">
                Your cart is empty
              </p>
            ) : (
              <div className="space-y-4 ">
                {cartItemCount.map(({description,id ,price,thumbnail,title}) => (
                  <div
                    key={id}
                    className="flex items-center p-1 gap-4 text-gray-500 hover:text-slate-200 hover:bg-violet-600 transition   border-b-2 border-indigo-500"
                  >
                    <img
                       src={thumbnail?.formats?.thumbnail?.url ? ApiUrl + thumbnail.formats.thumbnail.url : 'placeholderImage.png'}
                      alt={title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold hover:text-slate-200 text-gray-800">
                        {titlDrowereclise(title)}
                      </h3>
                      <p className="text-xs   ">
                        ${price.toFixed(2)} 
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                       
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-4">
            <Link
              to="/cart"
              onClick={toggleDrawer}
              className="block w-full bg-indigo-500 text-white text-center py-2 rounded-md hover:bg-indigo-600 transition-colors duration-200"
            >
              Checkout
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerCart;