import React from 'react'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import useTheme from '../hooks/useTheme';
import { useSelector } from 'react-redux';

export default function ThemeSection() {
    const [colorTheme,setTheme] = useTheme()
    const storageTheme = useSelector(state => state.setting.storageTheme)

    const handleTheme = (type) => {
        localStorage.setItem('theme',JSON.stringify(type))
        setTheme(type)
    }
    const iconStyle = {color:`${storageTheme === 'dark' ? '#c4c4c4': '#474747'}`,width:'30px',height:'30px'}
    return (
        <section className='flex items-center justify-between'>
            <div onClick={()=>handleTheme('light')} className={`p-2 border-2 dark:border-gray-600 ${colorTheme === 'dark' && 'border-blue-400'} rounded-full ml-4`}>
                <WbSunnyOutlinedIcon style={iconStyle}/>
            </div>  
            <div onClick={()=>handleTheme('dark')} className={`p-2 border-2 border-gray-300 ${colorTheme === 'light' && 'dark:border-blue-400'}  rounded-full mr-4`}>
                <NightsStayOutlinedIcon style={iconStyle}/>
            </div>
        </section>
    )
}
