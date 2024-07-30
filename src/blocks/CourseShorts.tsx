import cn from 'clsx'

interface IRate {
    title: string
    rate: number
    percent: number
    color: string
}


interface ICourseShortsProps {
    data: {
        items: IRate[] | []
    }
}




export default function CourseShorts({ data }: ICourseShortsProps) {


    return (
        <div className='flex gap-[10px] min-h-[60px] overflow-x-auto'>
            {data?.items?.length > 0 && data?.items?.map((item: IRate) => (
                <Course
                    key={item.title}
                    {...item}
                />
            ))}
        </div>
    )
}


const Course = ({
    title,
    rate,
    percent,
    color
}: IRate) => {
    return (
        <div className='rounded-[14px] min-w-[130px] flex flex-col bg-white px-[12px] py-[6px]'>
            <span className='font-[600] text-[14px] text-slate-800'>
                {title}
            </span>
            <div className='flex'>
                <span className='font-[700]'>
                    {rate}
                </span>
                <span
                    style={{
                        color
                    }}
                    className={cn(
                        'font-[550] pl-[14px] pr-[10px]',
                    )}>
                    {percent}%
                </span>
            </div>
        </div>
    )
}