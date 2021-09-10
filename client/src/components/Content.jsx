import React,{useEffect} from 'react'
import Verse from './individual/Verse'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {useViewportContext} from '../context/ViewportContext'
import { useDispatch, useSelector } from 'react-redux';
import { fetchChapterContent, fetchHighlight } from '../request/bibleRequest';
import numOfChapters from '../data/numOfChapters'
import books from '../data/books'
import { setTitle, setVerses } from '../redux/contentSlice';
import { handleLastClick } from '../redux/modalSlice';
import {useQuery} from 'react-query'

export default function Content() {
    const {width} = useViewportContext()
    const verses = useSelector(state => state.content.verses)
    const title = useSelector(state => state.content.title)
    const {isContentFullDisplay,lastClick} = useSelector(state => state.modal)
    const dispatch = useDispatch()
    
    let currentChapter = verses[0].chapterId
    let currentBookNum = verses[0].book.id
    let beginning = currentChapter === 1 && currentBookNum === 1
    let ending = currentChapter === 22 && currentBookNum === 66

    const clickLeft = async () => {
        if(currentChapter === 1) {
            currentChapter = numOfChapters[currentBookNum-2]
            currentBookNum--
        } else {
            currentChapter--
        }
        dispatch(setTitle({bookTitle:books[currentBookNum-1],chapter:currentChapter}))
        const data = await fetchChapterContent(currentBookNum,currentChapter)
        dispatch(setVerses({data}))
    }
    const clickRight = async () => {
        if(currentChapter === numOfChapters[currentBookNum-1]) {
            currentChapter = 1
            currentBookNum++
        } else {
            currentChapter++
        }
        dispatch(setTitle({bookTitle:books[currentBookNum-1],chapter:currentChapter}))
        const data = await fetchChapterContent(currentBookNum,currentChapter)
        dispatch(setVerses({data}))
    }

    const {data:highlightData,isSuccess} = useQuery(['fetchHighlight',title.bookTitle + "_" + title.chapter],fetchHighlight,{retryDelay:1000})
    
    return (
        <>
        {isSuccess && <div className='w-full pb-6 col-span-2 relative'>
                <div className={`mx-auto pt-6 mb-5 w-10/12 md:w-2/3 lg:w-3/5 xl:w-5/12 ${!isContentFullDisplay && `xl:w-full lg:w-full md:w-full w-full xl:px-36 lg:px-24 md:px-12 customizeScroll ${width >= 768 && 'contentHeight'}`}`}>
                    {verses.map((v)=> (
                        <Verse v={v} key={v.id} handleLastClick={handleLastClick} lastClick={lastClick} highlightData={highlightData}/>
                    ))}
                </div>
                {width >= 768 && !beginning && <div className='absolute bottom-0 left-1/2 transform -translate-x-44' onClick={clickLeft}><ChevronLeftIcon/></div>}
                {width >= 768 && !ending && <div className='absolute bottom-0 right-1/2 transform translate-x-44' onClick={clickRight}><ChevronRightIcon/></div>}
        </div>}
        </>
    )
}
