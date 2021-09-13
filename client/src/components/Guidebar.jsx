import React from 'react'
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import {useDispatch,useSelector} from 'react-redux'
import {handleBooksModal, handleContentDisplay} from '../redux/modalSlice'
import BooksModal from './modal/BooksModal'
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { setIsFullScreen } from '../redux/contentSlice';

export default function Guidebar() {
    const dispatch = useDispatch()
    const {isBooksModalOpen,isContentFullDisplay} = useSelector(state => state.modal)
    const {bookTitle,chapter} = useSelector(state=>state.content.title)
    const isFullScreen = useSelector(state=>state.content.isFullScreen)
    const booksModal = () => {
        dispatch(handleBooksModal({
            bool:true
        }))
    }
    
    const contentDisplay = () => {
        dispatch(handleContentDisplay({bool:!isContentFullDisplay}))
    }
    const handleFullScreen = () => {
        dispatch(setIsFullScreen({bool:!isFullScreen}))
    }
    return (
        <div className='relative border-b border-gray-200 py-2 bg-white'>
            <h2 onClick={booksModal} className='w-full text-center text-sm tracking-wider'>{bookTitle} {chapter}</h2>
            <div onClick={handleFullScreen} className='absolute top-1 right-20 opacity-50 hover:opacity-100 transition-all duration-200 ease-linear'>
                <FullscreenIcon style={{width:'21px',height:'21px'}}/>
            </div>
            <div className="absolute top-1 right-12 opacity-50 hover:opacity-100 transition-all duration-200 ease-linear" onClick={contentDisplay}>
                <FolderOpenOutlinedIcon style={{width:"21px",height:"21px"}}/>
            </div>
            {isBooksModalOpen && <BooksModal/>}
        </div>
    )
}
