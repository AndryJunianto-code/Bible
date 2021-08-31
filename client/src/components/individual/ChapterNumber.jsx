import React from 'react'
import {handleBooksModal} from '../../redux/modalSlice'
import {setTitle,setVerses} from '../../redux/contentSlice'
import {fetchChapterContent} from '../../request/bibleRequest'
import {useDispatch} from 'react-redux'
export default function ChapterNumber({index,n,book}) {
    const dispatch = useDispatch()

    const fetchContent = async (e) => {
        const bookNum = e.target.getAttribute('booknum')
        const bookTitle = e.target.getAttribute('booktitle')
        const chapter = e.target.textContent
        dispatch(handleBooksModal({bool:false}))
        dispatch(setTitle({bookTitle,chapter}))
        const data = await fetchChapterContent(bookNum,chapter)
        dispatch(setVerses({data}))
    }
    return (
        <p onClick={fetchContent} booknum={index+1} booktitle={book.name}>{n}</p>
    )
}
