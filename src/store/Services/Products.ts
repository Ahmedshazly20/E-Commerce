import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../Services/CreateServices"
export const Apislic = createApi({
    reducerPath:"api",
    tagTypes: ["Products"],
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true,
    baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_SERVER_URL}),


    endpoints:(build)=>({
        getDashboardProducts: build.query({
                query: () => {
                   // const {  page} = arg;
                    return {
                    url: `/api/products?populate=thumbnail&populate=categories`,
                    };
        }}),
        deletdashboardproducts:build.mutation({
            query(id) {
                return{
                    url:`/api/products/${id}`,
                    method:"DELETE",
                    headers:{
                        Authorization:`Bearer ${CookieService.get("Jwt")}`
                    }
                }},
        })
    })


   
});

export const {useGetDashboardProductsQuery,useDeletdashboardproductsMutation} = Apislic;