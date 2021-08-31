import React from 'react'
import ReactDom from 'react-dom'
import { useDispatch } from 'react-redux'
import { handleBooksModal } from '../../redux/modalSlice'
import {useQuery} from 'react-query'
import { fetchBooksList } from '../../request/bibleRequest'
import Book from '../individual/Book'
export default function BooksModal() {
    const dispatch = useDispatch()

    const closeBooksModal = () => {
        dispatch(handleBooksModal({
            bool:false
        }))
    }

    const {data:books,isFetching,isSuccess} = useQuery(['getBooksList'], fetchBooksList,{retryDelay:1000*5})
    return ReactDom.createPortal(
        <div className='fixed top-0 left-0 right-0 bottom-0' onClick={closeBooksModal}>
            <div className='customizeScroll bg-gray-50 w-64 h-96 overflow-y-scroll fixed top-20 left-1/2 transform -translate-x-1/2 translate-y-1 shadow-sm' onClick={(e)=>e.stopPropagation()}>
				{isFetching && <p>Loading...</p>}
                {isSuccess && <div className='px-8 py-5 tracking-wider leading-8'>
					{books.map((book,index)=> (
						<Book book={book} OT={index === 0} NT={index === 39} key={book.id}/>
					))}
                </div>}
            </div>
        </div>,
        document.getElementById('portal')
    )
}
