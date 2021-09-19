import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { handleFont } from '../redux/settingSlice'

export default function FontSection() {
    const {font} = useSelector(state => state.setting)
    const dispatch = useDispatch()

    const handleFontSetting = (e) => {
        const value = e.target.value
        const attribute = e.target.getAttribute('data-attr')
        if(attribute === 'size') {
           dispatch(handleFont({type:'size',data:value}))
        }
        if(attribute === 'style') {
            dispatch(handleFont({type:'style',data:value}))
        }
        if(attribute === 'thickness') {
            dispatch(handleFont({type:'thickness',data:value}))
        }
    }
    return (
        <section className='mt-4 darkTextBasic'>
            <h1 className='tracking-wider font-semibold dark:text-gray-200'>Font Settings</h1>
            <div className='flex items-center justify-between mt-4 mb-6'>
                <p>Size</p>
                <select className='settingSelect' data-attr='size' value={font.size} onChange={handleFontSetting}>
                    <option value="extra-small">Extra Small</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra-large">Extra Large</option>
                </select>
            </div>
            <div className='flex items-center justify-between'>
                <p>Style</p>
                <select className='settingSelect' data-attr='style' value={font.style} onChange={handleFontSetting}>
                    <option value="sans">Sans</option>
                    <option value="serif">Serif</option>
                    <option value="mono">Mono</option>
                    <option value="roboto">Roboto</option>
                    <option value="acme">Acme</option>
                </select>
            </div>
            <div className='flex items-center justify-between mt-6'>
                <p>Thickness</p>
                <input type="range" value={font.thickness} onChange={handleFontSetting} data-attr='thickness' className='w-28' min='100' max='400' step='100'/>
            </div>
        </section>
    )
}
