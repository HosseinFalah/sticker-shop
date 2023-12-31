import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({
    cartTotalAmount: 0,
    cartTotalQty: 0
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        populateCart: (state, action) => {
            if (localStorage.getItem('cartItems')) {
                cartAdapter.setAll(state, JSON.parse(localStorage.getItem('cartItems')))
            }
        },
        addToCart: (state, action) => {
            // find Product in Store
            const productExist = state.entities[action.payload.id];

            if (productExist) {
                state.entities[action.payload.id].cartQty += 1;

                toast.success("تعداد افزایش یافت");
            } else {
                cartAdapter.addOne(state, action.payload);
                
                toast.success("محصول به سبد خرید اضافه شد");
            }

            localStorage.setItem("cartItems", JSON.stringify(state.entities))
        },
        getTotals: (state, action) => {
            let { total, qty } = Object.values(state.entities).reduce((cartTotal, cartItem) => {
                const { price, cartQty } = cartItem;
                const itemTotal = price * cartQty;

                cartTotal.total += itemTotal;
                cartTotal.qty += cartQty;
                
                return cartTotal;
            },
            {
                total: 0,
                qty: 0
            })

            state.cartTotalQty = qty;
            state.cartTotalAmount = total;
        },
        decreaseCart: (state, action) => {
            const product = state.entities[action.payload.id];

            if (product.cartQty > 1) {
                product.cartQty -= 1;

                toast.success('تعداد کاهش یافت');
            } else if (product.cartQty === 1) {
                cartAdapter.removeOne(state, action.payload.id);

                toast.error('محصول از سبد خرید حذف شد');
            };

            localStorage.setItem('cartItems', JSON.stringify(state.entities));

        },
        removeCart: (state, action) => {
            cartAdapter.removeOne(state, action.payload.id);

            toast.error('محصول از سبد خرید حذف شد');

            localStorage.setItem('cartItems', JSON.stringify(state.entities));
            
        }
    }
})

export const { selectAll } = cartAdapter.getSelectors(state => state.cart);

export const { populateCart, addToCart, decreaseCart, removeCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;