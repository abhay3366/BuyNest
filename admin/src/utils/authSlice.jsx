import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:"auth",
    initialState:{
        isLogin:false
    },
    reducers:{
        login:(state,action)=>{
           state.isLogin=true
        }
    }
})
export const  {login} = authSlice.actions;
export default authSlice.reducer;