import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { useDispatch, useSelector } from 'react-redux';  
import handleHighlightFeature from '../../function/handleHighlightFeature';
import {useQuery} from 'react-query'
import { fetchHighlight } from '../../request/bibleRequest';

export default function HighlightModal() {
    const {title} = useSelector(state => state.content)
    const lastClick = useSelector(state => state.modal.lastClick)
    const dispatch = useDispatch()

    const {data:highlightData,isSuccess} = useQuery(['fetchHighlight',title.bookTitle + "_" + title.chapter],fetchHighlight,{retryDelay:1000})
    
    return (
        <div className='absolute top-10 right-0 bg-gray-50 w-40 h-40 shadow-sm rounded-sm border border-gray-100' onClick={e=>e.stopPropagation()}>
            <section className='flex flex-col p-3'>
                <div className='flex'>
                    <div><BookmarkIcon style={{color:'blue'}}/></div>
                    <div className='mx-3'><BookmarkIcon style={{color:'red'}}/></div>
                    <div><BookmarkIcon style={{color:'green'}}/></div>
                </div>
                <div className='flex my-2'>
                    <div onClick={()=>handleHighlightFeature('blue',highlightData,title,lastClick,dispatch)}><CreateIcon style={{color:'blue'}}/></div>
                    <div onClick={()=>handleHighlightFeature('pink',highlightData,title,lastClick,dispatch)} className='mx-3'><CreateIcon style={{color:'pink'}}/></div>
                    <div onClick={()=>handleHighlightFeature('green',highlightData,title,lastClick,dispatch)}><CreateIcon style={{color:'green'}}/></div>
                    <div onClick={()=>handleHighlightFeature('yellow',highlightData,title,lastClick,dispatch)} className='ml-3'><CreateIcon style={{color:'yellow'}}/></div>
                </div>
                <div><EventNoteIcon/></div>
            </section>
        </div>
    )
}
