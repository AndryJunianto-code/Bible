import React, { useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import HourglassEmptyOutlinedIcon from '@material-ui/icons/HourglassEmptyOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { handleAccountModal } from '../redux/modalSlice';
import { setSearchQuery } from '../redux/contentSlice';
import AccountModal from './modal/AccountModal';
import {useQuery} from 'react-query'
import {searchTerm} from '../request/bibleRequest'
import { useAuth0 } from '@auth0/auth0-react';

export default function DesktopNavbar() {
    const dispatch = useDispatch()
    const {user} = useAuth0()
    const {isAccountModalOpen} = useSelector(state => state.modal)
    const {isFullScreen,searchQuery} = useSelector(state=>state.content)
    const {storageTheme} = useSelector(state=>state.setting)
    const loadingStyle = {color:storageTheme === 'dark' && 'white',width:'18px',height:'18px'}

    const accountModal = () => {
        dispatch(handleAccountModal({bool:!isAccountModalOpen}))
    }

    const {refetch:refetchSearch,isSuccess:searchSuccess,isLoading:searchLoading} = useQuery(['searchQuery',searchQuery],searchTerm,{retryDelay:1000,enabled:false})
    const handleSearch = (e) => {
        dispatch(setSearchQuery({data:e.target.value}))
    }
    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            refetchSearch()
        }
    }
    useEffect(()=>{
        if(searchSuccess) {
            window.location.href = `/search/${searchQuery}`
        }
    },[searchSuccess])
    return (
        <div className={`${isFullScreen && 'hidden'} flex justify-between items-center bg-gray-100 py-3 px-12 text-xs border-b border-gray-200 dark:bg-darkBlack dark:text-gray-300 dark:border-opacity-40`}>
            <h1>Logo</h1>   
            <main className='flex items-center'>
                <div className={`relative ml-6 ${user ? 'mr-4':'mr-6'} w-full`}>
                    <div className='absolute top-1.5 left-1'><SearchIcon style={{width:'16px',height:'16px',color:`${storageTheme === 'light' ? 'rgb(120, 120, 120)':'#ebebeb'}`}}/></div>
                    <input type="text" onChange={handleSearch} onKeyPress={(e)=>handleEnter(e)} value={searchQuery} className='px-6 py-1 border border-gray-200 text-sm rounded-sm text-gray-600 focus:outline-none focus:border-blue-400 dark:bg-lightBlack dark:border-opacity-40 dark:focus:border-opacity-100 dark:text-gray-300'/>
                    {<div className='absolute right-4 top-1.5 animate-spin opacity-80'><HourglassEmptyOutlinedIcon style={loadingStyle}/></div>}
                </div>
                <div onClick={accountModal}>
                    {user?.picture ? <img src={user.picture} className='rounded-full w-12' alt='user'/>:
                    <PersonIcon style={{color:`${storageTheme === 'light' ? 'rgb(60, 60, 60)':'#ebebeb'}`,width:'22px',height:'22px'}}/>}
                </div>
                {isAccountModalOpen && <AccountModal/>}
            </main>
        </div>
    )
}
