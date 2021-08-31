import React from 'react'
import Verse from './individual/Verse'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {useViewportContext} from '../context/ViewportContext'
import { useDispatch, useSelector } from 'react-redux';
import { fetchChapterContent } from '../request/bibleRequest';
import numOfChapters from '../data/numOfChapters'
import books from '../data/books'
import { setTitle, setVerses } from '../redux/contentSlice';
export default function Content() {
    const {width} = useViewportContext()
    const verses = useSelector(state => state.content.verses)
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
    return (
        <div className='w-full pb-6'>
            {width >= 768 && !beginning && <div className='fixed top-1/2 left-20' onClick={clickLeft}><ChevronLeftIcon/></div>}
            <div className='w-10/12 md:w-2/3 lg:w-3/5 xl:w-5/12 mx-auto mt-6'>
                {verses.map((v)=> (
                    <Verse v={v} key={v.id}/>
                ))}
            </div>
            {width >= 768 && !ending && <div className='fixed top-1/2 right-20' onClick={clickRight}><ChevronRightIcon/></div>}
        </div>
    )
}
