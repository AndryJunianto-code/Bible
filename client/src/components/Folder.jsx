import React,{useState} from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HighlightSection from './HighlightSection'
import BookmarkSection from './BookmarkSection';
import JournalSection from './JournalSection'
import {useSelector} from 'react-redux'

export default function Folder() {
    const [selectedSection,setSelectedSection] = useState("Highlight")
    const [selectedColor,setSelectedColor] = useState('blue')
    const {isFullScreen} = useSelector(state => state.content)
    return (
        <div className={`${isFullScreen ? 'contentHeightFull': 'contentHeight'} col-span-1 bg-white w-full overflow-y-hidden`}>
            <div className='grid grid-cols-3 justify-center'>
                <div onClick={()=>setSelectedSection('Bookmark')} className={`text-center border-r border-gray-100 py-1 ${selectedSection === 'Bookmark' && 'bg-blue-200'}`} data-text='Bookmark'>
                    <BookmarkBorderIcon/>
                </div>
                <div onClick={()=>setSelectedSection('Highlight')} className={`text-center border-r border-gray-100 py-1 ${selectedSection === 'Highlight' && 'bg-blue-200'}`} data-text='Highlight'>
                    <CreateIcon/>
                </div>
                <div onClick={()=>setSelectedSection('Journal')} className={`text-center py-1 ${selectedSection === 'Journal' && 'bg-blue-200'}`} data-text='Journal'>
                    <EventNoteIcon/>
                </div>
            </div>
            {selectedSection === 'Highlight' ? 
                <HighlightSection selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>:
             selectedSection === 'Bookmark' ?
                <BookmarkSection/> : 
             selectedSection === 'Journal' ?
                <JournalSection/>: ''}
        </div>
    )
}
