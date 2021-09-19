import { createSlice } from "@reduxjs/toolkit";
export const settingSlice = createSlice({
    name:"setting",
    initialState:{
        storageTheme:JSON.parse(localStorage.getItem('setting-theme')) || 'light',
        font:JSON.parse(localStorage.getItem('setting-font')) || {size:'small',style:'sans',thickness:'200',justified:false,space:'1'}
    },
    reducers:{
        handleTheme:(state,action)=>{
            state.storageTheme = action.payload.data
        },
        handleFont:(state,action)=>{
            state.font[action.payload.type] = action.payload.data
        },
        handleReset:(state,action)=>{
            state.font = {size:'medium',style:'sans',thickness:'200',justified:false,space:'1'}
        }
    }
})

export const {
    handleTheme,
    handleFont,
    handleReset
} = settingSlice.actions
export default settingSlice.reducer