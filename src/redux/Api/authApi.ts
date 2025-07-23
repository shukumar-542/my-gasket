import baseApi from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (value) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: value,
        };
      },
    }),
    registerUser: builder.mutation({
      query: (value) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: value,
        };
      },
    }),
    activeAccountOtp : builder.mutation({
      query : (data)=>{
        return {
          url :'/auth/activate-account',
          method : 'POST',
          body : data
        }
      }
    }),
    getProfile : builder.query({
      query : ()=>{
        return {
          url : '/user/profile',
          method : 'GET'
        }
      },
      providesTags : ['profile']
    }),
    changePassword :  builder.mutation({
      query : (data)=>{
        return {
          url : '/auth/change-password',
          method : 'PATCH',
          body : data
        }
      }
    }),
    updateProfile : builder.mutation({
      query : (formData)=>{
        return {
          url : "/user/edit-profile",
          method : 'PATCH',
          body : formData
        }
      },
      invalidatesTags : ['profile']
    }),
    forgetPassword :  builder.mutation({
      query : (data)=>{
        return {
          url : '/auth/forgot-password',
          method : 'POST',
          body : data,
        }
      }
    }),
    sendOtp : builder.mutation({
      query : (data)=>{
        return {
          url : '/auth/forget-pass-otp-verify',
          method : 'POST',
          body : data
        }
      }
    }),
    resetPassword  :  builder.mutation({
      query : (data)=>{
        return {
          url : "/auth/reset-password",
          method : 'POST',
          body : data
        }
      }
    })

  }),
});
export const { useRegisterUserMutation  , useActiveAccountOtpMutation , useGetProfileQuery , useChangePasswordMutation , useLoginUserMutation , useUpdateProfileMutation , useForgetPasswordMutation , useSendOtpMutation , useResetPasswordMutation} = authApi
