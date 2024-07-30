type TItem = {
    icon: string
}


interface IBanksProps {
    text: any
    data: TItem[] | []
}

export default function Banks({
    text,
    data
}: IBanksProps) {
    return (
        <div className='mt-[40px] flex flex-col gap-[10px]'>
            <span className='font-[500] text-[18px]'>
                {text?.title}
            </span>
            <div className='rounded-[14px] py-[16px] px-[10px] bg-white flex justify-around'>
                {data?.map((el: TItem) => (
                    <img
                        src={el.icon}
                        className='rounded-[6px] h-[40px] w-[40px]'
                        alt="image_icon"
                    />
                ))}
            </div>
        </div>
    )
}