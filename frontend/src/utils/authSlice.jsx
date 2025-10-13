import { createSlice } from "@reduxjs/toolkit";


export const authSlice=createSlice({
    name:"auth",
    initialState:{
        userLogin:false
    },
    reducers:{
        login:(state,action)=>{
            state.userLogin=action.payload
        }
    }
})

export const { login,signup} = authSlice.actions

export default authSlice.reducer