import { createSlice } from "@reduxjs/toolkit";
import books from '../data/books'

export const contentSlice = createSlice({
    name:"content",
    initialState:{
        user:{},
        title:  {bookTitle:JSON.parse(localStorage.getItem('lastRead'))?.bookTitle || 'Genesis',
                chapter:JSON.parse(localStorage.getItem('lastRead'))?.chapter || 1},
        currentBookNum:books.indexOf(JSON.parse(localStorage.getItem('lastRead'))?.bookTitle)+1 || 1,
        currentChapter:JSON.parse(localStorage.getItem('lastRead'))?.chapter || 1,
        isFullScreen:false,
    },
    reducers:{
        setUser:(state,action)=> {
            state.user = action.payload.data
        },
        setTitle:(state,action)=> {
            const {bookTitle,chapter} = action.payload
            state.title = {bookTitle,chapter}
        },
        setCurrentBookNum:(state,action)=> {
            state.currentBookNum = action.payload.book
        },
        setCurrentChapter:(state,action)=> {
            state.currentChapter = action.payload.chapter
        },
        setIsFullScreen:(state,action)=> {
            state.isFullScreen = action.payload.bool
        }
    }
})

export const {setTitle,setCurrentBookNum,setCurrentChapter,setUser,setIsFullScreen} = contentSlice.actions
export default contentSlice.reducer