import React from 'react'
import { useSelector } from 'react-redux'
import Content from '../components/Content'
import Folder from '../components/Folder'
import ParentNavbar from '../components/ParentNavbar'
import PhoneNavbar from '../components/PhoneNavbar'
import {useViewportContext} from '../context/ViewportContext'
export default function Main() {
    const {width} = useViewportContext()
    const isContentFullDisplay = useSelector(state=>state.modal.isContentFullDisplay)
    return (
        <div>
            {width < 768 ? <PhoneNavbar/> : <ParentNavbar/>}
            <div className={`${!isContentFullDisplay && 'grid grid-cols-3'}`}>
                <Content/>
                {!isContentFullDisplay && <Folder/>}
            </div>
        </div>
    )
}
