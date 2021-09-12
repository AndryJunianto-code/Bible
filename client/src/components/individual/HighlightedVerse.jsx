import React from 'react'

export default function HighlightedVerse({v}) {
    const {verseNum,verse,bookTitle,chapter} = v
    let miniTitle = `${bookTitle} ${chapter}:${verseNum}`
    return (
        <div className='border-b border-gray-600 border-opacity-30'>
            <div className='px-3 py-1.5 mb-1'>
                <h3 className='font-semibold tracking-wider'>{miniTitle}</h3>
                <p>{verse}</p>
            </div>
        </div>
    )
}
