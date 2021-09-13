import {configureStore} from '@reduxjs/toolkit'
import modalReducer from './modalSlice'
import contentReducer from './contentSlice'
import folderReducer from './folderSlice'
export default configureStore({
    reducer:{
        modal:modalReducer,
        content:contentReducer,
        folder:folderReducer
    }
})  