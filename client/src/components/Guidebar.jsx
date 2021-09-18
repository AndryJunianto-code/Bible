import React from 'react'
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import {useDispatch,useSelector} from 'react-redux'
import {handleBooksModal, handleContentDisplay, handleSettingModal} from '../redux/modalSlice'
import BooksModal from './modal/BooksModal'
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import SettingsIcon from '@material-ui/icons/Settings';
import { setIsFullScreen } from '../redux/contentSlice';
import SettingModal from './modal/SettingModal'

export default function Guidebar() {
    const dispatch = useDispatch()
    const {isBooksModalOpen,isContentFullDisplay,isSettingModalOpen} = useSelector(state => state.modal)
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
    const settingDisplay = () => {
        dispatch(handleSettingModal({bool:!isSettingModalOpen}))
    }
    return (
        <div className='relative border-b h-10 border-gray-200 py-2 bg-white dark:bg-darkBlack dark:text-gray-300 dark:text-opacity-90 dark:border-opacity-40'>
            <h2 onClick={booksModal} className='absolute left-1/2 transform -translate-x-1/2 px-4 top-1/2 -translate-y-1/2 py-2'>{bookTitle} {chapter}</h2>
            <div className='absolute top-1 right-28 guidebarIcon' onClick={settingDisplay}>
                <SettingsIcon style={{width:'21px',height:'21px'}}/>
            </div>
            <div onClick={handleFullScreen} className='absolute top-1 right-20 guidebarIcon'>
                <FullscreenIcon style={{width:'24px',height:'24px'}}/>
            </div>
            <div className="absolute top-1 right-12 guidebarIcon" onClick={contentDisplay}>
                <FolderOpenOutlinedIcon style={{width:"23px",height:"23px"}}/>
            </div>
            {isBooksModalOpen && <BooksModal/>}
            {isSettingModalOpen && <SettingModal/>}
        </div>
    )
}
