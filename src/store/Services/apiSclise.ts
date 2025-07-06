import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Apislic = createApi({
    reducerPath:"api",
    tagTypes: ["Products"],
    baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_SERVER_URL}),


    endpoints:(build)=>({
        getDashboardProducts: build.query({
                query: () => {
                   // const {  page} = arg;
                    return {
                    url: `/api/products?populate=thumbnail&populate=categories`,
                    };
        }})
    })


   
});

export const {useGetDashboardProductsQuery} = Apislic;