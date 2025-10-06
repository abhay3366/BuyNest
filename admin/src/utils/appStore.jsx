import { configureStore } from '@reduxjs/toolkit'
import sideBarReducer from"../utils/sidebarSlice";

const appStore= configureStore({
  reducer: {sideBarReducer},
})
export default appStore;