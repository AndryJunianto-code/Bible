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
    const storageTheme = useSelector(state => state.setting.storageTheme)

    const iconStyle = {color:`${storageTheme === 'light'?'':'#ebebeb'}`}
    return (
        <div className={`${isFullScreen ? 'contentHeightFull': 'contentHeight'} col-span-1 bg-white w-full overflow-y-hidden dark:bg-darkBlack`}>
            <div className='grid grid-cols-3 justify-center border-b dark:border-opacity-40'>
                <div onClick={()=>setSelectedSection('Bookmark')} className={`opacity-70 hover:opacity-100 text-center border-r border-gray-100 dark:border-opacity-40 py-1 ${selectedSection === 'Bookmark' && 'bg-gray-300 dark:bg-gray-700'}`} data-text='Bookmark'>
                    <BookmarkBorderIcon style={iconStyle}/>
                </div>
                <div onClick={()=>setSelectedSection('Highlight')} className={`opacity-70 hover:opacity-100 text-center border-r border-gray-100 dark:border-opacity-40 py-1 ${selectedSection === 'Highlight' && 'bg-gray-300 dark:bg-gray-700'}`} data-text='Highlight'>
                    <CreateIcon style={iconStyle}/>
                </div>
                <div onClick={()=>setSelectedSection('Journal')} className={`opacity-70 hover:opacity-100 text-center py-1 ${selectedSection === 'Journal' && 'bg-gray-300 dark:bg-gray-700'}`} data-text='Journal'>
                    <EventNoteIcon style={iconStyle}/>
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
