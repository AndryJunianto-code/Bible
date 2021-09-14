import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { setCurrentBookNum,setCurrentChapter, setTitle } from '../../redux/contentSlice'
import books from '../../data/books'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {useMutation,useQuery} from 'react-query'
import {deleteBookmark, fetchBookmark} from '../../request/bibleRequest'
import { useSelector } from 'react-redux';

export default function Bookmark({bookmark}) {
    const [isMouseHover,setIsMouseHover] = useState(false)
    const user = useSelector(state => state.content.user)
    const dispatch = useDispatch()
    const {info,color} = bookmark

    const tempHover = color.split('-')
    tempHover[2] = (parseInt(tempHover[2])-200).toString()
    const hoverColor = tempHover.join('-')

    const {refetch:refetchBookmark} = useQuery(['fetchBookmark',user?.sub],fetchBookmark)
    const {mutate,isLoading} = useMutation(deleteBookmark, {
        onSuccess:(data) => {
            refetchBookmark()
        }
    })

    const fetchBookmarkedVerse = () => {
        dispatch(setCurrentBookNum({book:books.indexOf(info.bookTitle)+1}))
        dispatch(setCurrentChapter({chapter:info.chapter}))
        dispatch(setTitle({bookTitle:info.bookTitle,chapter:info.chapter}))
    }
    const handleMouseOver = () => {setIsMouseHover(true)}
    const handleMouseLeave = () => {setIsMouseHover(false)}
    const clickDeleteBookmark = async () => {
        mutate({_id:bookmark._id})
    }
    return (
        <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className={`${isLoading && 'animate-pulse'} border-b border-gray-600 border-opacity-30 dark:border-opacity-100 hover:${hoverColor} dark:text-gray-300 dark:hover:bg-opacity-80 dark:hover:text-darkBlack`}>
            <div className='flex justify-between relative'>
                <section className='flex items-center w-full px-3 py-3' onClick={fetchBookmarkedVerse}>
                    <div className={`${color} w-8 h-8 rounded-sm mr-3`}></div>
                    <h3 className='font-semibold tracking-wider text-lg'>{info.bookTitle} {info.chapter}</h3>
                </section>
                {isMouseHover && <section onClick={clickDeleteBookmark} className='absolute top-1/2 right-3 transform -translate-y-1/2'>
                    <DeleteOutlineIcon style={{color:'rgb(237, 52, 52)'}}/>
                </section>}
            </div>
        </div>
    )
}
