import React from 'react'
import ReactDom from 'react-dom'
import { useDispatch } from 'react-redux'
import { handleSettingModal } from '../../redux/modalSlice'
import ThemeSection from '../ThemeSection'
import FontSection from '../FontSection'
import { useSelector } from 'react-redux'

export default function SettingModal() {
    const {isFullScreen} = useSelector(state => state.content)
    const dispatch = useDispatch()
    const closeSettingModal = () => {
        dispatch(handleSettingModal({bool:false}))
    }
    return ReactDom.createPortal(
        <div className='modalBackground' onClick={closeSettingModal}>
            <div className={`bg-white absolute ${isFullScreen ?'top-9' :'top-24'} right-28 w-72 h-auto overflow-y-auto shadow-md border-2 border-gray-200`} onClick={e=>e.stopPropagation()}>
                <div className='px-8 py-5'>
                    <ThemeSection/>
                    <FontSection/>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}
