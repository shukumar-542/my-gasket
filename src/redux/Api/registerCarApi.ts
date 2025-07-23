import baseApi from "../baseApi";

const registerCarApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getCity : builder.query({
            query : ()=>{
                return {
                    url : '/dashboard/get-all-destination',
                    method : 'GET'
                }
            }
        }),
        addCarLocation : builder.mutation({
            query : (data)=>{
                return {
                    url : '/car/add-location',
                    method : "POST",
                    body :  data
                }
            }
        }),
        addLicensePlate : builder.mutation({
            query  : (data)=>{
                return {
                    url : '/car/update-car-license',
                    method : 'PATCH',
                    body : data
                }
            }
        }),
        getCarYear : builder.query({
            query : (year)=>{
                return {
                    url : `https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=${year}`,
                    method : 'GET'
                }
            }
        }),
        addMakeModelYear : builder.mutation({
            query : (data)=>{
                return {
                    url : '/car/update-make-model-year',
                    method : 'PATCH',
                    body : data 
                }
            }
        }),
        addCarTransmission : builder.mutation({
            query : (data)=>{
                return {
                    url : '/car/update-transmission',
                    method : 'PATCH',
                    body : data
                }
            }
        }),
        addHostLicense : builder.mutation({
            query : (data)=>{
                return {
                    url : '/car/update-host-license',
                    method : 'PATCH',
                    body : data
                }
            }
        }),
        addCarDetails : builder.mutation({
            query : (data)=>{
                return {
                    url : '/car/update-details',
                    method :"PATCH",
                    body : data,
                }
            }
        }),
        addCarPhotos : builder.mutation({
            query : (formData)=>{
                return{
                    url : '/car/update-photos',
                    method : 'PATCH',
                    body : formData
                }
            }
        }),
        sendCarRequest :  builder.mutation({
            query : (id)=>{
                return {
                    url : `/car/send-add-car-req?carId=${id}`,
                    method : 'PATCH'
                }
            }
        }),
        getMakeYear :  builder.query({
            query : (year)=>{
                return {
                    url : `/car/get-make-from-api?year=${year}`,
                    method : 'GET'
                }
            }
        }),
        getModelYear :  builder.query({
            query : ({year, make})=>{
                return {
                    url : `/car/get-model-from-api?year=${year}&make=${make}`,
                    method : 'GET'
                }
            }
        }),
        createPaymentInfo : builder.mutation({
            query : (data)=>{
                return {
                    url : '/payment/update-host-payment-details',
                    method : 'POST',
                    body : data,
                }
            }
        }),
        getPaymentInfo : builder.query({
            query : ()=>{
                return  {
                    url : '/payment/get-payout-info',
                    method : "GET"
                }
            }
        })

     
    })
})
export const { useGetCityQuery , useAddLicensePlateMutation , useGetCarYearQuery , useAddMakeModelYearMutation , useAddCarTransmissionMutation , useAddHostLicenseMutation , useAddCarDetailsMutation , useAddCarPhotosMutation , useSendCarRequestMutation , useAddCarLocationMutation  , useGetMakeYearQuery , useGetModelYearQuery , useCreatePaymentInfoMutation , useGetPaymentInfoQuery} = registerCarApi