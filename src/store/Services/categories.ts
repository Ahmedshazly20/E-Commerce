import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../Services/CreateServices"
export const categories = createApi({
    reducerPath:"categoriesApi",
    tagTypes: ["categories"],
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true,
    baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_SERVER_URL,
        prepareHeaders: (headers) => {
            const token = CookieService.get("Jwt");  
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
              }
            return headers;
        },},
        ),


    endpoints:(build)=>({
        getDashboardcategories: build.query({
            query: () => {
              return {url: `/api/categories`};},
              providesTags: (result, error, arg) =>
           result
      ? [...result.data.map(({ id }) => ({ type: 'categories' as const, id })), 'categories']
      : ['categories'],
                
       }),
      
       deleteDashboardcategories:build.mutation({
        query:(documentId)=>{
            return {url:`/api/categories/${documentId}`,
                    method:"DELETE",}
                 },invalidatesTags: ['categories'],}),

       UpdateDashboardcategories:build.mutation({
        query:({documentId,data })=>{
            return {url:`/api/categories/${documentId}`,
                    method:"PUT",
                     headers: {Authorization: `Bearer ${CookieService.get("Jwt")}`,
                              "Content-Type": "application/json",},
                     body:{ data }
                }
                 },invalidatesTags: ['categories'],})          


    })


   
});

export const {useGetDashboardcategoriesQuery,useDeleteDashboardcategoriesMutation,useUpdateDashboardcategoriesMutation} = categories;