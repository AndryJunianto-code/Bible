import {useEffect,useState} from 'react'
import { useDispatch} from 'react-redux'
import {handleTheme} from '../redux/settingSlice'

export default function useTheme() {
    const [theme,setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'light')
    const colorTheme = theme === 'light'?'dark':'light'
    const dispatch = useDispatch()
    useEffect(()=> {
        const root = window.document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        dispatch(handleTheme({data:theme}))
    },[theme,colorTheme])
    return [colorTheme,setTheme]
}
