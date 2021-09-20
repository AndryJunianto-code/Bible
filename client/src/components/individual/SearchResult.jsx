import React from 'react'
import books from '../../data/books'
import { useDispatch } from 'react-redux'
import { setCurrentBookNum,setCurrentChapter,setTitle } from '../../redux/contentSlice'

export default function SearchResult({search}) {
    const {book,verse,chapterId,verseId} = search
    const dispatch = useDispatch()
    
    const goToSearchVerse = () => {
        localStorage.setItem('lastRead', JSON.stringify({bookTitle:book.name,chapter:chapterId}))
        dispatch(setTitle({bookTitle:book.name,chapter:chapterId}))
        window.location.href = '/'
    }
    
    return (
        <div className='bg-gray-100 dark:bg-lightBlack py-2 px-2.5 rounded-sm mb-2'>
            <p className='mb-0.5'>
               <span onClick={goToSearchVerse} className='text-blue-400  dark:text-blue-300 font-semibold hover:underline tracking-wider'>{book.name} {chapterId}:{verseId}</span>
               <span className='font-light text-sm'> - {book.testament}</span>
            </p>
            <p dangerouslySetInnerHTML={{__html: verse}}></p>
        </div>
    )
}
