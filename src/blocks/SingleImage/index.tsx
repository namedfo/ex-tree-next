

export default function Advants({
    text,
    data
}: any) {
    return (
        <div className='flex flex-col mt-[40px] gap-[12px]'>
            <span className='font-[500] text-[18px]'>
                {text?.title}
            </span>
            <img
                src={data.url}
                className='rounded-[12px]'
                alt=""
            />
        </div>
    )
}
