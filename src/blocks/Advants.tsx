import cn from 'clsx'

interface IItem {
    icon: string
    text: string
}


interface IAdvantsProps {
    text: any
    data: IItem[] | []
}


export default function Advants({
    text,
    data
}: IAdvantsProps) {
    return (
        <div className='flex flex-col mt-[40px] gap-[12px]'>
            <span className='font-[500] text-[18px]'>
                {text?.title}
            </span>
            <div className='flex flex-wrap text-[14px] gap-[10px]'>
                {data?.map((el: IItem, index: number) => (
                    <div
                        style={{
                            width: (data?.length === index + 1 && data?.length % 2 !== 0) ? '100%' : 'calc((100% / 2) - 5px)'
                        }}
                        className={cn(
                            'rounded-[8px] p-[12px] flex flex-col w-full justify-center items-start gap-[10px] bg-white text-slate-800',
                            // (data?.length === index + 1 && data?.length % 2 !== 0) ? 'w-full' : 'w-[49%]'
                        )}
                    >
                        <img
                            src={el.icon}
                            className='h-[40px]'
                        />
                        <span>
                            {el.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}


const Element = () => {
    return (
        <div className='h-[100px] flex items-center justify-center bg-white rounded-[14px]'>
            <span>
                preview content
            </span>
        </div>
    )
}