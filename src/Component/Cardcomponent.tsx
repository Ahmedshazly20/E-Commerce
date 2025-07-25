import React, { useState } from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import  Product  from '../interface/interface';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'
import  ProductSkeleton  from './ProductSkeleton';
import { discraptionclise ,titleclise } from '../utils/Functions';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../store/Featuers/CartSlice';
import { Link } from 'react-router-dom';


export default function Cardcomponent() {
  const [Productlist, setProductlist] = useState<Product[]>([]);
  const ApiUrl = import.meta.env.VITE_SERVER_URL;
  
 


  const dispatch = useDispatch()

  
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${ApiUrl}/api/products?populate=thumbnail&populate=categories`);
      console.log(res.data.data);
      setProductlist(res.data.data);} catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['Products'],
    queryFn: fetchProducts,
  })

 

  if (isPending) {
    return(  
      <>
         { Array.from({length:20}).map((_,idx)=> 
        <ProductSkeleton key={idx}/>)}
        </>
    )}
   
  

  
    return (
      <>
      {Productlist.length > 0 ? (
        Productlist.map((produc: Product) =>  (      
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative group">
          <img
                 src={
                  produc.thumbnail?.[0]?.url // نتحقق إذا كان thumbnail موجود كـ array، ثم أول عنصر، ثم الـ url
                    ? ApiUrl + produc.thumbnail[0].url
                    : `${ApiUrl}/uploads/Gemini_Generated_Image_u5prrwu5prrwu5pr_913e06db1b.png` // صورة بديلة في حالة عدم وجود صورة
                }
                         alt={produc.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" />
        </div>
        <div className="p-5 min-h-[190px] flex flex-col justify-between">
          <Link  to={`${produc.documentId}`} className="font-semibold text-gray-900 text-lg mb-2 hover:text-sky-500 cursor-pointer">{titleclise(produc.title)}</Link>
          <p className="text-sm text-gray-600 mb-4">{discraptionclise(produc.description)}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#0284c7]">
              ${produc.price.toFixed(2)}
            </span>
            <div className='flex items-center gap-2 bg-[#0ea5e9] text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors'>
            <MdAddShoppingCart />

              <button className="" onClick={()=>dispatch(AddToCart(produc))} >addToCart</button>
            </div>
          
          </div>
        </div>
      </div>
      ))):<div>there is server err </div>


    }
    </>)}



