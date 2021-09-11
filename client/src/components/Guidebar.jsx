import React from 'react'
import FolderIcon from '@material-ui/icons/Folder'
import {useDispatch,useSelector} from 'react-redux'
import {handleBooksModal, handleContentDisplay} from '../redux/modalSlice'
import BooksModal from './modal/BooksModal'
export default function Guidebar() {
    const dispatch = useDispatch()
    const {isBooksModalOpen,isContentFullDisplay} = useSelector(state => state.modal)
    const {bookTitle,chapter} = useSelector(state=>state.content.title)
    const booksModal = () => {
        dispatch(handleBooksModal({
            bool:true
        }))
    }
    
    const contentDisplay = () => {
        dispatch(handleContentDisplay({bool:!isContentFullDisplay}))
    }
    return (
        <div className='relative border-b border-gray-200 py-2 bg-white'>
            <h2 onClick={booksModal} className='w-full text-center text-sm tracking-wider'>{bookTitle} {chapter}</h2>
            <div className="absolute top-1 right-12" onClick={contentDisplay}>
                <FolderIcon style={{width:"20px",height:"20px"}}/>
            </div>
            {isBooksModalOpen && <BooksModal/>}
        </div>
    )
}
