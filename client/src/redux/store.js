import {configureStore} from '@reduxjs/toolkit'
import modalReducer from './modalSlice'
import contentReducer from './contentSlice'
export default configureStore({
    reducer:{
        modal:modalReducer,
        content:contentReducer
    }
})  