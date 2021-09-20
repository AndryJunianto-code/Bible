import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import HighlightModal from '../modal/HighlightModal'
import { contentSlice } from '../../redux/contentSlice'

const blueIndex = 0
const greenIndex = 1
const pinkIndex = 2
const yellowIndex = 3
export default function Verse({v,lastClick,handleLastClick,highlightData}) {
    const [isSelected,setIsSelected] = useState(false)
    const [highlightColor,setHighlightColor] = useState('none')
    const isHighlightModalOpen = useSelector(state => state.modal.isHighlightModalOpen)
    const {title} = useSelector(state=>state.content)
    const {storageTheme,font} = useSelector(state => state.setting)   
    const dispatch = useDispatch()
    const isLastClick = lastClick[lastClick.length-1] && lastClick[lastClick.length-1].verse.includes(v.verse)
    const paragraphHighlight = highlightColor === 'blue' ? 'bg-blueHL dark:text-blueHL' : highlightColor === 'green' ? 'bg-greenHL dark:text-greenHL' : highlightColor === 'pink' ? 'bg-pinkHL dark:text-pinkHL' : highlightColor === 'yellow' ? 'bg-yellowHL dark:text-yellowHL' : ''
    const verseNumSize = font?.size === 'extra-small' ? 'text-xmd leading-6' : font?.size === 'small' ? 'text-xs leading-7' : font?.size === 'medium' ? 'text-xs leading-8' : font?.size === 'large' ? 'text-sm leading-8' : font?.size === 'extra-large' ? 'text-sm leading-9' : ''
    const verseSize = font?.size === 'extra-small' ? 'text-sm' : font?.size === 'small' ? 'text-md' : font?.size === 'medium' ? 'text-lg' : font?.size === 'large' ? 'text-xl' : font?.size === 'extra-large' ? 'text-2xl' : ''
    const verseStyle = font?.style === 'sans' ? 'font-sans' : font?.style === 'serif' ? 'font-serif' : font?.style === 'mono' ? 'font-mono' : font?.style === 'roboto' ? 'font-roboto' : font?.style === 'acme' ? 'font-acme' : ''
    const verseThickness = font?.thickness === '100' ? 'font-light' : font?.thickness === '200' ? 'font-normal' : font?.thickness === '300' ? 'font-semibold' : font?.thickness === '400' ? 'font-bold' : ''
    const verseSpacing = font?.space === '1' ? 'mb-0' : font?.space === '2' ? 'mb-1' : font?.space === '3' ? 'mb-1.5' : ''

    const selectVerse  = (e) => {
        const dataHighlight = e.target.getAttribute('data-highlight')
        setIsSelected(!isSelected)
        if(isSelected === false) {
            if(dataHighlight !== 'none') {
                const special = `##${dataHighlight}##${e.target.textContent}` 
                dispatch(handleLastClick({data:[...lastClick,{verseNum:v.verseId,verse:special,...title}]}))
            } else {
                dispatch(handleLastClick({data:[...lastClick,{verseNum:v.verseId,verse:e.target.textContent,...title}]}))
            }
        } else {
            dispatch(handleLastClick({data:lastClick.filter(v=> !v.verse.includes(e.target.textContent))}))
        }   
    }    
    useEffect(async ()=> {
        if(isHighlightModalOpen === false) {
            setIsSelected(false)
        }
    },[isHighlightModalOpen])
    useEffect(()=>{
        if(highlightData && highlightData.length > 0) {
            if(highlightData[0].data[blueIndex].verses.some(s=>s.verse === v.verse)) {
                setHighlightColor('blue')
            } else if(highlightData[0].data[greenIndex].verses.some(s=>s.verse === v.verse)) {
                setHighlightColor('green')
            } else if(highlightData[0].data[pinkIndex].verses.some(s=>s.verse === v.verse)) {
                setHighlightColor('pink')
            } else if(highlightData[0].data[yellowIndex].verses.some(s=>s.verse === v.verse)) {
                setHighlightColor('yellow')
            } else {
                setHighlightColor('none')
            }
        }
    },[highlightData])
    return (
        <div className={`flex ${verseSpacing} ${verseThickness} ${verseStyle} ${isLastClick && 'relative'}`}>
            <p className={`mr-0.5 ${verseNumSize}`}>{v.verseId}</p>
            <p className={`px-1 py-0.5 rounded-md dark:bg-transparent ${verseSize} ${paragraphHighlight} ${isSelected && `selectedHL ${storageTheme === 'light' ? 'selectedHL':'selectedHLDark'}`}`} 
                onClick={selectVerse} data-highlight={highlightColor}
                data-click="verse">{v.verse}</p>
            {lastClick.length > 0 && isLastClick && isHighlightModalOpen &&<HighlightModal/>} 
        </div>
    )
}
