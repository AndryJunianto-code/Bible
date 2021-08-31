import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name:"modal",
    initialState:{
        isBooksModalOpen:false
    },
    reducers:{
        handleBooksModal:(state,action)=> {
            state.isBooksModalOpen = action.payload.bool
        }
       /*  update:(state,action)=> {
            state.name = action.payload.name
            state.email = action.payload.email
        }, */
    }
})

export const {handleBooksModal} = modalSlice.actions
export default modalSlice.reducer