import { IRoyaltyTexts } from '@/app/[page]/royalty'

interface IRoyaltyProps {
    texts: IRoyaltyTexts
}

export default function Royalty({
    texts
}: IRoyaltyProps) {
    return (
        <div className='flex flex-col mt-[40px] gap-[10px] items-center p-[16px] bg-white rounded-[14px]'>
            <span className='font-[500] mb-[10px] text-center text-[18px]'>
                {texts.title}
            </span>
            <span className='text-zinc-700'>
                {texts.subtitles.one}
            </span>
            <span className='text-zinc-700'>
                {texts.subtitles.two}
            </span>
            <span className='text-zinc-700'>
                {texts.subtitles.three}
            </span>
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