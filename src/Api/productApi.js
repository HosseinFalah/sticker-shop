import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    endpoints: builder => ({
        getAllProducts: builder.query({
            query: () => `/stickers`
        })
    })
});
export const { useGetAllProductsQuery } = productApi;