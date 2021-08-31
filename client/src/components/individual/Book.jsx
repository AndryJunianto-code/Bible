import React from 'react'

export default function Book({OT,NT,book}) {
    return (
        <>
            {OT ? (
             <section key={book.id}>
             <h1 className='text-sm mb-1 tracking-widest text-blue-400 font-bold'>Old Testament</h1>
             <p className='text-gray-700'>{book.name}</p>
             </section>
            ):
             NT? (
                <section key={book.id}>
                <h1 className='text-sm tracking-widest text-blue-400 font-bold mb-1 mt-4'>New Testament</h1>
                <p className='text-gray-700'>{book.name}</p>
                </section>
             ): (
                <p className='text-gray-700' key={book.id}>{book.name}</p>
             )}
        </>
    )
}
