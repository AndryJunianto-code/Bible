import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

export default function DesktopNavbar() {
    return (
        <div className='flex justify-between items-center bg-gray-100 py-3 px-8 xl:px-12 text-xs border-b border-gray-200'>
            <h1>Logo</h1>
            <main className='flex items-center'>
                <div><SettingsIcon style={{color:'rgb(50,50,50)',width:'15px',height:'15px'}}/></div>
                <div className='relative mx-6 w-full'>
                    <div className='absolute top-0.5 left-1'><SearchIcon style={{width:'12px',height:'12px',color:'rgb(69, 69, 69)'}}/></div>
                    <input type="text" className='pl-4 pr-1 py-0.5 border border-gray-200 text-xs focus:outline-none rounded-sm text-gray-600'/>
                </div>
                <div><PersonIcon style={{color:'rgb(50,50,50)',width:'15px',height:'15px'}}/></div>
            </main>
        </div>
    )
}
