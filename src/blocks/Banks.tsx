import { IBanksTexts } from '@/app/[page]/banks'

interface IBanksProps {
    texts: IBanksTexts
}

export default function Banks({
    texts
}: IBanksProps) {
    return (
        <div className='mt-[40px] flex flex-col gap-[10px]'>
            <span className='font-[500]'>
                {texts.title}
            </span>
            <div className='rounded-[14px] py-[16px] px-[10px] bg-white flex justify-around'>
                <div className='h-[32px] w-[32px] bg-zinc-600 rounded-[6px]' />
                <div className='h-[32px] w-[32px] bg-zinc-600 rounded-[6px]' />
                <div className='h-[32px] w-[32px] bg-zinc-600 rounded-[6px]' />
                <div className='h-[32px] w-[32px] bg-zinc-600 rounded-[6px]' />
                <div className='h-[32px] w-[32px] bg-zinc-600 rounded-[6px]' />
            </div>
        </div>
    )
}