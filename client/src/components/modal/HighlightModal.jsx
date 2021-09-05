import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';

export default function HighlightModal({setLastClick}) {
    const closeHighlightModal = () => {
        setLastClick([])
    }
    return (
        <div className='absolute top-10 right-0 bg-gray-50 w-40 h-40 shadow-sm rounded-sm border border-gray-100' onClick={e=>e.stopPropagation()}>
            <section className='flex flex-col p-3'>
                <div className='flex'>
                    <div><BookmarkIcon style={{color:'blue'}}/></div>
                    <div className='mx-3'><BookmarkIcon style={{color:'red'}}/></div>
                    <div><BookmarkIcon style={{color:'green'}}/></div>
                </div>
                <div className='flex my-2'>
                    <div><CreateIcon style={{color:'blue'}}/></div>
                    <div className='mx-3'><CreateIcon style={{color:'pink'}}/></div>
                    <div><CreateIcon style={{color:'green'}}/></div>
                    <div className='ml-3'><CreateIcon style={{color:'yellow'}}/></div>
                </div>
                <div><EventNoteIcon/></div>
            </section>
        </div>
    )
}