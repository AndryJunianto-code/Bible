import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from 'react-redux';
import { handleAccountModal } from '../redux/modalSlice';
import AccountModal from './modal/AccountModal';

export default function DesktopNavbar() {
    const dispatch = useDispatch()
    const {isAccountModalOpen} = useSelector(state => state.modal)
    const {isFullScreen,user} = useSelector(state=>state.content)
    const {storageTheme} = useSelector(state=>state.setting)
    const accountModal = () => {
        dispatch(handleAccountModal({bool:!isAccountModalOpen}))
    }
    return (
        <div className={`${isFullScreen && 'hidden'} flex justify-between items-center bg-gray-100 py-3 px-12 text-xs border-b border-gray-200 dark:bg-darkBlack dark:text-gray-300 dark:border-opacity-40`}>
            <h1>Logo</h1>   
            <main className='flex items-center'>
                <div className={`relative ml-6 ${user ? 'mr-4':'mr-6'} w-full`}>
                    <div className='absolute top-1.5 left-1'><SearchIcon style={{width:'16px',height:'16px',color:`${storageTheme === 'light' ? 'rgb(120, 120, 120)':'#ebebeb'}`}}/></div>
                    <input type="text" className='pl-6 pr-1 py-1 border border-gray-200 text-sm rounded-sm text-gray-600 focus:outline-none focus:border-blue-400 dark:bg-lightBlack dark:border-opacity-40 dark:focus:border-opacity-100 dark:text-gray-300'/>
                </div>
                <div onClick={accountModal}>
                    {user.picture ? <img src={user.picture} className='rounded-full w-12' alt='user'/>:
                    <PersonIcon style={{color:`${storageTheme === 'light' ? 'rgb(60, 60, 60)':'#ebebeb'}`,width:'22px',height:'22px'}}/>}
                </div>
                {isAccountModalOpen && <AccountModal/>}
            </main>
        </div>
    )
}
