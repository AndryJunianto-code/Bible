import React from 'react'
import FolderIcon from '@material-ui/icons/Folder'
import {useDispatch,useSelector} from 'react-redux'
import {handleBooksModal} from '../redux/modalSlice'
import BooksModal from './modal/BooksModal'
export default function Guidebar() {
    const dispatch = useDispatch()
    const isBooksModalOpen = useSelector(state => state.modal.isBooksModalOpen)
    const booksModal = () => {
        dispatch(handleBooksModal({
            bool:true
        }))
    }
    
    return (
        <div className='relative border-b border-gray-200 py-2 bg-white'>
            <h2 onClick={booksModal} className='w-full text-center text-sm tracking-wider'>Genesis 1</h2>
            <div className="absolute -top-0.5 right-7">
                <FolderIcon style={{width:"18px",height:"18px"}}/>
            </div>
            {isBooksModalOpen && <BooksModal/>}
        </div>
    )
}
