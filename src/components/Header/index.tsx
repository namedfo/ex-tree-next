'use client'
import { MenuIcon } from 'lucide-react'
import Logo from './Logo'
import OpenHeader from './OpenHeader'
import { useHeaderStore } from './useHeaderStore'


export default function Header() {
    const isShow = useHeaderStore(state => state.isShow)
    const toggleIsShow = useHeaderStore(state => state.toggleIsShow)

    return (
        <div className='h-[50px] flex fixed left-0 top-0 z-[99] justify-center border-b w-full bg-white'>
            {isShow
                ? (
                    <OpenHeader />
                )
                : (
                    <div className='w-[640px] flex justify-between items-center'>
                        <Logo />
                        <div className='flex items-center mr-[10px]'>
                            <button onClick={toggleIsShow}>
                                <MenuIcon />
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}