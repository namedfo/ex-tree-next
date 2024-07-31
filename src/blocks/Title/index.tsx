export default function Title({
    text
}: any) {
    return (
        <div className='flex flex-col items-center'>
            <span className='font-[550] text-[22px]'>
                {text?.title}
            </span>
            <span className='text-zinc-600 text-center'>
                {text?.subtitle}
            </span>
        </div>
    )
}