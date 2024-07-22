import { LockKeyhole } from 'lucide-react'

export default function Title() {
    return (
        <div className='flex flex-col w-full mt-[40px] gap-[8px] items-center'>
            <span className='font-[550] text-[22px]'>
                Обмен валюты №1 на Пхукете
            </span>
            <span className='text-zinc-600 text-center'>
                Единственный лицензированный <br />
                сервис обмена в Таиланде
            </span>
            <div className='bg-white mt-[18px] flex flex-col gap-[14px] rounded-[14px] p-[14px] w-full'>
                <div className='flex items-center py-[2px] gap-[8px] justify-center text-zinc-500'>
                    <LockKeyhole size={18} />
                    <span>
                        Обменять через менеджера
                    </span>
                </div>
                <div className='flex flex-col text-[14px] gap-[10px]'>
                    <div className='flex gap-[10px] justify-between'>
                        <button className='w-[50%] rounded-[8px] py-[12px] bg-[#54C648] text-white'>
                            Обмен через WhatApp
                        </button>
                        <button className='w-[50%] rounded-[8px] py-[12px] bg-[#30A8EF] text-white'>
                            Обмен через Telegram
                        </button>
                    </div>
                    <button
                        className='bg-[#FFD747] text-[15px] py-[12px] rounded-[8px] text-slate-900'
                    >
                        Обмен через сайт
                    </button>
                </div>
            </div>
        </div>
    )
}