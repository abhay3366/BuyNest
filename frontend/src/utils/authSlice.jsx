import { createSlice } from "@reduxjs/toolkit";


export const authSlice=createSlice({
    name:"auth",
    initialState:{
        userLogin:true
    },
    reducers:{
        login:(state,action)=>{
            state.userLogin=false
        }
    }
})

export const { login} = authSlice.actions

export default authSlice.reducer