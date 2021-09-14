import React from 'react'
import ReactDom from 'react-dom'
import {useDispatch} from 'react-redux'
import AuthenticationButton from '../../auth/AuthenticationButton'
import { handleAccountModal } from '../../redux/modalSlice'

export default function AccountModal() {
    const dispatch = useDispatch()

    const closeAccountModal = () => {
        dispatch(handleAccountModal({bool:false}))
    }
    return ReactDom.createPortal(
        <div className='modalBackground' onClick={closeAccountModal}>
            <div className="py-3 bg-gray-100 w-36 h-auto absolute top-14 right-12 shadow-md border-2 border-gray-200 rounded-md dark:bg-modalBlack dark:border-opacity-10" onClick={e=>e.stopPropagation()}>
                <AuthenticationButton/>
            </div>
        </div>,
        document.getElementById('portal')
    )
}
