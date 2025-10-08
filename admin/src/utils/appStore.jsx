import { configureStore } from '@reduxjs/toolkit'
import sideBarReducer from "../utils/sidebarSlice";
import loginReducer from "../utils/authSlice"
import dialogReducer from "../utils/DialogSlice"

const appStore= configureStore({
  reducer: {sideBarReducer,loginReducer,dialogReducer},
})
export default appStore;