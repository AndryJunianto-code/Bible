import React,{useEffect,useState} from 'react'
import {v4} from 'uuid'
import ChapterNumber from './ChapterNumber'
import numOfChapters from '../../data/numOfChapters'
export default function Book({OT,NT,book,index}) {
    const [num,setNum] = useState([])
    const [isChapterOpen,setIsChapterOpen] = useState({book:null,bool:false})
    
    const handleOpenChapter = () => {
        setIsChapterOpen({book:book.name,bool:!isChapterOpen.bool})
    }
    
    useEffect(()=> {
        for(let i = 1; i <= numOfChapters[index];i++) {
            setNum((prev)=>[...prev,i])
        }
    },[])
    return (
        <>
            {OT ? (
             <section>
             <h1 className='text-sm mb-1 tracking-widest text-blue-400 font-bold'>Old Testament</h1>
             <p className='text-gray-700 darkTextBasic' onClick={handleOpenChapter}>{book.name}</p>
             {isChapterOpen.bool && isChapterOpen.book === book.name && 
                <div className='grid grid-cols-5 h-full overflow-hidden'>
                    {num.map(n=>(
                        <ChapterNumber key={v4()} n={n} book={book} index={index}/>
                    ))}
                </div>}
             </section>
            ):
             NT? (
                <section>
                <h1 className='text-sm tracking-widest text-blue-400 font-bold mb-1 mt-4'>New Testament</h1>
                <p className='text-gray-700 darkTextBasic' onClick={handleOpenChapter}>{book.name}</p>
                {isChapterOpen.bool && isChapterOpen.book === book.name && 
                    <div className='grid grid-cols-5 h-full overflow-hidden'>
                        {num.map(n=>(
                            <ChapterNumber key={v4()} n={n} book={book} index={index}/>
                        ))}
                    </div>}
                </section>
             ): (
                <section>
                    <p className='text-gray-700 darkTextBasic' onClick={handleOpenChapter}>{book.name}</p>
                        {isChapterOpen.bool && isChapterOpen.book === book.name && 
                        <div className='grid grid-cols-5 h-full overflow-hidden'>
                            {num.map(n=>(
                                <ChapterNumber key={v4()} n={n} book={book} index={index}/>
                            ))}
                        </div>}
                </section>
             )}
        </>
    )
}
