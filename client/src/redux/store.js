import {configureStore} from '@reduxjs/toolkit'
import modalReducer from './modalSlice'
import contentReducer from './contentSlice'
import settingReducer from './settingSlice'
export default configureStore({
    reducer:{
        modal:modalReducer,
        content:contentReducer,
        setting:settingReducer
    }
})  