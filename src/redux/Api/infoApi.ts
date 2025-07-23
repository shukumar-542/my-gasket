import baseApi from "../baseApi";

const infoApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getTermsAndCondition :  builder.query({
            query : ()=>{
                return {
                    url : '/api/auth/terms-condition/',
                    method : 'GET'
                }
            }
        }),
        getPrivacyPolicy :  builder.query({
            query : ()=>{
                return {
                    url : '/api/auth/privacy-policy/',
                    method : 'GET'
                }
            }
        }),
      
      
        getAllFaq : builder.query({
            query : (page)=>{
                return {
                    url : `/api/auth/faq`,
                    method : 'GET'
                }
            },
            providesTags : ['notification']
        }),
       
   
    })
})
export const {useGetTermsAndConditionQuery , useGetPrivacyPolicyQuery , useGetAllFaqQuery , } =  infoApi; 