import baseApi from "../baseApi";

const tripManagementApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getMyTrips: builder.query({
            query: ({ status, isHostMyTripsRoute }) => {
              let url = `/trip/get-my-trip-order?status=${status}`;
              
              // Append host flag if true
              if (isHostMyTripsRoute) {
                url += `&isHostMyTripsRoute=true`;
              }
          
              return {
                url,
                method: 'GET'
              };
            },
            providesTags: ['myTrip']
          }),
        addTrips : builder.mutation({
            query : (data)=>{
                return {
                    url : '/trip/add-trip',
                    method : 'POST',
                    body : data
                }
            }
        }),
        paymentTrip : builder.mutation({
            query : (data)=>{
                return {
                    url : '/payment/checkout',
                    method : 'POST',
                    body : data
                }
            },
            invalidatesTags : ['myTrip']
        }),
        getAllChat :  builder.query({
            query : (chatId)=>{
                return {
                    url : `/chat/get-chat-messages?chatId=${chatId}`,
                    method : 'GET'
                }
            }
        }),
        addFavorite : builder.mutation({
            query : (id)=>{
                return {
                    url  : `/favorite/add-remove-favorite?carId=${id}`,
                    method : 'POST'
                }
            }
        })
    })
})

export const { useGetMyTripsQuery , useAddTripsMutation , usePaymentTripMutation , useGetAllChatQuery , useAddFavoriteMutation} = tripManagementApi;