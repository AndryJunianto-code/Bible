import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { setCurrentBookNum,setCurrentChapter, setTitle } from '../../redux/contentSlice'
import books from '../../data/books'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function Bookmark({bookmark}) {
    const [isMouseHover,setIsMouseHover] = useState(false)
    const dispatch = useDispatch()
    const {info,color} = bookmark

    const tempHover = color.split('-')
    tempHover[2] = (parseInt(tempHover[2])-200).toString()
    const hoverColor = tempHover.join('-')

    const fetchBookmarkedVerse = () => {
        dispatch(setCurrentBookNum({book:books.indexOf(info.bookTitle)+1}))
        dispatch(setCurrentChapter({chapter:info.chapter}))
        dispatch(setTitle({bookTitle:info.bookTitle,chapter:info.chapter}))
    }
    const handleMouseOver = () => {
        setIsMouseHover(true)
    }
    const handleMouseLeave = () => {
        setIsMouseHover(false)
    }
    return (
        <div onClick={fetchBookmarkedVerse} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className={`border-b border-gray-600 border-opacity-30 hover:${hoverColor}`}>
            <div className='px-3 py-3 flex justify-between'>
                <section className='flex items-center'>
                    <div className={`${color} w-8 h-8 rounded-sm mr-3`}></div>
                    <h3 className='font-semibold tracking-wider text-lg'>{info.bookTitle} {info.chapter}</h3>
                </section>
                {isMouseHover && <section onClick={e=>e.stopPropagation()}><DeleteOutlineIcon style={{color:'rgb(245, 85, 49)'}}/></section>}
            </div>
        </div>
    )
}
