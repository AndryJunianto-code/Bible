import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useDispatch, useSelector } from 'react-redux';  
import handleHighlightFeature from '../../function/handleHighlightFeature';
import removeHighlight from '../../function/removeHighlight';
import {useQuery} from 'react-query'
import { fetchHighlight } from '../../request/bibleRequest';
import { useAuth0 } from '@auth0/auth0-react';
import { handleBookmarkModal } from '../../redux/modalSlice';
import BookmarkModal from './BookmarkModal'

export default function HighlightModal() {
    const {title,user} = useSelector(state => state.content)
    const {lastClick,isBookmarkModalOpen} = useSelector(state => state.modal)
    const dispatch = useDispatch()
    const {isAuthenticated,loginWithRedirect} = useAuth0()

    const checkUserExist = () => {
        if(!isAuthenticated) {
            loginWithRedirect()
        }
    }
    const openBookmarkModal = () => {
        dispatch(handleBookmarkModal({bool:true}))
    }
    const {data:highlightData,isSuccess:highlightSuccess,refetch:highlightRefetch} = useQuery(
        ['fetchHighlight',title.bookTitle + "_" + title.chapter,user?.sub],fetchHighlight,{retryDelay:1000,enabled:isAuthenticated}
    )
    
    return (
        <div className='absolute top-10 right-0 bg-gray-50 w-40 h-40 shadow-sm rounded-sm border border-gray-100' onClick={e=>e.stopPropagation()}>
            <section className='flex flex-col p-3' onClick={checkUserExist}>
                <div className='flex'>
                    <div onClick={()=>handleHighlightFeature('blue',highlightData,title,lastClick,dispatch,highlightRefetch,user)}><CreateIcon style={{color:'blue'}}/></div>
                    <div onClick={()=>handleHighlightFeature('green',highlightData,title,lastClick,dispatch,highlightRefetch,user)} className='mx-3'><CreateIcon style={{color:'green'}}/></div>
                    <div onClick={()=>handleHighlightFeature('pink',highlightData,title,lastClick,dispatch,highlightRefetch,user)}><CreateIcon style={{color:'pink'}}/></div>
                    <div onClick={()=>handleHighlightFeature('yellow',highlightData,title,lastClick,dispatch,highlightRefetch,user)} className='ml-3'><CreateIcon style={{color:'yellow'}}/></div>
                </div>
                <div className='flex my-2' onClick={openBookmarkModal}>
                    <BookmarkIcon/>
                    <p>Bookmark</p>
                </div>
                <div className='flex'>
                    <div className='mr-3'><EventNoteIcon/></div>
                    <div onClick={()=>removeHighlight(title,lastClick,dispatch,highlightRefetch,user)}><HighlightOffIcon/></div>
                </div>
            </section>
            {isBookmarkModalOpen && <BookmarkModal/>}
        </div>
    )
}
