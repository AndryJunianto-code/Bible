import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
    name:"content",
    initialState:{
        title:{bookTitle:'Genesis',chapter:1},
        currentBookNum:1,
        currentChapter:1
    },
    reducers:{
        setTitle:(state,action)=> {
            const {bookTitle,chapter} = action.payload
            state.title = {bookTitle,chapter}
        },
        setCurrentBookNum:(state,action)=> {
            state.currentBookNum = action.payload.book
        },
        setCurrentChapter:(state,action)=> {
            state.currentChapter = action.payload.chapter
        }
    }
})

export const {setTitle,setCurrentBookNum,setCurrentChapter} = contentSlice.actions
export default contentSlice.reducer