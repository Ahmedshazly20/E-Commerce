import React, { useState } from 'react';
import { FiStar, FiShoppingCart, FiHeart, FiMinus, FiPlus } from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../interface/interface';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ProductPageSkeleton from './../Component/ProductDetaildsSkelton';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const ApiUrl = import.meta.env.VITE_SERVER_URL;

  // ✅ Fixed: استخدم useQuery بشكل صحيح
  const fetchProduct = async (): Promise<Product> => {
    const res = await axios.get(`${ApiUrl}/api/products/${id}?populate=thumbnail`);
    return res.data.data; // افترض إن الـ API بيرجع product واحد مش array
  };

  const { isPending, isError, data: product, error } = useQuery({
    queryKey: ['product', id],
    queryFn: fetchProduct,
  });

  // ✅ Fixed: dummy data للحاجات اللي مش موجودة في الـ API
  const additionalData = {
    rating: 4.8,
    reviews: 247,
    originalPrice: product?.price ? product.price * 1.3 : 0,
    features: [
      'High Quality Product',
      'Fast Shipping',
      'Premium Design',
      'Warranty Included'
    ],
    images: [
      `${ApiUrl}${product?.thumbnail}`,
      // يمكن تضيف صور أكتر لو متوفرة في الـ API
    ],
    brand: 'Premium Brand'
  };

  const reviews = [
    {
      id: 1,
      user: 'Ahmed Ali',
      rating: 5,
      comment: 'منتج ممتاز وجودة عالية. أنصح بشدة!',
      date: '2024-01-15'
    },
    {
      id: 2,
      user: 'Sara Mohamed',
      rating: 4,
      comment: 'منتج جيد والتوصيل كان سريع.',
      date: '2024-01-10'
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'منتج مشابه 1',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      rating: 4.9
    },
    {
      id: 3,
      name: 'منتج مشابه 2',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
      rating: 4.4
    }
  ];
   
  if (isPending) {
    return <ProductPageSkeleton />;
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">خطأ في تحميل المنتج</h2>
          <p className="text-gray-600">حدث خطأ أثناء تحميل بيانات المنتج</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">المنتج غير موجود</h2>
          <p className="text-gray-600">لم يتم العثور على المنتج المطلوب</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white">
              <img
                
                src={ ApiUrl + product.thumbnail[0].url } 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            {additionalData.images.length > 1 && (
              <div className="flex gap-4">
                {additionalData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium mb-2">{additionalData.brand}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(additionalData.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({additionalData.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">${product.price}</span>
                <span className="text-xl text-gray-500 line-through">${additionalData.originalPrice.toFixed(2)}</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                  Save ${(additionalData.originalPrice - product.price).toFixed(2)}
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {additionalData.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 py-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:bg-white rounded-full transition-colors"
                  >
                    <FiMinus />
                  </button>
                  <span className="px-3 py-1 bg-white rounded-md font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:bg-white rounded-full transition-colors"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                {product.stock} items in stock
              </p>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center gap-2">
                <FiShoppingCart />
                Add to Cart
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <FiHeart className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold">{review.user}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">${relatedProduct.price}</span>
                    <div className="flex items-center">
                      <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{relatedProduct.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;