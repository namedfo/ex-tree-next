import CurrencySelect from './CurrencySelect'

export default function Calculator({
    
}: any) {
    return (
        <div className='flex flex-col mt-[10px] p-[14px] bg-white rounded-[14px]'>
            <div className='flex justify-between'>
                <span className='text-slate-800'>
                    Обменяться прямо сейчас
                </span>
                <div className='flex flex-col items-end'>
                    <span className='font-[550] leading-[20px] text-[17px] text-slate-800'>
                        2.71
                    </span>
                    <span className='text-slate-700 leading-[20px]'>
                        Курс
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-[2px]'>
                <span className='text-[15px] text-slate-600'>
                    Хочу поменять
                </span>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder='Введите сумму..'
                        className='px-[12px] py-[5px] w-full pr-[100px] rounded-[10px] border bg-zinc-50 shadow-sm'
                    />
                    <CurrencySelect />
                </div>
            </div>
            <div className='flex flex-col mt-[14px] gap-[2px]'>
                <span className='text-[15px] text-slate-600'>
                    Получу
                </span>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder='Введите сумму..'
                        className='px-[12px] py-[5px] w-full pr-[100px] rounded-[10px] border bg-zinc-50 shadow-sm'
                    />
                    <div
                        className='bg-[#FFD747] px-[12px] h-[28px] flex items-center rounded-full absolute right-[3px] top-[50%] translate-y-[-50%]'
                    >
                        <span className='font-[550] text-slate-700 text-[12px]'>
                            БАТ
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
