import React from 'react'
import DesktopNavbar from './DesktopNavbar'
import Guidebar from './Guidebar'

export default function ParentNavbar() {
    return (
        <div className='sticky top-0 left-0'>
            <DesktopNavbar/>
            <Guidebar/>
        </div>
    )
}
