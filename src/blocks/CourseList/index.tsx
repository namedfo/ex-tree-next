'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function CourseList() {
    const [isShowList, setIsShowList] = useState(false)

    const toggleIsShowList = () => setIsShowList(prevIsShowList => !prevIsShowList)

    return (
        <div className='flex flex-col mt-[40px] pt-[12px] bg-white rounded-[14px]'>
            <div className='flex font-[600]  px-[12px] text-zinc-500 text-[14px]'>
                <span className='w-[50%]'>
                    Валюта
                </span>
                <span className='w-[25%]'>
                    Покупка
                </span>
                <span className='w-[25%]'>
                    Продажа
                </span>
            </div>
            <div className='flex flex-col mt-[6px]'>
                {isShowList
                    ? (
                        <>
                            <Element />
                            <Element />
                            <Element />
                            <Element />
                            <Element />
                            <Element />
                            <Element />
                            <Element />
                            <Element />
                            <Element />
                            <Element />
                            <Element />
                        </>
                    )
                    : (
                        <>
                            <Element />
                            <Element />
                            <Element />
                            <Element />
                            <Element />
                            <Element />
                        </>
                    )
                }
            </div>
            <button
                onClick={toggleIsShowList}
                className='flex justify-center rounded-[16px] mb-[6px] mt-[8px] font-[550] py-[8px] w-full items-center gap-[8px]'
            >
                {isShowList
                    ? (
                        <>
                            <span>
                                Скрыть все валюты
                            </span>
                            <ChevronUp size={20} />
                        </>
                    )
                    : (
                        <>
                            <span>
                                Показать все валюты
                            </span>
                            <ChevronDown size={20} />
                        </>
                    )
                }
            </button>
        </div>
    )
}


const Element = () => {
    return (
        <div className='flex font-[550] justify-between px-[10px] py-[7px] text-[15px] odd:bg-zinc-100'>
            <div className='flex gap-[8px] items-center w-[50%]'>
                <div className='w-[16px] h-[16px] rounded-full bg-zinc-400' />
                <span className='font-[600]'>
                    RUB
                </span>
            </div>
            <span className='w-[25%]'>
                2.65
            </span>
            <span className='w-[25%]'>
                2.65
            </span>
        </div>
    )
}