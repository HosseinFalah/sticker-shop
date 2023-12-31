import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => `/stickers`
        }),
        getProduct: builder.query({
            query: productId => `stickers/${productId}`
        })
    })
});
export const { useGetProductsQuery, useGetProductQuery } = productApi;