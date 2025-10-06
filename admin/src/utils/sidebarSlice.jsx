import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice=createSlice({
    name:"sidebar",
    initialState:{
        isSideBarOpen:false
    },
    reducers:{
        toggle:(state)=>{
           state.isSideBarOpen= !state.isSideBarOpen
            console.log("st",state.isSideBarOpen)
        }
    }

})

export const {toggle}=sidebarSlice.actions;

export default sidebarSlice.reducer;