'use client'
import { MapPin } from 'lucide-react'
import { useState } from 'react'



type TOffice = {
    id: number
    title: string
    photo: string
    work_time: {
        between: string
        status: string
        status_type: string
    }
    address: string
}


export default function Offices({
    data,
    text
}: any) {
    const [isShowList, setIsShowList] = useState(false)


    const toggleIsShowList = () => setIsShowList(prevIsShow => !prevIsShow)


    return (
        <div className='flex flex-col mt-[40px] gap-[10px]'>
            <span className='font-[500] text-[18px]'>
                Адреса офисов
            </span>
            <div className='flex flex-col gap-[10px]'>
                {data?.map((office: TOffice) => (
                    <Office
                        key={office.id}
                        {...office}
                    />
                ))}
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


const Office = ({
    title,
    photo,
    address,
    work_time
}: TOffice) => {
    return (
        <div className='flex flex-col rounded-[14px] p-[12px] bg-white'>
            <img
                src={photo}
                className='h-[160px] rounded-[10px] object-cover'
            />
            <div className='flex flex-col pt-[10px] gap-[6px]'>
                <span className='font-[500] text-[17px]'>
                    {title}
                </span>
                <span>
                    {work_time.between}
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
                        {work_time.status}
                    </span>
                </div>
            </div>
            <div className='border-t mt-[10px] pt-[10px] flex flex-col'>
                <span>
                    {address}
                </span>
                <button className='flex items-center mt-[10px] gap-[8px] justify-center py-[8px] bg-zinc-100 rounded-[10px]'>
                    <MapPin size={19} />
                    <span>
                        Построить маршрут
                    </span>
                </button>
            </div>
        </div>
    )
}