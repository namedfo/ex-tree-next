'use client'
import { MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Offices({

}: any) {
    const [isShowList, setIsShowList] = useState(false)


    const toggleIsShowList = () => setIsShowList(prevIsShow => !prevIsShow)


    return (
        <div className='flex flex-col mt-[40px] gap-[10px]'>
            <span className='font-[500] text-[18px]'>
                Адреса офисов
            </span>
            <div className='flex flex-col gap-[10px]'>
                {isShowList
                    ? (
                        <>
                            <Office />
                            <Office />
                            <Office />
                            <Office />
                            <Office />
                            <Office />
                            <Office />
                            <Office />
                        </>
                    )
                    : (
                        <>
                            <Office />
                            <Office />
                        </>
                    )
                }
            </div>
            <button
                onClick={toggleIsShowList}
                className='bg-white rounded-[14px] py-[10px] flex justify-center'
            >
                {isShowList
                    ? 'Скрыть офисы'
                    : 'Показать все офисы'
                }
            </button>
        </div>
    )
}


const Office = () => {
    return (
        <div className='flex flex-col rounded-[14px] p-[12px] bg-white'>
            <div className='h-[120px] bg-zinc-700 rounded-[10px]'>

            </div>
            <div className='flex flex-col pt-[10px] gap-[6px]'>
                <span className='font-[500] text-[17px]'>
                    Пункт обмена валют на Раваи
                </span>
                <span>
                    c 10:00 до 20:00, Без выходных
                </span>
                <div className='flex items-center mb-[4px]'>
                    <div
                        style={{
                            background:
                                // office?.work_time?.status_type === 'closed'
                                // ? 'red'
                                '#48CF38',
                        }}
                        className='rounded-full shadow-status h-[8px] w-[8px]'
                    />
                    <span className='text-[15px] dark:text-[#e0e0e0] leading-[20px] ml-[6px]'>
                        {/* {office?.work_time?.status} */}
                        Сейчас открыто
                    </span>
                </div>
            </div>
            <div className='border-t mt-[10px] pt-[10px] flex flex-col'>
                <span>
                    Адресс
                </span>
                <button className='flex items-center gap-[8px] justify-center py-[8px] bg-zinc-100 rounded-[10px]'>
                    <MapPin size={19} />
                    <span>
                        Построить маршрут
                    </span>
                </button>
            </div>
        </div>
    )
}