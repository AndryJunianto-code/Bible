import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {handleFont} from '../redux/settingSlice'

export default function LayoutSection() {
    const dispatch = useDispatch()
    const {font} = useSelector(state => state.setting)

    const handleLayoutSetting = (e) => {
        const attribute = e.target.getAttribute('data-attr')
        if(attribute === 'justified') {
           dispatch(handleFont({type:'justified',data:e.target.checked}))
        }
        if(attribute === 'space') {
            dispatch(handleFont({type:'space',data:e.target.value}))
        }
    }
    return (
        <section className='mt-5 darkTextBasic'>
        <h1 className='tracking-wider font-semibold dark:text-gray-200'>Font Layout</h1>
        <div className='flex items-center justify-between mt-4 mb-6'>
            <p>Justified center</p>
            <input type="checkbox" onChange={handleLayoutSetting} checked={font.justified} data-attr='justified' className='w-4 h-4'/>
        </div>
        <div className='flex items-center justify-between mt-6'>
            <p>Line space</p>
            <input type="range" onChange={handleLayoutSetting} value={font.space} data-attr='space' className='w-28' min='1' max='3' step='1'/>
        </div>
    </section>
    )
}
