import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice=createSlice({
    name:"dialog",
    initialState:{
        isDialogOpen:false
    },
    reducers:{
        toggle:(state,action)=>{
            state.isDialogOpen= !state.isDialogOpen
           console.log("dialoge",state.isDialogOpen)
        }
    }
})

export const {toggle}=dialogSlice.actions
export default dialogSlice.reducer