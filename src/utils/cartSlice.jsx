import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        openCart: false
    },
    reducers: {
        toggleCart: (state) => {
            state.openCart = !state.openCart
        },
        openCart: (state) => {
            state.openCart = true
        },
        closeCart: (state) => {
            state.openCart = false
        }
    }
})

export const { openCart, closeCart, toggleCart } = cartSlice.actions

export default cartSlice.reducer