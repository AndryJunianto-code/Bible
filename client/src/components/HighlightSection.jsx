import React from 'react'
import {useQuery} from 'react-query'
import {useSelector} from 'react-redux'
import { fetchHighlightedVerse } from '../request/bibleRequest'
import CreateIcon from '@material-ui/icons/Create';
import HighlightedVerse from './individual/HighlightedVerse';
import {v4} from 'uuid'
import useScroll from '../hooks/useScroll'

export default function HighlightSection({selectedColor,setSelectedColor}) {
    const {user} = useSelector(state => state.content)
    const scrollTheme = useScroll()
    const {data:highlightedVerses,isSuccess:highlightedSuccess} = useQuery(
        ['fetchHighlightedVerse',user?.sub,selectedColor],fetchHighlightedVerse,{retryDelay:1000}
    )
    return (
        <div className='relative h-full w-full'>
            {highlightedSuccess && 
            <section className={`height86 overflow-y-auto ${scrollTheme}`}>
               {highlightedVerses.map(book=>(
                   book.map(v=>(
                       <HighlightedVerse v={v} key={v4()}/>
                   ))
               ))}
            </section>}
            <section className='absolute bottom-9 w-full px-3'>
                <div className='grid grid-cols-4 gap-x-4'>
                    <div onClick={()=>setSelectedColor('blue')} className={`border-2 ${selectedColor === 'blue' && 'border-blue-500'} py-1 bg-blue-200 flex items-center justify-center rounded-md`}><CreateIcon style={{color:'blue'}}/></div>
                    <div onClick={()=>setSelectedColor('green')} className={`border-2 ${selectedColor === 'green' && 'border-green-500'} py-1 bg-green-200 flex items-center justify-center rounded-md`}><CreateIcon style={{color:'green'}}/></div>
                    <div onClick={()=>setSelectedColor('pink')} className={`border-2 ${selectedColor === 'pink' && 'border-pink-500'} py-1  bg-pink-200 flex items-center justify-center rounded-md`}><CreateIcon style={{color:'rgb(255, 122, 242)'}}/></div>
                    <div onClick={()=>setSelectedColor('yellow')} className={`border-2 ${selectedColor === 'yellow' && 'border-yellow-500'} py-1  bg-yellow-200 flex items-center justify-center rounded-md`}><CreateIcon style={{color:'rgb(255, 180, 3)'}}/></div>
                </div>
            </section>
        </div>
    )
}
