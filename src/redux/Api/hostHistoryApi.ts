import baseApi from "../baseApi";

const hostHistoryApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getMyCars   : builder.query({
            query : ()=>{
                return {
                    url : '/car/get-my-car',
                    method : 'GET'
                }
            },
            providesTags : ['carDetails']
        }),
        getCarDetails : builder.query({
            query : (id)=>{
                return { 
                    url : `/car/get-single-car-details?carId=${id}`,
                    method : 'GET'
                }
            },
            providesTags : ['carDetails']
        }),
        updateCarDetails :  builder.mutation({
            query : (data)=>{
                return {
                    url : "/car/update-all-car-data",
                    method : 'PATCH',
                    body : data
                }
            },
            invalidatesTags : ["carDetails"]
        }),
        getHostIncome :  builder.query({
            query : ()=>{
                return {
                    url : '/payment/host-income-details',
                    method : 'GET'
                }
            }
        }),
        getHostRevenueChart : builder.query({
            query : (year)=>{
                return {
                    url : `/payment/host-revenue-chart?year=${year}`,
                    method : 'GET'
                }
            }
        }),
        getHostTrips :  builder.query({
            query : (status)=>{
                return {
                    url : `/trip/get-my-trip-order?status=${status}`,
                    method : 'GET'
                }
            },
            providesTags : ["tripStatus"]
        }),
        acceptCarRentRequest : builder.mutation({
            query : (data)=>{
                return{
                    url : '/trip/update-trip-status',
                    method :"PATCH",
                    body : data
                }
            },
            invalidatesTags : ['tripStatus']
        }) 
    })
})

export const { useGetMyCarsQuery , useGetCarDetailsQuery , useUpdateCarDetailsMutation , useGetHostIncomeQuery , useGetHostRevenueChartQuery , useGetHostTripsQuery , useAcceptCarRentRequestMutation} =  hostHistoryApi;