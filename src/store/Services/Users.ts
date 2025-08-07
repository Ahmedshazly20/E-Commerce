import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../Services/CreateServices"
export const Users = createApi({
    reducerPath:"users",
    tagTypes: ["users"],
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
              return {url: `/api/users`};},
              providesTags: (result, error, arg) =>
           result?.data
      ? [...result.data.map(({ id }) => ({ type: 'users' as const, id })),  { type: 'users', id: 'LIST' },]: [{ type: 'users', id: 'LIST' }],
      
                
       }),
      
       deleteDashboardUsers:build.mutation({
        query:(documentId)=>{
            return {url:`/api/users/${documentId}`,
                    method:"DELETE",}
                 },invalidatesTags: ['Users'],}),

       UpdateDashboardUsers:build.mutation({
        query:({documentId,data })=>{
            return {url:`/api/users/${documentId}`,
                    method:"PUT",
                     body: { data }
                }
                 },invalidatesTags: ['Users'],}), 
       

       AddDashboardUsers:build.mutation({
        query:({data })=>{
            return {url:`/api/users/`,
                    method:"POST",
                     headers: {Authorization: `Bearer ${CookieService.get("Jwt")}`,
                              "Content-Type": "application/json",},
                     body: { data },
                }
                 },invalidatesTags: ['Users'],})           


    })


   
});

export const {useGetDashboardUsersQuery,useAddDashboardUsersMutation,useDeleteDashboardUsersMutation,useUpdateDashboardUsersMutation} = Users;