import React from 'react'
import ReactDom from 'react-dom'
import { useDispatch } from 'react-redux'
import { handleSettingModal } from '../../redux/modalSlice'
import ThemeSection from '../ThemeSection'
import FontSection from '../FontSection'
import { useSelector } from 'react-redux'
import LayoutSection from '../LayoutSection'
import { handleReset } from '../../redux/settingSlice'

export default function SettingModal() {
    const {isFullScreen} = useSelector(state => state.content)
    const dispatch = useDispatch()

    const closeSettingModal = () => {
        dispatch(handleSettingModal({bool:false}))
    }
    const resetDefault = () => {
        dispatch(handleReset())
    }
    return ReactDom.createPortal(
        <div className='modalBackground' onClick={closeSettingModal}>
            <div className={`bg-white dark:bg-modalBlack dark:border-opacity-40 absolute ${isFullScreen ?'top-9' :'top-24'} right-28 w-72 h-auto shadow-md border border-gray-200 rounded-md`} onClick={e=>e.stopPropagation()}>
                <div className='px-8 py-7'>
                    <ThemeSection/>
                    <FontSection/>
                    <LayoutSection/>
                    <button onClick={resetDefault} className='mt-4 w-full px-2 py-1 text-sm text-center text-gray-100 dark:text-black bg-blue-500 hover:bg-blue-600 dark:bg-blue-300 dark:hover:bg-blue-400 dark:bg-opacity-90  transition-all duration-150 ease-linear tracking-wider'>Reset to default</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}
