import React from 'react'
import Content from '../components/Content'
import ParentNavbar from '../components/ParentNavbar'
import PhoneNavbar from '../components/PhoneNavbar'
import {useViewportContext} from '../context/ViewportContext'
export default function Main() {
    const {width} = useViewportContext()
    return (
        <div>
            {width < 768 ? <PhoneNavbar/> : <ParentNavbar/>}
            <Content/>
        </div>
    )
}
