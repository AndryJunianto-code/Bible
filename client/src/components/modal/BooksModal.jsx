import React from 'react'
import ReactDom from 'react-dom'
import { useDispatch } from 'react-redux'
import { handleBooksModal } from '../../redux/modalSlice'
import {useQuery} from 'react-query'
import { fetchBooksList } from '../../request/bibleRequest'
import Book from '../individual/Book'
import { useSelector } from 'react-redux'

export default function BooksModal({small}) {
    const dispatch = useDispatch()
    const {isFullScreen} = useSelector(state => state.content)

    const closeBooksModal = () => {
        dispatch(handleBooksModal({
            bool:false
        }))
    }   

    const {data:books,isLoading,isSuccess} = useQuery(['getBooksList'], fetchBooksList,{retryDelay:5000})
    if(isLoading) return <p>Loading...</p>
    return ReactDom.createPortal(
        <div className='modalBackground' onClick={closeBooksModal}>
            <div className={`customizeScroll bg-gray-50 w-64 h-96 overflow-y-scroll fixed ${small ? 'top-6':`${isFullScreen?'top-8':'top-24'}`} left-1/2 transform -translate-x-1/2 translate-y-1 shadow-sm dark:bg-modalBlack`} onClick={(e)=>e.stopPropagation()}>
                {isSuccess && <div className='px-8 py-5 tracking-wider leading-8'>
					{books.map((book,index)=> (
						<Book book={book} OT={index === 0} NT={index === 39} index={index} key={book.id}/>
					))}
                </div>}
            </div>
        </div>,
        document.getElementById('portal')
    )
}
