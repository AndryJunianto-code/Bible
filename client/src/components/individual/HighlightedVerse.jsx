import React from 'react'

export default function HighlightedVerse({v}) {
    const {verseNum,verse,bookTitle,chapter} = v
    let miniTitle = `${bookTitle} ${chapter}:${verseNum}`
    return (
        <div className='border-b border-gray-600 border-opacity-30'>
            <div className='px-3 py-2'>
                <h3 className='font-semibold tracking-wider dark:text-gray-300'>{miniTitle}</h3>
                <p className='darkTextBasic'>{verse}</p>
            </div>
        </div>
    )
}
