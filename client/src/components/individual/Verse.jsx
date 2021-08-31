import React from 'react'

export default function Verse({v}) {
    return (
        <div className='flex'>
            <p className='text-xmd mr-0.5 leading-7'>{v.verseId}</p>
            <p className='leading-7'>{v.verse}</p>
        </div>
    )
}
