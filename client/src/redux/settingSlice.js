import { createSlice } from "@reduxjs/toolkit";
export const settingSlice = createSlice({
    name:"setting",
    initialState:{
        storageTheme: ''
    },
    reducers:{
        handleTheme:(state,action)=>{
            state.storageTheme = action.payload.data
        }
    }
})

export const {
    handleTheme
} = settingSlice.actions
export default settingSlice.reducer