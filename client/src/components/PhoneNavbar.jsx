import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { handleBooksModal } from '../redux/modalSlice';
import BooksModal from './modal/BooksModal';
export default function PhoneNavbar() {
    const isBooksModalOpen = useSelector(state => state.modal.isBooksModalOpen)
    const {bookTitle,chapter} = useSelector(state=>state.content.title)
    const dispatch = useDispatch()
    const booksModal = () => {
        dispatch(handleBooksModal({
            bool:true
        }))
    }
    return (
        <div className="sticky top-0 left-0 py-1 text-sm bg-gray-100">
            <h2 className="mr-20 text-center w-full tracking-wider" onClick={booksModal}>{bookTitle} {chapter}</h2>
            <div className='absolute top-0.5 right-3'>
                <MenuIcon style={{width:'18px',height:'18px'}}/>
            </div>
            {isBooksModalOpen && <BooksModal small={true}/>}
        </div>
    )
}
