import {useQuery} from 'react-query'
import { useEffect } from 'react'
import { searchTerm } from '../request/bibleRequest'
import {useParams} from 'react-router'
import SearchResult from '../components/individual/SearchResult'
import DesktopNavbar from '../components/DesktopNavbar'
import PhoneNavbar from '../components/PhoneNavbar'
import {useViewportContext} from '../context/ViewportContext'
import { useSelector } from 'react-redux'
import useTheme from '../hooks/useTheme'
import useScroll from '../hooks/useScroll'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function Search() {
    const {width} = useViewportContext()
    const params = useParams().query
    const {data:searchData,isSuccess:searchSuccess} = useQuery(['searchQuery',params],searchTerm,{retryDelay:1000})
    const {storageTheme} = useSelector(state=>state.setting)
    const [colorTheme,setTheme] = useTheme()
    const scrollTheme = useScroll()

    const backToHome = () => {
        window.location.href = '/'
    }

    useEffect(()=>{
        setTheme(storageTheme)
    },[storageTheme])

    return (
        <div className='darkTextBasic dark:bg-darkBlack overflow-hidden'>
            {width < 768 ? <PhoneNavbar/> : <DesktopNavbar/>}
            <div className='flex items-center justify-center relative'>
                <div onClick={backToHome} className='absolute left-16 top-1/2 transform -translate-y-1/2 opacity-70 hover:opacity-100'><ArrowBackIcon style={{width:'26px',height:'26px'}}/></div>
                <h1 className='text-3xl text-center my-5'>You searched for "<span className='text-blue-500 font-semibold'>{params}</span>"</h1>
            </div>
            <div className={`px-3 searchHeight pb-7 ${scrollTheme} md:grid md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 lg:px-5 xl:grid-cols-4 xl:px-10 2xl:px-16`}>
                    {searchData && (
                        searchData.items !== null ? 
                        searchData.items.map(s=>(
                            <SearchResult key={s.id} search={s}/>
                        ))
                        :
                        <p>No result</p>
                    )}
            </div>
        </div>
    )
}
