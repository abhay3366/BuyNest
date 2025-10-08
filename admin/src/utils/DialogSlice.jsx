import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice=createSlice({
    name:"dialog",
    initialState:{
        isDialogOpen:true
    },
    reducers:{
        toggle:(state,action)=>{
            state.isDialogOpen= !state.isDialogOpen
           
        }
    }
})

export const {toggle}=dialogSlice.actions
export default dialogSlice.reducer