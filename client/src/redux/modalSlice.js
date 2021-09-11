import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name:"modal",
    initialState:{
        isBooksModalOpen:false,
        isContentFullDisplay:true,
        lastClick:[],
        isHighlightModalOpen:false,
        isAccountModalOpen:false
    },
    reducers:{
        handleBooksModal:(state,action)=> {
            state.isBooksModalOpen = action.payload.bool
        },
        handleContentDisplay:(state,action)=> {
            state.isContentFullDisplay = action.payload.bool
        },
        handleLastClick:(state,action)=>{
            state.lastClick = action.payload.data
            if(state.lastClick.length > 0) {
                state.isHighlightModalOpen = true
            } else {
                state.isHighlightModalOpen = false
            }
        },
        closeHighlightModal:(state,action)=> {
            state.isHighlightModalOpen = false
            state.lastClick = []
        },
        handleAccountModal:(state,action)=>{
            state.isAccountModalOpen = action.payload.bool
        }
    }
})

export const {handleBooksModal,handleContentDisplay,handleLastClick,closeHighlightModal,handleAccountModal} = modalSlice.actions
export default modalSlice.reducer