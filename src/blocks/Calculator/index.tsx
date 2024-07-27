import { useEffect, useState } from 'react'
import { CurrencySelectGet, CurrencySelectGive } from './CurrencySelect'
import Inputs from './Inputs'

export default function Calculator({
    texts,
    data
}: any) {

    if (!data || !texts) return null



    return (
        <div className='flex flex-col mt-[10px] p-[14px] bg-white rounded-[14px]'>
            <div className='flex justify-between'>
                <span className='text-slate-800'>
                    {texts?.title}
                </span>
                <div className='flex flex-col items-end'>
                    <span className='font-[550] leading-[20px] text-[17px] text-slate-800'>
                        {texts?.rate}
                    </span>
                    <span className='text-slate-700 leading-[20px]'>
                        {texts?.rate_title}
                    </span>
                </div>
            </div>
            <Inputs 
                texts={texts}
                data={data}
            />
        </div>
    )
}
