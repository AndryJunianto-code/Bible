import React,{useState} from 'react'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';

export default function Folder() {
    const [selectedSection,setSelectedSection] = useState("Highlight")
    
    const handleSection = (e) => {
        const category = ['Bookmark','Highlight','Journal']
        const select = e.target.getAttribute('data-text')
        if(category.includes(select)) {
            setSelectedSection(select)
        }
    }
    return (
        <div className='col-span-1 bg-blue-200 w-full'>
            <div className='grid grid-cols-3 justify-center'>
                <div onClick={handleSection} className={`text-center border-r border-gray-100 py-1 ${selectedSection === 'Bookmark' && 'bg-red-100'}`} data-text='Bookmark'>
                    <BookmarkBorderIcon data-text='Bookmark'/>
                </div>
                <div onClick={handleSection} className={`text-center border-r border-gray-100 py-1 ${selectedSection === 'Highlight' && 'bg-red-100'}`} data-text='Highlight'>
                    <CreateIcon data-text='Highlight'/>
                </div>
                <div onClick={handleSection} className={`text-center py-1 ${selectedSection === 'Journal' && 'bg-red-100'}`} data-text='Journal'>
                    <EventNoteIcon data-text='Journal'/>
                </div>
            </div>
        </div>
    )
}
