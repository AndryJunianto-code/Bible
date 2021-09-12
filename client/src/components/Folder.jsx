import React,{useState} from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';
import HighlightSection from './HighlightSection'

export default function Folder() {
    const [selectedSection,setSelectedSection] = useState("Highlight")
    const [selectedColor,setSelectedColor] = useState('blue')
    
    const handleSection = (e) => {
        const category = ['Bookmark','Highlight','Journal']
        const select = e.target.getAttribute('data-text')
        if(category.includes(select)) {
            setSelectedSection(select)
        }
    }
    return (
        <div className='col-span-1 bg-blue-100 w-full contentHeight overflow-y-hidden'>
            <div className='grid grid-cols-3 justify-center'>
                <div onClick={handleSection} className={`text-center border-r border-gray-100 py-1 ${selectedSection === 'Bookmark' && 'bg-blue-200'}`} data-text='Bookmark'>
                    <BookmarkBorderIcon data-text='Bookmark'/>
                </div>
                <div onClick={handleSection} className={`text-center border-r border-gray-100 py-1 ${selectedSection === 'Highlight' && 'bg-blue-200'}`} data-text='Highlight'>
                    <CreateIcon data-text='Highlight'/>
                </div>
                <div onClick={handleSection} className={`text-center py-1 ${selectedSection === 'Journal' && 'bg-blue-200'}`} data-text='Journal'>
                    <EventNoteIcon data-text='Journal'/>
                </div>
            </div>
            {selectedSection === 'Highlight' ? 
                <HighlightSection selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>:''}
        </div>
    )
}
