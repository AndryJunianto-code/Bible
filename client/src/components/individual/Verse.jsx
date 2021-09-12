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
    const dispatch = useDispatch()
    const isLastClick = lastClick[lastClick.length-1] && lastClick[lastClick.length-1].verse.includes(v.verse)
    const paragraphHighlight = highlightColor === 'blue' ? 'blueHighlight' : highlightColor === 'green' ? 'greenHighlight' : highlightColor === 'pink' ? 'pinkHighlight' : highlightColor === 'yellow' ? 'yellowHighlight' : ''

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
            dispatch(handleLastClick({data:lastClick.filter(v=>v.verse !== e.target.textContent)}))
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
        <div className={`flex ${isLastClick && 'relative'}`}>
            <p className='text-xmd mr-0.5 leading-8'>{v.verseId}</p>
            <p className={`mt-0.5 px-1 py-0.5 rounded-md ${paragraphHighlight} ${isSelected && 'selectedHighlight'}`} 
                onClick={selectVerse} data-highlight={highlightColor}
                data-click="verse">{v.verse}</p>
            {lastClick.length > 0 && isLastClick && isHighlightModalOpen &&<HighlightModal/>} 
        </div>
    )
}
