import React from 'react'
import { useQuery } from 'react-query'
import { fetchBookmark } from '../request/bibleRequest'
import Bookmark from './individual/Bookmark'
import {useSelector} from 'react-redux'
import useScroll from '../hooks/useScroll'

export default function BookmarkSection() {
    const {user} = useSelector(state=>state.content)
    const scrollTheme = useScroll()
    const {data:bookmarkData,isSuccess:bookmarkSuccess} = useQuery(
        ['fetchBookmark',user?.sub], fetchBookmark,{retryDelay:1000}
    )
    return (
        <>
        {bookmarkSuccess && <div className='h-full w-full pb-3'>
            <section className={`height90 overflow-y-auto ${scrollTheme}`}>
               {bookmarkData.map(b=>(
                   <Bookmark bookmark={b} key={b._id}/>
               ))}
            </section>
        </div>}
        </>
    )
}
