import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../Services/Api/products.services";

const initialState = {
    items: [],
    status: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const { data } = await getAllProducts();
        return data;
    } catch (error) {
        console.log(error);
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = "completed";
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed"
            })
    }
})

export default productsSlice.reducer;