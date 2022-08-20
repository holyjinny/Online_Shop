import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const singleProductApi = createApi({
    reducerPath: "singleProductApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    endpoints: (builder) => ({
        getSingleProduct: builder.query({
            query: (productId) => `products/${productId}`,
        })
    })
});

export const { useGetSingleProductQuery } = singleProductApi