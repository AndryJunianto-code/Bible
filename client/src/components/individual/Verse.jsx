import React from 'react'

export default function Verse({verse,num}) {
    return (
        <div className='flex'>
            <p className='text-xmd mr-0.5 leading-7'>{num+1}</p>
            <p className='leading-7'>{verse}</p>
        </div>
    )
}
