import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQty: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQty: state.cartItems[existingIndex].cartQty + 1
                };

                toast.success("تعداد افزایش یافت");
            } else {
                const tempProductItem = {
                    ...action.payload,
                    cartQty: action.payload.cartQty
                }

                state.cartItems.push(tempProductItem);
                toast.success("محصول به سبد خرید اضافه شد");
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        getTotals: (state, action) => {
            let { total, qty } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQty } = cartItem;
                const itemTotal = price * cartQty;

                cartTotal.total += itemTotal;
                cartItem.qty += cartQty;
                
                return cartTotal;
            },
            {
                total: 0,
                qty: 0
            })

            total = parseFloat(total.toFixed());

            state.cartTotalQty = qty;
            state.cartTotalAmount = total;
        },
        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (state.cartItems[itemIndex].cartQty > 1) {
                state.cartItems[itemIndex].cartQty -= 1;

                toast.success('تعداد کاهش یافت');
            } else if (state.cartItems[itemIndex].cartQty === 1) {
                const nextCartItems = state.cartItems.filter(item => item.id !== action.payload.id);

                state.cartItems = nextCartItems;

                toast.error('محصول از سبد خرید حذف شد');
            };

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

        },
        removeCart: (state, action) => {
            state.cartItems.map(cartItem => {
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartItems.filter(item => item.id !== cartItem.id);
                    
                    state.cartItems = nextCartItems;

                    toast.error('محصول از سبد خرید حذف شد');
                }

                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

                return state;
            })
        }
    }
})

export const { addToCart, decreaseCart, removeCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;