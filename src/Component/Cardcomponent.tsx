import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import Product from '../interface/interface';
import axios from 'axios';
import ProductSkeleton from './ProductSkeleton';
import { discraptionclise ,titleclise } from '../utils/Functions';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../store/Featuers/CartSlice';
import { Link } from 'react-router-dom';
import { useGetDashboardProductsQuery } from '../store/Services/Products';
import ErrComponent from './shared/ErrPgae';

export default function Cardcomponent({ products }: { products?: Product[] }) {
  const [Productlist, setProductlist] = useState<Product[]>(products ?? []);
  const dispatch = useDispatch();
    const {data, error, isLoading} = useGetDashboardProductsQuery()

 
 useEffect(() => {
      if (data?.data) {
        setProductlist(data.data);
       
        
      }
    }, [data]);
   
   console.log(Productlist);
  
  // if( error){
  //   return (<ErrComponent/>)
  // }


  if (isLoading && Productlist.length === 0) {
    return <>
      {Array.from({length:20}).map((_,idx)=><ProductSkeleton key={idx}/>)}
    </>;
  }

  return (
    <>
      {Productlist.length > 0 ? (
        Productlist.map((produc: Product) => (
          <div key={produc.documentId} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative group">
              <img src={(produc as any).thumbnail?.[0]?.url ?? (produc as any).thumbnail?.url ?? ''} alt={produc.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" />
            </div>
            <div className="p-5 min-h-[190px] flex flex-col justify-between">
              <Link to={`${produc.documentId}`} className="font-semibold text-gray-900 text-lg mb-2 hover:text-sky-500 cursor-pointer">{titleclise(produc.title)}</Link>
              <p className="text-sm text-gray-600 mb-4">{discraptionclise(produc.description)}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#0284c7]">${produc.price.toFixed(2)}</span>
                <div className='flex items-center gap-2 bg-[#0ea5e9] text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors'>
                  <MdAddShoppingCart />
                  <button onClick={()=>dispatch(AddToCart(produc))}>addToCart</button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : <div>there is server err</div>}
    </>
  );
}



