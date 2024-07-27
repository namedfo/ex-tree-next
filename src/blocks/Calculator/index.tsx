'use client'
import { useEffect, useState } from 'react'
import { CurrencySelectGet, CurrencySelectGive } from './CurrencySelect'

export default function Calculator({
    texts,
    data
}: any) {

    if (!data || !texts) return null

    const [give, setGive] = useState<any>()
    const [get, setGet] = useState<any>()


    useEffect(() => {
        const select = data.give[0]
        setGive(select)
        setGet({ currency: give?.values[0], values: give?.values ?? [] })
    }, [])


    useEffect(() => {
        if (give) {
            setGet({ currency: give?.values[0], values: give?.values ?? [] })
        }
    }, [give])


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
            <div className='flex flex-col gap-[2px]'>
                <span className='text-[15px] text-slate-600'>
                    {texts?.give}
                </span>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder={texts?.placeholder}
                        className='px-[12px] py-[5px] w-full pr-[100px] rounded-[10px] border bg-zinc-50 shadow-sm'
                    />
                    <CurrencySelectGive
                        select={give?.currency}
                        values={data?.give}
                        onSelect={setGive}
                    />
                </div>
            </div>
            <div className='flex flex-col mt-[14px] gap-[2px]'>
                <span className='text-[15px] text-slate-600'>
                    {texts?.get}
                </span>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder={texts?.placeholder}
                        className='px-[12px] py-[5px] w-full pr-[100px] rounded-[10px] border bg-zinc-50 shadow-sm'
                    />
                    <CurrencySelectGet
                        select={get?.currency}
                        values={get?.values}
                        onSelect={setGet}
                    />
                </div>
            </div>
        </div>
    )
}
