import { useSelector } from "react-redux"
import { useEffect,useState } from "react"
export default function useScroll() {
    const storageTheme = useSelector(state=>state.setting.storageTheme)
    const [scrollTheme,setScrollTheme] = useState('')
    useEffect(()=> {
        if(storageTheme === 'light') {
            setScrollTheme('customizeScroll')
        } else {
            setScrollTheme('darkScroll')
        }
    },[storageTheme])
    return scrollTheme
}
