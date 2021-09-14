import React from 'react'
import {handleBooksModal} from '../../redux/modalSlice'
import {setCurrentBookNum, setCurrentChapter, setTitle,setVerses} from '../../redux/contentSlice'
import {fetchChapterContent} from '../../request/bibleRequest'
import {useDispatch,useSelector} from 'react-redux'
import { useQuery } from 'react-query'
export default function ChapterNumber({index,n,book}) {
    const dispatch = useDispatch()
    const {currentBookNum,currentChapter} = useSelector(state => state.content)
    const fetchContent = async (e) => {
        const bookTitle = e.target.getAttribute('booktitle')
        const bookNum = e.target.getAttribute('booknum')
        const chapter = e.target.textContent
        dispatch(handleBooksModal({bool:false}))
        dispatch(setTitle({bookTitle,chapter}))
        dispatch(setCurrentBookNum({book:parseInt(bookNum)}))
        dispatch(setCurrentChapter({chapter:parseInt(chapter)}))
        refetch()
    }
    const {refetch} = useQuery(['fetchChapterContent',currentBookNum,currentChapter],fetchChapterContent,{retryDelay:1000,enabled:false})
    return (
        <p className='dark:text-gray-300' onClick={fetchContent} booknum={index+1} booktitle={book.name}>{n}</p>
    )
}
