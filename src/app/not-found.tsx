export default function NotFound() {
    return (
        <div className='flex flex-col h-full items-center justify-center gap-[10px]'>
            <span className='text-[40px] font-[500] px-[20px] py-[10px] rounded-[10px] bg-zinc-100'>404 Not Found</span>
            <p>Could not find requested resource</p>
        </div>
    )
}