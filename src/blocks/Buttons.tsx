import cn from 'clsx'
import { LockKeyhole } from 'lucide-react'




export interface ITitleTexts {
    title: string
}



interface IBtn {
    title: string
    backgroundColor: string
    link: string
    icon: string
}


interface ITitle {
    text: ITitleTexts
    data: IBtn[]
}



export default function Buttons({
    text,
    data
}: ITitle) {

    if (!text) return null


    return (
        <div className='flex flex-col w-full mt-[40px] gap-[8px] items-center'>
            {/* <span className='font-[550] text-[22px]'>
                {texts?.title}
            </span>
            <span className='text-zinc-600 text-center'>
                {texts?.subtitle}
            </span> */}
            <div className='bg-white mt-[18px] flex flex-col gap-[14px] rounded-[14px] p-[14px] w-full'>
                <div className='flex items-center py-[2px] gap-[8px] justify-center text-zinc-500'>
                    <LockKeyhole size={18} />
                    <span>
                        {text?.title}
                    </span>
                </div>
                <div className='flex flex-wrap text-[14px] gap-[10px]'>
                    {data?.map((el: IBtn, index: number) => (
                        <button
                            style={{
                                backgroundColor: el.backgroundColor,

                                width: (data?.length === index + 1 && data?.length % 2 !== 0) ? '100%' : 'calc((100% / 2) - 5px)'

                            }}
                            className={cn(
                                'rounded-[8px] py-[12px] flex justify-center items-center gap-[10px] text-white',
                                // (data?.length === index + 1 && data?.length % 2 !== 0) ? 'w-full' : 'w-[49%]'
                            )}
                        >
                            <img
                                src={el.icon}
                                className='h-[30px]'
                            />
                            <span>
                                {el.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}