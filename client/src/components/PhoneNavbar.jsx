import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
export default function PhoneNavbar() {
    return (
        <div className="sticky top-0 left-0 py-1 text-sm bg-gray-100">
            <h2 className="mr-20 text-center w-full">Genesis 1</h2>
            <div className='absolute top-0.5 right-3'>
                <MenuIcon style={{width:'18px',height:'18px'}}/>
            </div>
        </div>
    )
}
