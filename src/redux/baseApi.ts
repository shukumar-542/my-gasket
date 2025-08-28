// src/Redux/baseApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "/api/proxy";
// Helper function to get the token
const getToken = () => {
  if (typeof window === "undefined") {
    return null;
  } else {
    // Client-side logic
    return localStorage.getItem("_token");
  }
};


export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["profile", "event", 'notification', "carDetails", "tripStatus" , "myTrip" , "cart"],
  endpoints: () => ({}),
});
export const fetchServerData = async (endpoint: string) => {
  const token = await getToken();

  const baseQuery = fetchBaseQuery({ baseUrl });

  const result = await baseQuery(
    {
      url: endpoint,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      signal: new AbortController().signal,
      dispatch: () => {},
      getState: () => ({}),
      endpoint: "",
      abort: () => {},
      type: "query",
      extra: undefined,
    },
    {}
  );

  if (result.error) {
    throw new Error(result.error.data?.toString() || "Failed to fetch data");
  }

  return result.data;
};
export default baseApi;


export const imageUrl = "/api/proxy";
