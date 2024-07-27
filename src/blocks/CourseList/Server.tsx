'use server'


export default async function Server({
    currency,
    buy,
    sell
}: any) {
    return (
        <div className='flex font-[550] justify-between px-[10px] py-[7px] text-[15px] odd:bg-zinc-100'>
            <div className='flex gap-[8px] items-center w-[50%]'>
                <div className='w-[16px] h-[16px] rounded-full bg-zinc-400' />
                <span className='font-[600]'>
                    {currency}
                </span>
            </div>
            <span className='w-[25%]'>
                {buy}
            </span>
            <span className='w-[25%]'>
                {sell}
            </span>
        </div>
    )
}