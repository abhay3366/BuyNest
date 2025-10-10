import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice = createSlice({
    name: "dialog",
    initialState: {
        activeDialog: null,
    },
    reducers: {
        openDialog: (state, action) => {
            state.activeDialog = action.payload;
        },
        toggle:(state)=>{

        },
        closeDialog: (state) => {
            state.activeDialog = null;
        },
    }
})

export const { openDialog, closeDialog,toggle } = dialogSlice.actions
export default dialogSlice.reducer