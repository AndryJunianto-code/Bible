import React,{useEffect} from 'react'
import Verse from './individual/Verse'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {useViewportContext} from '../context/ViewportContext'
import { useDispatch, useSelector } from 'react-redux';
import { fetchChapterContent, fetchHighlight } from '../request/bibleRequest';
import numOfChapters from '../data/numOfChapters'
import books from '../data/books'
import { setCurrentBookNum, setCurrentChapter, setTitle} from '../redux/contentSlice';
import { handleLastClick } from '../redux/modalSlice';
import {useQuery} from 'react-query'
import {useAuth0} from '@auth0/auth0-react'

export default function Content() {
    const {width} = useViewportContext()
    const {currentBookNum,currentChapter} = useSelector(state => state.content)
    const title = useSelector(state => state.content.title)
    const {isContentFullDisplay,lastClick} = useSelector(state => state.modal)
    const dispatch = useDispatch()
    const {user,isAuthenticated} = useAuth0()
    
    const {data:verses,isSuccess:versesSuccess} = useQuery(['fetchChapterContent',currentBookNum,currentChapter],fetchChapterContent,{retryDelay:1000})
    let varBookNum = currentBookNum
    let varChapter = currentChapter
    let beginning = currentChapter === 1 && currentBookNum === 1
    let ending = currentChapter === 22 && currentBookNum === 66

    const clickLeft = async () => {
        if(currentChapter === 1) {
            varChapter = numOfChapters[varBookNum-2]
            varBookNum--
            dispatch(setCurrentChapter({chapter:numOfChapters[currentBookNum-2]}))
            dispatch(setCurrentBookNum({book:currentBookNum-1}))
        } else {
            varChapter--
            dispatch(setCurrentChapter({chapter:currentChapter-1}))
        }
        dispatch(setTitle({bookTitle:books[varBookNum-1],chapter:varChapter}))
    }
    const clickRight = async () => {
        if(currentChapter === numOfChapters[currentBookNum-1]) {
            varBookNum++
            varChapter = 1
            dispatch(setCurrentChapter({chapter:1}))
            dispatch(setCurrentBookNum({book:currentBookNum+1}))
        } else {
            varChapter++
            dispatch(setCurrentChapter({chapter:currentChapter+1}))
        }
        dispatch(setTitle({bookTitle:books[varBookNum-1],chapter:varChapter}))
    }

    const {data:highlightData,isSuccess} = useQuery(
        ['fetchHighlight',title.bookTitle + "_" + title.chapter,user?.sub],fetchHighlight,{retryDelay:1000,enabled:isAuthenticated}
    )
    return (
        <>
        {versesSuccess && <div className='w-full pb-6 col-span-2 relative'>
                <div className={`mx-auto pt-6 mb-5 w-10/12 md:w-2/3 lg:w-3/5 xl:w-5/12 ${!isContentFullDisplay && `xl:w-full lg:w-full md:w-full w-full xl:px-36 lg:px-24 md:px-12 customizeScroll ${width >= 768 && 'contentHeight'}`}`}>
                    { verses.map((v)=> (
                        <Verse v={v} key={v.id} handleLastClick={handleLastClick} lastClick={lastClick} highlightData={highlightData}/>
                    ))}
                </div>
                {width >= 768 && !beginning && <div className='absolute bottom-0 left-1/2 transform -translate-x-44' onClick={clickLeft}><ChevronLeftIcon/></div>}
                {width >= 768 && !ending && <div className='absolute bottom-0 right-1/2 transform translate-x-44' onClick={clickRight}><ChevronRightIcon/></div>}
        </div>}
        </>
    )
}
