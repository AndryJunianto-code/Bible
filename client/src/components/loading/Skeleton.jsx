import React from 'react'
import './Loading.css'

export default function Skeleton({type}) {
    const classes = `skeleton ${type} relative overflow-x-hidden`
    
    return (
            <div className={classes}>
                <div className='w-5 h-3 bg-gray-400 absolute top-0 left-2.5 rounded-md animateSkeleton'></div>
            </div>
    )
}
