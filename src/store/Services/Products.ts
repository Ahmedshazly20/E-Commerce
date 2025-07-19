import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../Services/CreateServices"
export const Apislic = createApi({
    reducerPath:"productsApi",
    tagTypes: ["Products"],
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
        updateDashboardProducts: build.mutation({
          // هنا بنستقبل الـ productData (البيانات العادية) والـ imageFile (الصورة الجديدة)
          // وكمان الـ removeThumbnailFlag لو عايزين نمسح الصورة
          async queryFn({ documentId, productData, imageFile, removeThumbnailFlag }, _queryApi, _extraOptions, fetchWithBQ) {
            try {
              let finalThumbnailId = null;

              // 1. معالجة الصورة:
              //    - لو فيه صورة جديدة، نرفعها وناخد الـ ID بتاعها
              //    - لو المستخدم مسح الصورة القديمة (removeThumbnailFlag == true)، يبقى الـ thumbnail هيكون null
              //    - لو مفيش صورة جديدة ومفيش flag للمسح، يبقى هنفضل محتفظين بالصورة القديمة (مش هنبعت الـ thumbnail field خالص في الـ payload)

              if (imageFile) {
                // فيه صورة جديدة هتترفع
                const formData = new FormData();
                formData.append("files", imageFile);
                formData.append("ref", "api::product.product"); // الموديل UID بتاع Product
                formData.append("refId", documentId);           // الـ ID بتاع المنتج اللي بنحدثه
                formData.append("field", "thumbnail");          // اسم الـ media field في Strapi

                const uploadRes = await fetchWithBQ({
                  url: "/api/upload",
                  method: "POST",
                  body: formData,
                  // هنا مش محتاجين headers: { 'Content-Type': 'multipart/form-data' }
                  // الـ fetchWithBQ هيضيفه تلقائيًا لما تبعت FormData
                });

                if (uploadRes.error) return { error: uploadRes.error };
                finalThumbnailId = uploadRes.data?.[0]?.id; // هناخد الـ ID بتاع الصورة المرفوعة
              } else if (removeThumbnailFlag) {
                finalThumbnailId = null; // هنبعت null لـ Strapi عشان يمسح الصورة
              }
              // لو مفيش imageFile ومفيش removeThumbnailFlag، يبقى finalThumbnailId هيفضل null
              // وده معناه إننا مش هنبعت الـ thumbnail field في الـ payload عشان Strapi يحافظ على الصورة القديمة.

              // 2. تجهيز بيانات التحديث (بما فيهم الـ thumbnail ID الجديد/المحذوف)
              const payload: any = { ...productData }; // البيانات الأساسية (title, price, description, stock)

              // بنضيف الـ thumbnail للـ payload بس لو فيه تحديث ليه (صورة جديدة أو مسح)
              if (imageFile || removeThumbnailFlag) {
                payload.thumbnail = finalThumbnailId;
              }
              // لو مفيش صورة جديدة ولا طلب مسح، مش هنضيف الـ thumbnail للـ payload
              // وده معناه إن Strapi هيحتفظ بالصورة اللي كانت موجودة قبل كده.

              // 3. إرسال طلب التحديث لباقي بيانات المنتج
              const updateRes = await fetchWithBQ({
                url: `/api/products/${documentId}`,
                method: "PUT",
                headers: {
                  Authorization: `Bearer ${CookieService.get("Jwt")}`,
                  "Content-Type": "application/json", // ده صح لباقي البيانات
                },
                body: JSON.stringify({ data: payload }), // Strapi بيحتاج الـ data Object
              });

              if (updateRes.error) return { error: updateRes.error };
              return { data: updateRes.data };
            } catch (err: any) { // Use 'any' for error type or define a more specific type if possible
              return { error: { status: 500, data: "Unexpected Error", message: err.message || "An unknown error occurred" } };
            }
          },
          invalidatesTags: (result, error, { id }) => [
            { type: "Products", id: id }, // لو عايز تحديث متفائل (optimistic update) للمنتج ده بس
            { type: "Products", id: "LIST" },     // عشان تعمل re-fetch لكل المنتجات بعد التحديث
          ],
        }),
        
        


createdashboardproduct: build.mutation({
  async queryFn({ productData, imageFile }, _queryApi, _extraOptions, fetchWithBQ) {
      try {
          let finalThumbnailId = null;

         
          if (imageFile) {
              const formData = new FormData();
              formData.append("files", imageFile);
              formData.append("ref", "api::product.product");
               
              formData.append("field", "thumbnail"); 

              const uploadRes = await fetchWithBQ({
                  url: "/api/upload",
                  method: "POST",
                  body: formData,
              });

              if (uploadRes.error) return { error: uploadRes.error };
              finalThumbnailId = uploadRes.data?.[0]?.id; 
          }

          const payload: any = { ...productData };
          if (finalThumbnailId) {
              payload.thumbnail = finalThumbnailId;
          }

          
          const createRes = await fetchWithBQ({
              url: `/api/products`,
              method: "POST",
              headers: {
                  Authorization: `Bearer ${CookieService.get("Jwt")}`,
                  "Content-Type": "application/json", 
              },
              body: JSON.stringify({ data: payload }), 
          });

          if (createRes.error) return { error: createRes.error };
          return { data: createRes.data };
      } catch (err: any) {
          return { error: { status: 500, data: "Unexpected Error", message: err.message || "An unknown error occurred" } };
      }
  },
  invalidatesTags: ['Products'],
}),

      



    })


   
});

export const {useGetDashboardProductsQuery,useDeletdashboardproductsMutation,useCreatedashboardproductMutation,useUpdateDashboardProductsMutation } = Apislic;