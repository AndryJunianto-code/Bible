import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

export default function FontSection() {
    const {font} = useSelector(state => state.setting)
    const fontSize = 'small'
    const dispatch = useDispatch()

    const handleFontSetting = (e) => {
        if(e.target.getAttribute('data-attr') === 'size') {

        }
    }
    return (
        <section className='mt-4 darkTextBasic'>
            <h1 className='tracking-wider font-semibold dark:text-gray-200'>Font Settings</h1>
            <div className='flex items-center justify-between mt-4 mb-6'>
                <p>Size</p>
                <select className='settingSelect' data-attr='size' value={fontSize} onChange={handleFontSetting}>
                    <option value="extra-small">Extra Small</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra-large">Extra Large</option>
                </select>
            </div>
            <div className='flex items-center justify-between'>
                <p>Style</p>
                <select className='settingSelect' data-attr='style' value='medium' onChange={handleFontSetting}>
                    <option value="extra-small">Extra Small</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="extra-large">Extra Large</option>
                </select>
            </div>
            <div className='flex items-center justify-between mt-6'>
                <p>Thickness</p>
                <input type="range" className='w-28' min='100' max='500' step='100'/>
            </div>
        </section>
    )
}
