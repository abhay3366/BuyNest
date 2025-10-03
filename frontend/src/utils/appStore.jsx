import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../utils/authSlice"
import cartReducer from "../utils/cartSlice"

export const appStore = configureStore({
  reducer: {
    auth:authReducer,
    cart:cartReducer
  },
})