import { configureStore } from "@reduxjs/toolkit";
import productReducer, { fetchProducts } from "../Features/productSlice";
import cartReducer, { getTotals, populateCart } from "../Features/cartSlice";
import { productApi } from "../Api/productApi";

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware)
});

store.dispatch(productApi.endpoints.getProducts.initiate());
store.dispatch(populateCart());
store.dispatch(getTotals());