import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch, useSelector } from 'react-redux';
import { handleAccountModal } from '../redux/modalSlice';
import AccountModal from './modal/AccountModal';
import {useAuth0} from '@auth0/auth0-react'

export default function DesktopNavbar() {
    const dispatch = useDispatch()
    const {isAccountModalOpen} = useSelector(state => state.modal)
    const {user} = useAuth0()

    const accountModal = () => {
        dispatch(handleAccountModal({bool:!isAccountModalOpen}))
    }
    
    return (
        <div className='flex justify-between items-center bg-gray-100 py-3 px-12 text-xs border-b border-gray-200'>
            <h1>Logo</h1>
            <main className='flex items-center'>
                <div><SettingsIcon style={{color:'rgb(50,50,50)',width:'20px',height:'20px'}}/></div>
                <div className={`relative ml-6 ${user ? 'mr-4':'mr-6'} w-full`}>
                    <div className='absolute top-1.5 left-1'><SearchIcon style={{width:'16px',height:'16px',color:'rgb(69, 69, 69)'}}/></div>
                    <input type="text" className='pl-6 pr-1 py-1 border border-gray-200 text-sm  rounded-sm text-gray-600 focus:outline-none focus:border-blue-400'/>
                </div>
                <div onClick={accountModal}>
                    {user ? <img src={user.picture} className='rounded-full w-12' alt='user'/>:
                    <PersonIcon style={{color:'rgb(50,50,50)',width:'22px',height:'22px'}}/>}
                </div>
                {isAccountModalOpen && <AccountModal/>}
            </main>
        </div>
    )
}
