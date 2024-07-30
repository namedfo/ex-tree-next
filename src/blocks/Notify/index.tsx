
export default function Notify({
    data,
    texts
}: any) {
    return (
        <div className='flex flex-col rounded-[14px] bg-white p-[14px]'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <img src={data.imageUrl} className='h-[32px] min-w-[32px]' alt="" />
                    <span className='font-[450]'>
                        {data.title}
                    </span>
                </div>
                {/* <button className='text-zinc-600'>
                    <X size={20} />
                </button> */}
            </div>
            <p className='leading-[20px]'>
                {data.text}
            </p>
        </div >
    )
}