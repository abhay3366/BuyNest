import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../utils/authSlice"

export const appStore = configureStore({
  reducer: {
    auth:authReducer
  },
})