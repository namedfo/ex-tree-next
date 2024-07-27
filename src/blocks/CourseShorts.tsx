interface ICourseShortsProps {
    data: any
}

export default function CourseShorts({ data }: any) {

    console.log(data)


    return (
        <div className='flex gap-[10px] min-h-[60px] overflow-x-auto'>
            {data?.items !== undefined && Object.entries(data?.items)?.map(([key, value]: any) => (
                <Course
                    key={key}
                    currency={key}
                    value={value}
                />
            ))}
        </div>
    )
}


const Course = ({
    currency,
    value
}: any) => {
    return (
        <div className='rounded-[14px] min-w-[130px] flex flex-col bg-white px-[12px] py-[6px]'>
            <span className='font-[600] text-[14px] text-slate-800'>
                {currency}
            </span>
            <div className='flex'>
                <span className='font-[700]'>
                    {value[0]}
                </span>
                <span className='font-[550] px-[10px] text-[#25CB14]'>
                    {value[1]}
                </span>
            </div>
        </div>
    )
}