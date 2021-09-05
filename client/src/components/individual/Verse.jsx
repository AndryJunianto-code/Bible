import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import HighlightModal from '../modal/HighlightModal'

export default function Verse({v,lastClick,handleLastClick}) {
    const [isSelected,setIsSelected] = useState(false)
    const isHighlightModalOpen = useSelector(state => state.modal.isHighlightModalOpen)
    const dispatch = useDispatch()
    const isLastClick = lastClick[lastClick.length-1] === v.verse
    const selectVerse  = (e) => {
        setIsSelected(!isSelected)
        if(isSelected === false) {
            dispatch(handleLastClick({data:[...lastClick,e.target.textContent]}))
        } else {
            dispatch(handleLastClick({data:lastClick.filter(v=>v !== e.target.textContent)}))
        }
    }
    useEffect(()=> {
        if(isHighlightModalOpen === false) {
            setIsSelected(false)
        }
    },[isHighlightModalOpen])
    return (
        <div className={`flex ${isLastClick && 'relative'}`}>
            <p className='text-xmd mr-0.5 leading-7'>{v.verseId}</p>
            <p className={`leading-7 ${isSelected && 'bg-gray-200'} ${isLastClick && 'bg-blue-400'}`} 
                onClick={selectVerse}
                data-click="verse">{v.verse}</p>
            {lastClick.length > 0 && isLastClick && isHighlightModalOpen &&<HighlightModal/>} 
        </div>
    )
}
