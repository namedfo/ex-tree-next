import { X } from 'lucide-react'
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import ChangeLanguage from './ChangeLanguage'
import Logo from './Logo'
import { useHeaderStore } from './useHeaderStore'

export default function OpenHeader() {
    const isShow = useHeaderStore(state => state.isShow)
    const toggleIsShow = useHeaderStore(state => state.toggleIsShow)


    const ref = useRef<any>(null)

    useOnClickOutside(ref, toggleIsShow)


    if (!isShow) return null

    return (
        <div className='fixed h-full w-full z-[99] left-0 top-0 bg-[#00000017]'>
            <div ref={ref} className='w-[98%] sm:w-[640px] bg-white shadow-select rounded-[14px] absolute left-[50%] translate-x-[-50%] top-[4px] flex flex-col min-h-[42px]'>
                <Main toggleIsShow={toggleIsShow} />
                <Links />
                <div className='flex pt-[6px] pb-[10px] px-[10px]'>
                    <button
                        className='bg-[#2E81FF] py-[10px] text-[15px] rounded-[10px] w-full text-white'
                    >
                        +88 122 531 22
                    </button>
                </div>
            </div>
        </div>
    )
}

const Links = () => {
    return (
        <div className='flex flex-col px-[20px] pt-[6px] pb-[2px]'>
            <div className='text-blue-700 py-[8px] flex border-t justify-center'>
                Адреса офисов
            </div>
            <div className='text-blue-700 py-[8px] flex border-t justify-center'>
                Партнерам
            </div>
            <div className='text-blue-700 py-[8px] flex border-t justify-center'>
                Связь с оператором 24/7
            </div>
            <div className='text-blue-700 py-[8px] flex border-t justify-center'>
                Контакты
            </div>
        </div>
    )
}


const Main = ({
    toggleIsShow
}: any) => {


    return (
        <div className='flex items-center h-[42px] justify-between'>
            <Logo />
            <div className='flex items-center gap-[12px] mr-[6px]'>
                <ChangeLanguage />
                <button
                    onClick={toggleIsShow}
                    className='p-[6px] rounded-[8px] bg-zinc-100'
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    )
}