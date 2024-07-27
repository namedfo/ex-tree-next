import cn from 'clsx'


interface IData {
    isBg?: boolean
}


interface ITexts {
    title?: string
    subtitles?: string[]
}


interface ITextProps {
    texts: ITexts
    data: IData
}


export default function Text({
    texts,
    data
}: ITextProps) {
    return (
        <div className={cn(
            'flex flex-col mt-[40px] gap-[10px] items-center p-[16px] rounded-[14px]',
            data?.isBg ? 'bg-white' : ''
        )}>
            <span className='font-[500] mb-[10px] pre-wrap text-center text-[18px]'>
                {texts?.title}
            </span>
            {texts?.subtitles?.map((subtitle: string) => (
                <span className='text-zinc-700'>
                    {subtitle}
                </span>
            ))}
        </div>
    )
}