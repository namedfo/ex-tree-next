'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export default function Faq({
    data,
    texts
}: any) {

    if (!texts || !data) return null

    return (
        <div className='flex flex-col pt-[40px] pb-[30px]'>
            <span className='font-[500] text-[18px]'>
                {texts.title}
            </span>
            {data?.items?.map((item: any, index: number) => (
                <FaqItem
                    key={item.title}
                    item={item}
                    initIsShow={index + 1 <= 3}
                />
            ))}
        </div>
    )
}


const FaqItem = ({ item, initIsShow }: any) => {
    const [isShow, setIsShow] = useState(initIsShow)

    return (
        <div className='bg-white rounded-[14px] p-[14px] mt-[8px] flex flex-col'>
            <div
                onClick={() => setIsShow((prevIsShow: boolean) => !prevIsShow)}
                className='flex cursor-pointer items-center justify-between'
            >
                <span className='flex-1 flex font-[550] dark:text-[#e0e0e0]'>{item.title}</span>
                <div className='w-[30px] flex justify-start'>
                    {isShow ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
            </div>
            {isShow && (
                <p className='leading-[22px] dark:text-[#e0e0e0] pt-[10px] border-t mt-[10px]'>
                    {item.content}
                </p>
            )}
        </div>
    )
}