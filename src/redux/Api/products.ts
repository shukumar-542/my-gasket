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
    }),
});

export const { useGetProductsQuery , useMaterialsDetailsQuery} = products;