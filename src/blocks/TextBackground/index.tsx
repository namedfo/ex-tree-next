

interface IItem {
    text: string
}


interface ITexts {
    title?: string
    subtitles?: string[]
}


interface ITextProps {
    text: ITexts
    data: IItem[] | []
}


export default function TextBackground({
    text,
    data
}: ITextProps) {
    return (
        <div className='flex flex-col bg-white mt-[40px] gap-[10px] items-center p-[16px] rounded-[14px]'>
            <span className='font-[500] mb-[10px] pre-wrap text-center text-[18px]'>
                {text?.title}
            </span>
            {data?.map((el: IItem) => (
                <span className='text-zinc-700'>
                    {el.text}
                </span>
            ))}
        </div>
    )
}