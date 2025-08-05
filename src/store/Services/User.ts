import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../Services/CreateServices"
export const Users = createApi({
    reducerPath:"UsersApi",
    tagTypes: ["Users"],
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
        getDashboardUsers: build.query({
            query: () => {
              return {url: `/api/Users`};},
              providesTags: (result, error, arg) =>
           result
      ? [...result.data.map(({ id }) => ({ type: 'Users' as const, id })), 'Users']
      : ['Users'],
                
       }),
      
       deleteDashboardUsers:build.mutation({
        query:(documentId)=>{
            return {url:`/api/Users/${documentId}`,
                    method:"DELETE",}
                 },invalidatesTags: ['Users'],}),

       UpdateDashboardUsers:build.mutation({
        query:({documentId,data })=>{
            return {url:`/api/Users/${documentId}`,
                    method:"PUT",
                     body: { data }
                }
                 },invalidatesTags: ['Users'],}), 
       

       AddDashboardUsers:build.mutation({
        query:({data })=>{
            return {url:`/api/Users/`,
                    method:"POST",
                     headers: {Authorization: `Bearer ${CookieService.get("Jwt")}`,
                              "Content-Type": "application/json",},
                     body: { data },
                }
                 },invalidatesTags: ['Users'],})           


    })


   
});

export const {useGetDashboardUsersQuery,useAddDashboardUsersMutation,useDeleteDashboardUsersMutation,useUpdateDashboardUsersMutation} = Users;