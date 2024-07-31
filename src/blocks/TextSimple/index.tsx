

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


export default function TextSimple({
    text,
    data
}: ITextProps) {
    return (
        <div className='flex flex-col mt-[40px] gap-[10px] p-[16px] rounded-[14px]'>
            <span className='font-[500] mb-[10px] pre-wrap text-[18px]'>
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