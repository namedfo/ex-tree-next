'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function Faq({
    data,
    text,
    property
}: any) {

    if (!text || !data) return null

    console.log(property)

    return (
        <div className='flex flex-col pt-[40px] pb-[30px]'>
            <span className='font-[500] text-[18px]'>
                {text.title}
            </span>
            {data?.map((item: any, index: number) => (
                <FaqItem
                    key={item.title}
                    initShow={index + 1 <= property?.max_item_opened}
                    item={item}
                />
            ))}
        </div>
    )
}


const FaqItem = ({ item, initShow }: any) => {
    const [isShow, setIsShow] = useState(initShow)

    return (
        <div className='bg-white rounded-[14px] p-[14px] mt-[8px] flex flex-col'>
            <div
                onClick={() => setIsShow((prevIsShow: boolean) => !prevIsShow)}
                className='flex cursor-pointer items-center justify-between'
            >
                <span className='flex-1 flex font-[550]'>{item.title}</span>
                <div className='w-[30px] flex justify-start'>
                    {isShow ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
            </div>
            {isShow && (
                <p className='leading-[22px] pt-[10px] border-t mt-[10px]'>
                    {item.content}
                </p>
            )}
        </div>
    )
}