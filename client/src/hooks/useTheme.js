import {useEffect,useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {handleTheme} from '../redux/settingSlice'

export default function useTheme() {
    const user = useSelector(state=>state.content.user)
    const [theme,setTheme] = useState(JSON.parse(localStorage.getItem(`theme-${user?.sub}`)) || 'light')
    const colorTheme = theme === 'light'?'dark':'light'
    const dispatch = useDispatch()
    useEffect(()=> {
        const root = window.document.documentElement
        const body = window.document.body
        root.classList.remove(colorTheme)
        body.classList.remove(colorTheme)
        root.classList.add(theme)
        body.classList.add(theme)
        dispatch(handleTheme({data:theme}))
    },[theme,colorTheme])
    return [colorTheme,setTheme]
}
