import { configureStore } from '@reduxjs/toolkit'
import sideBarReducer from "../utils/sidebarSlice";
import loginReducer from "../utils/authSlice"

const appStore= configureStore({
  reducer: {sideBarReducer,loginReducer},
})
export default appStore;