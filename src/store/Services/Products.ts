import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../Services/CreateServices"
export const Apislic = createApi({
    reducerPath:"api",
    tagTypes: ["Products"],
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true,
    baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_SERVER_URL,
        prepareHeaders: (headers) => {
            const token = CookieService.get("Jwt"); // هات التوكن من الكوكيز
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
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


        }),
        updatedashboardproduct:build.mutation({
            query({ documentId, ...fields }){
                const token = CookieService.get("Jwt");
                return{
                    url:`/api/products/${documentId}`,
                    method:"PUT",
                    headers:{Authorization: `Bearer ${token}`},
                       
                    body: {
                        data: fields, 
                      },
                      
                }
            },invalidatesTags: ['Products'],

        }),
        createdashboardproduct:build.mutation({
            query({data}){
                const token = CookieService.get("Jwt");
                return{
                    url:`/api/products/${documentId}`,
                    method:"POST",
                    headers:{Authorization: `Bearer ${token}`},
                       
                    body: {
                        data: fields, 
                      },
                      
                }
            },invalidatesTags: ['Products'],

        }),

      



    })


   
});

export const {useGetDashboardProductsQuery,useDeletdashboardproductsMutation,useUpdatedashboardproductMutation} = Apislic;