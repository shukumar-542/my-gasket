import baseApi from "../baseApi";

const products = baseApi.injectEndpoints({
    endpoints: (builder) => ({ 
        getProducts: builder.query({
            query : ()=>{
                return {
                    url : `/api/materials/list/`,
                    method : 'GET'
                }
            }

        }),
    }),
});

export const { useGetProductsQuery } = products;