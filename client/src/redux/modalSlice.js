import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name:"modal",
    initialState:{
        isBooksModalOpen:false,
        isContentFullDisplay:true
    },
    reducers:{
        handleBooksModal:(state,action)=> {
            state.isBooksModalOpen = action.payload.bool
        },
        handleContentDisplay:(state,action)=> {
            state.isContentFullDisplay = action.payload.bool
        }
    }
})

export const {handleBooksModal,handleContentDisplay} = modalSlice.actions
export default modalSlice.reducer