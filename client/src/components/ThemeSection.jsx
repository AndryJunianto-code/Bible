import React from 'react'
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import useTheme from '../hooks/useTheme';

export default function ThemeSection() {
    const [colorTheme,setTheme] = useTheme()

    const handleTheme = (type) => {
        localStorage.setItem('theme',JSON.stringify(type))
        setTheme(type)
    }
    
    return (
        <section className='flex items-center justify-between'>
            <div onClick={()=>handleTheme('light')} className={`p-2 border-2 ${colorTheme === 'dark' && 'border-blue-400'} rounded-full ml-4`}><WbSunnyOutlinedIcon style={{width:'30px',height:'30px'}}/></div>  
            <div onClick={()=>handleTheme('dark')} className={`p-2 border-2 ${colorTheme === 'light' && 'border-blue-400'}  rounded-full mr-4`}><NightsStayOutlinedIcon style={{width:'30px',height:'30px'}}/></div>
        </section>
    )
}
