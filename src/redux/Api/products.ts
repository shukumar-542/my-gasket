import baseApi from "../baseApi";

const products = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => {
                return {
                    url: `/api/materials/list/`,
                    method: 'GET'
                }
            }

        }),
        materialsDetails: builder.query({
            query: (id) => {
                return {
                    url: `/api/materials/${id}/`,
                    method: 'GET'
                }
            }
        }),
        getProductReview : builder.query({
            query: (id) => {
                return {
                    url: `/api/budget/materials_review/${id}/reviews/`,
                    method: 'GET'
                }
            }
        }),
        uploadMateialQuote : builder.mutation({
            query: (data) => {
                return {
                    url: `/api/budget/upload-quote/`,
                    method: 'POST',
                    body: data
                }
            }
        }),
        addToCart : builder.query({
            query : (sessionId)=>{
                return{
                    url : `/api/budget/recent-uploads/?session_id=${sessionId}`,
                    method: 'GET'
                }
            },
            providesTags : ['cart']
        }),
        addedProductsTocart : builder.mutation({
            query: (data) => {
                return {
                    url: `/api/budget/add-to-cart/`,
                    method: 'POST',
                    body: data
                }
            }   
        }),
        removeAddToCard :  builder.mutation({
            query: (id) => {
                return {
                    url: `/api/budget/cart/item/${id}/remove/`,
                    method: 'DELETE',
                }
            } ,
            invalidatesTags : ['cart']
        })
    }),
});

export const { useGetProductsQuery , useMaterialsDetailsQuery , useGetProductReviewQuery , useUploadMateialQuoteMutation , useAddToCartQuery , useAddedProductsTocartMutation , useRemoveAddToCardMutation} = products;