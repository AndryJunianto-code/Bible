import React from 'react'
import Verse from './individual/Verse'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {useViewportContext} from '../context/ViewportContext'

const verses = [
    "Then Moses answered, “But behold, they will not believe me or listen to my voice, for they will say, ‘The LORD did not appear to you.’”",
    "The LORD said to him, “What is that in your hand?” He said, i“A staff.”",
    "And he said, “Throw it on the ground.” So he threw it on the ground, and it became a serpent, and Moses ran from it.",
    "But the LORD said to Moses, “Put out your hand and catch it by the tail”—so he put out his hand and caught it, and it became a staff in his hand—",
    "“that they may jbelieve that the LORD, kthe God of their fathers, the God of Abraham, the God of Isaac, and the God of Jacob, has appeared to you.",
    "Again, the LORD said to him, “Put your hand inside your cloak.”1 And he put his hand inside his cloak, and when he took it out, behold, his hand was lleprous2 like snow.",
    "Then God said, “Put your hand back inside your cloak.” So he put his hand back inside his cloak, and when he took it out, behold, mit was restored like the rest of his flesh.",
    "“If they will not believe you,” God said, “or listen to the first sign, they may believe the latter sign.",
    "If they will not believe even these two signs or listen to your voice, you shall take some water from the Nile and pour it on the dry ground, and the water that you shall take from the Nile nwill become blood on the dry ground.”",
    "But Moses said to the LORD, “Oh, my Lord, I am not eloquent, either in the past or since you have spoken to your servant, but oI am slow of speech and of tongue.”",
    "Then Moses answered, “But behold, they will not believe me or listen to my voice, for they will say, ‘The LORD did not appear to you.’”",
    "The LORD said to him, “What is that in your hand?” He said, i“A staff.”",
    "And he said, “Throw it on the ground.” So he threw it on the ground, and it became a serpent, and Moses ran from it.",
    "But the LORD said to Moses, “Put out your hand and catch it by the tail”—so he put out his hand and caught it, and it became a staff in his hand—",
    "“that they may jbelieve that the LORD, kthe God of their fathers, the God of Abraham, the God of Isaac, and the God of Jacob, has appeared to you.",
    "Again, the LORD said to him, “Put your hand inside your cloak.”1 And he put his hand inside his cloak, and when he took it out, behold, his hand was lleprous2 like snow.",
    "Then God said, “Put your hand back inside your cloak.” So he put his hand back inside his cloak, and when he took it out, behold, mit was restored like the rest of his flesh.",
    "“If they will not believe you,” God said, “or listen to the first sign, they may believe the latter sign.",
    "If they will not believe even these two signs or listen to your voice, you shall take some water from the Nile and pour it on the dry ground, and the water that you shall take from the Nile nwill become blood on the dry ground.”",
    "But Moses said to the LORD, “Oh, my Lord, I am not eloquent, either in the past or since you have spoken to your servant, but oI am slow of speech and of tongue.”"
]
export default function Content() {
    const {width} = useViewportContext()
    return (
        <div className='w-full pb-6'>
            {width >= 768 && <div className='fixed top-1/2 left-20'><ChevronLeftIcon/></div>}
            <div className='w-10/12 md:w-2/3 lg:w-3/5 xl:w-5/12 mx-auto mt-6'>
                {verses.map((v,index)=> (
                    <Verse verse={v} num={index} key={index}/>
                ))}
            </div>
            {width >= 768 && <div className='fixed top-1/2 right-20'><ChevronRightIcon/></div>}
        </div>
    )
}
