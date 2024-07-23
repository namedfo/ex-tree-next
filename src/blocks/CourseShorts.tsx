export default function CourseShorts({ data }: any) {
    return (
        <div className='flex gap-[10px] min-h-[60px] overflow-x-auto'>
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
        </div>
    )
}


const Course = () => {
    return (
        <div className='rounded-[14px] min-w-[130px] flex flex-col bg-white px-[12px] py-[6px]'>
            <span className='font-[600] text-[14px] text-slate-800'>
                USD
            </span>
            <div className='flex'>
                <span className='font-[700]'>
                    95.45
                </span>
                <span className='font-[550] px-[10px] text-[#25CB14]'>
                    +0.75
                </span>
            </div>
        </div>
    )
}