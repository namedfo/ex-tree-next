'use client'
import Image from 'next/image'

interface IBanksProps {
    texts: any
    data: any
}

export default function Banks({
    texts,
    data
}: IBanksProps) {
    return (
        <div className='mt-[40px] flex flex-col gap-[10px]'>
            <span className='font-[500] text-[18px]'>
                {texts?.title}
            </span>
            <div className='rounded-[14px] py-[16px] px-[10px] bg-white flex justify-around'>
                {data?.icons?.map((icon: string) => (
                    <div className='h-[40px] w-[40px] relative'>
                        <Image
                            src={icon}
                            fill
                            className='rounded-[6px]'
                            alt="image_icon"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}