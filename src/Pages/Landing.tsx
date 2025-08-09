
import React from 'react';
import { FiShoppingCart, FiStar, FiArrowRight, FiCheck, FiTruck, FiShield } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { CarouselDisplay } from './../Component/Cursoal';

const Landing = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Laptop',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Smartphone',
      price: 699.99,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
      rating: 4.6
    }
  ];

  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop',
      count: 150
    },
    {
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
      count: 89
    },
    {
      name: 'Gaming',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop',
      count: 67
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Amazing products and fast delivery! Highly recommend this store.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop'
    },
    {
      name: 'Mike Chen',
      text: 'Great customer service and quality products. Will shop again!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      name: 'Emily Davis',
      text: 'Best online shopping experience I\'ve had. Everything arrived perfectly.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
       
       <CarouselDisplay/>
            
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Your Ultimate Electronics Store
              </h1>
              <p className="text-xl lg:text-2xl mb-8 opacity-90">
                Discover the latest technology and gadgets with unbeatable prices and fast shipping.
              </p>
              <button
                onClick={() => navigate('/products')}
                className="bg-white text-primary px-8 py-4  text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg"
              >
                Shop Now
                <FiArrowRight className="text-xl" />
              </button>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Electronics Store"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-fade-in">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTruck className="text-primary text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on all orders over $100</p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-primary text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">2-Year Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all products</p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheck className="text-primary text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% authentic products guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Discover our most popular items</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <button
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors transform hover:scale-105 duration-200 flex items-center gap-2"
                    >
                      <FiShoppingCart />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => navigate('/products')}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-lg">{category.count} products</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Don't just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-xl shadow-sm border animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
