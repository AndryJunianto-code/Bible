import { createSlice } from "@reduxjs/toolkit";
export const settingSlice = createSlice({
    name:"setting",
    initialState:{
        storageTheme:JSON.parse(localStorage.getItem('setting')) || 'light',
        font:{size:'',style:'',thickness:''}
    },
    reducers:{
        handleTheme:(state,action)=>{
            state.storageTheme = action.payload.data
        },
        handleFont:(state,action)=>{
            state.font[action.type] = action.payload.data
        }
    }
})

export const {
    handleTheme,
    handleFont
} = settingSlice.actions
export default settingSlice.reducer