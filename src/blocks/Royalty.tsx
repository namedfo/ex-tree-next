

interface IRoyaltyProps {
    texts: any
}

export default function Royalty({
    texts
}: IRoyaltyProps) {

    if (!texts) return null

    return (
        <div className='flex flex-col gap-[10px] items-center p-[16px] bg-white rounded-[14px]'>
            <span className='font-[500] mb-[10px] pre-wrap text-center text-[18px]'>
                {texts.title}
            </span>
            {texts.subtitles?.map((subtitle: string) => (
                <span className='text-zinc-700'>
                    {subtitle}
                </span>
            ))}
            <button
                className='bg-[#FFDA3A] hover:opacity-[0.9] duration-200 mt-[20px] w-full py-[10px] rounded-[12px]'
            >
                {texts.btn_connect}
            </button>
            <div>

            </div>
        </div>
    )
}