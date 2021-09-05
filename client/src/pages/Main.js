import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Content from '../components/Content'
import Folder from '../components/Folder'
import ParentNavbar from '../components/ParentNavbar'
import PhoneNavbar from '../components/PhoneNavbar'
import {useViewportContext} from '../context/ViewportContext'
import { closeHighlightModal } from '../redux/modalSlice'
export default function Main() {
    const {width} = useViewportContext()
    const isContentFullDisplay = useSelector(state=>state.modal.isContentFullDisplay)
    const dispatch = useDispatch()

    const handleHighlightModal = (e) => {
        const isVerse = e.target.getAttribute('data-click') === 'verse'
        if(!isVerse) {
            dispatch(closeHighlightModal())
        }
    }
    return (
        <div className='pb-7' onClick={handleHighlightModal}>
            {width < 768 ? <PhoneNavbar/> : <ParentNavbar/>}
            <div className={`${!isContentFullDisplay && width >= 768 && 'grid grid-cols-3'}`}>
                <Content/>
                {!isContentFullDisplay &&  width >= 768 && <Folder/>}
            </div>
        </div>
    )
}
