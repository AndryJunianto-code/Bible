import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import HighlightModal from '../modal/HighlightModal'

const blueIndex = 0
const greenIndex = 1
const pinkIndex = 2
const yellowIndex = 3
export default function Verse({v,lastClick,handleLastClick,highlightData}) {
    const [isSelected,setIsSelected] = useState(false)
    const [highlightColor,setHighlightColor] = useState('none')
    const isHighlightModalOpen = useSelector(state => state.modal.isHighlightModalOpen)
    const dispatch = useDispatch()
    const isLastClick = lastClick[lastClick.length-1] === v.verse
    const paragraphHighlight = highlightColor === 'blue' ? 'bg-blue-400' : highlightColor === 'green' ? 'bg-green-400' : highlightColor === 'pink' ? 'bg-pink-400' : highlightColor === 'yellow' ? 'bg-yellow-400' : ''
    const selectVerse  = (e) => {
        setIsSelected(!isSelected)
        if(isSelected === false) {
            dispatch(handleLastClick({data:[...lastClick,e.target.textContent]}))
        } else {
            dispatch(handleLastClick({data:lastClick.filter(v=>v !== e.target.textContent)}))
        }
    }    
    useEffect(async ()=> {
        if(isHighlightModalOpen === false) {
            setIsSelected(false)
        }
    },[isHighlightModalOpen])
    useEffect(()=>{
        if(highlightData.length > 0) {
            if(highlightData[0].data[blueIndex].verses.includes(v.verse)) {
                setHighlightColor('blue')
            } else if(highlightData[0].data[greenIndex].verses.includes(v.verse)) {
                setHighlightColor('green')
            } else if(highlightData[0].data[pinkIndex].verses.includes(v.verse)) {
                setHighlightColor('pink')
            } else if(highlightData[0].data[yellowIndex].verses.includes(v.verse)) {
                setHighlightColor('yellow')
            }
        }
    },[highlightData])
    return (
        <div className={`flex ${isLastClick && 'relative'}`}>
            <p className='text-xmd mr-0.5 leading-8'>{v.verseId}</p>
            <p className={`mt-0.5 px-1 py-0.5 ${paragraphHighlight} ${isSelected && 'bg-gray-200 bg-opacity-80'}`} 
                onClick={selectVerse}
                data-click="verse">{v.verse}</p>
            {lastClick.length > 0 && isLastClick && isHighlightModalOpen &&<HighlightModal/>} 
        </div>
    )
}
