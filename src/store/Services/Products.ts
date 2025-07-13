import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../Services/CreateServices"
export const Apislic = createApi({
    reducerPath:"api",
    tagTypes: ["Products"],
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true,
    baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_SERVER_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = CookieService.get("jwt"); // هات التوكن من الكوكيز
            if (token) {
                headers.set("Authorization", `Bearer ${token}`); // ضيف التوكن في الـ Header
            }
            return headers;
        },},
        ),


    endpoints:(build)=>({
        getDashboardProducts: build.query({
                query: () => {
                  return {url: `/api/products?populate=thumbnail&populate=categories`};},
                  providesTags: (result, error, arg) =>
               result
          ? [...result.data.map(({ id }) => ({ type: 'Products' as const, id })), 'Products']
          : ['Products'],
                    
    }),
        deletdashboardproducts:build.mutation({
            query(documentId) {
                return{
                    url:`/api/products/${documentId}`,
                    method:"DELETE",
                    
                }}, invalidatesTags: ['Products'],


        })
    })


   
});

export const {useGetDashboardProductsQuery,useDeletdashboardproductsMutation} = Apislic;