import { useState } from 'react'
import ReactDom from 'react-dom'
import {handleBookmarkModal} from '../../redux/modalSlice'
import { useDispatch,useSelector } from 'react-redux'
import { fetchBookmark } from '../../request/bibleRequest'
import {useMutation,useQuery} from 'react-query'
import {postBookmark} from '../../request/bibleRequest'

export default function BookmarkModal() {
    const dispatch = useDispatch()
    const {user,title} = useSelector(state => state.content)
    const [selectColor,setSelectColor] = useState('bg-blue-400')

    const {refetch:refetchBookmark} = useQuery(
        ['fetchBookmark',user?.sub], fetchBookmark,{retryDelay:1000}
    )
    const {mutate} = useMutation(postBookmark,{
        onSuccess:(data)=>{
            refetchBookmark()
        },
        onSettled:()=>{
            dispatch(handleBookmarkModal({bool:false}))
        }
    })
    const submitBookmark = async () => {
        mutate({userId:user?.sub,color:selectColor,info:title})
    }
    const handleSelectColor = (e) => {
        setSelectColor(e.target.getAttribute('data-color'))
    }
    const closeBookmarkModal = () => {
        dispatch(handleBookmarkModal({bool:false}))
    }
    return ReactDom.createPortal(
        <div className='fixed top-0 left-0 right-0 bottom-0 z-20 bg-black bg-opacity-50' onClick={closeBookmarkModal}>
            <div className='bg-gray-100 flex flex-col fixed top-32 left-1/2 w-80 h-52 pb-1.5 rounded-md transform -translate-x-1/2' onClick={e=>e.stopPropagation()}>
                <h1 className='text-sm border-b border-black border-opacity-30 rounded-t-md py-1.5 text-center tracking-wider bg-gray-700 text-gray-100'>Bookmark</h1>
                <section className='flex px-6 mt-3 items-center'>
                    <p className='mr-2 text-sm'>Verse :</p>
                    <p className='font-semibold text-lg'>{title.bookTitle} {title.chapter}</p>
                </section>
                <section className='flex px-6 mt-3 w-full'>
                    <p className='text-sm'>Color :</p>
                    <section className='grid grid-cols-5 w-1/2 gap-1 ml-2 mt-1.5' onClick={handleSelectColor}>
                        <div data-color='bg-blue-400' className={`bg-blue-400  ${selectColor === 'bg-blue-400' && 'border-2 border-blue-600'} w-6 h-6 rounded-sm`}></div>
                        <div data-color='bg-red-400' className={`bg-red-400  ${selectColor === 'bg-red-400' && 'border-2 border-red-600'} w-6 h-6 rounded-sm`}></div>
                        <div data-color='bg-pink-400' className={`bg-pink-400  ${selectColor === 'bg-pink-400' && 'border-2 border-pink-600'} w-6 h-6 rounded-sm`}></div>
                        <div data-color='bg-indigo-400' className={`bg-indigo-400  ${selectColor === 'bg-indigo-400' && 'border-2 border-indigo-600'} w-6 h-6 rounded-sm`}></div>
                        <div data-color='bg-purple-400' className={`bg-purple-400  ${selectColor === 'bg-purple-400' && 'border-2 border-purple-600'} w-6 h-6 rounded-sm`}></div>
                        <div data-color='bg-yellow-400' className={`bg-yellow-400  ${selectColor === 'bg-yellow-400' && 'border-2 border-yellow-600'} w-6 h-6 rounded-sm`}></div>
                        <div data-color='bg-green-400' className={`bg-green-400  ${selectColor === 'bg-green-400' && 'border-2 border-green-600'} w-6 h-6 rounded-sm`}></div>
                    </section>
                </section>
                <button onClick={submitBookmark} className='mt-5 mx-3 bg-blue-500 hover:bg-blue-600 transition-all duration-150 ease-linear rounded-sm tracking-wider px-3 py-1.5 text-gray-100 text-sm'>Done</button>
            </div>
        </div>,
        document.getElementById('portal')
    )
}
