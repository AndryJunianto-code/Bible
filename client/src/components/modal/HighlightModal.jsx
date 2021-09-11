import React,{useEffect} from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useDispatch, useSelector } from 'react-redux';  
import handleHighlightFeature from '../../function/handleHighlightFeature';
import removeHighlight from '../../function/removeHighlight';
import {useQuery} from 'react-query'
import { fetchHighlight } from '../../request/bibleRequest';
import {useAuth0} from '@auth0/auth0-react'

export default function HighlightModal() {
    const {title} = useSelector(state => state.content)
    const lastClick = useSelector(state => state.modal.lastClick)
    const dispatch = useDispatch()
    const {isAuthenticated,loginWithRedirect,user} = useAuth0()

    const checkUserExist = () => {
        if(!isAuthenticated) {
            loginWithRedirect()
        }
    }
    const {data:highlightData,isSuccess,refetch:highlightRefetch} = useQuery(
        ['fetchHighlight',title.bookTitle + "_" + title.chapter,user?.sub],fetchHighlight,{retryDelay:1000,enabled:isAuthenticated}
    )
    return (
        <div className='absolute top-10 right-0 bg-gray-50 w-40 h-40 shadow-sm rounded-sm border border-gray-100' onClick={e=>e.stopPropagation()}>
            <section className='flex flex-col p-3' onClick={checkUserExist}>
                <div className='flex'>
                    <div><BookmarkIcon style={{color:'blue'}}/></div>
                    <div className='mx-3'><BookmarkIcon style={{color:'red'}}/></div>
                    <div><BookmarkIcon style={{color:'green'}}/></div>
                </div>
                <div className='flex my-2'>
                    <div onClick={()=>isAuthenticated && handleHighlightFeature('blue',highlightData,title,lastClick,dispatch,highlightRefetch,user)}><CreateIcon style={{color:'blue'}}/></div>
                    <div onClick={()=>isAuthenticated && handleHighlightFeature('pink',highlightData,title,lastClick,dispatch,highlightRefetch,user)} className='mx-3'><CreateIcon style={{color:'pink'}}/></div>
                    <div onClick={()=>isAuthenticated && handleHighlightFeature('green',highlightData,title,lastClick,dispatch,highlightRefetch,user)}><CreateIcon style={{color:'green'}}/></div>
                    <div onClick={()=>isAuthenticated && handleHighlightFeature('yellow',highlightData,title,lastClick,dispatch,highlightRefetch,user)} className='ml-3'><CreateIcon style={{color:'yellow'}}/></div>
                </div>
                <div className='flex'>
                    <div className='mr-3'><EventNoteIcon/></div>
                    <div onClick={()=>removeHighlight(title,lastClick,dispatch,highlightRefetch,user)}><HighlightOffIcon/></div>
                </div>
            </section>
        </div>
    )
}
