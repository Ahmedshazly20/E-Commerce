
import React, { useState } from 'react';
import { CartItem } from 'interface/interface';
import { FiTrash2, FiPlus, FiMinus, FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { imgReturn, titleclise } from '../utils/Functions';



const Cart = () => {
  const navigate = useNavigate();
  const cartItemCount = useSelector((state: RootState) => state.cart.cartProduct)

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Smartphone',
      price: 699.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop'
    }
  ]);



  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItemCount.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <FiShoppingCart className="mx-auto text-6xl text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started</p>
            <button
              onClick={() => navigate('/products')}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-gray-600">{totalItems} items in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Cart Items</h2>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 transition-colors flex items-center gap-2"
                >
                  <FiTrash2 />
                  Clear Cart
                </button>
              </div>
              
              <div className="divide-y divide-gray-200">
                { cartItemCount.map(({id, documentId, description,price,thumbnail,categories,title}) => (
                  <div
                    key={id}
                    className="p-6 animate-fade-in"
                    style={{ animationDelay: `${id * 0.1}s` }}
                  >
                    
                    <div className="flex items-center gap-4">
                      <img
                        src={imgReturn(thumbnail.url)}
                        alt={title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-base text-slate-600 cursor-pointer hover:text-cyan-600 mb-1">{titleclise(title)}</h3>
                        <p className="text-primary font-semibold  text-green-600">${price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {/* <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white rounded-full transition-colors"
                          >
                            <FiMinus className="text-gray-600" />
                          </button>
                          <span className="px-3 py-1 bg-white rounded-md font-medium min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded-full transition-colors"
                          >
                            <FiPlus className="text-gray-600" />
                          </button>
                        </div> */}
                        
                        {/* <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <FiTrash2 />
                        </button> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${(totalPrice * 1.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors transform hover:scale-105 duration-200 flex items-center justify-center gap-2">
                Proceed to Checkout
                <FiArrowRight />
              </button>
              
              <button
                onClick={() => navigate('/products')}
                className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
