'use client'
import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

export const CurrencySelectGive = ({
    select,
    values,
    onSelect
}: any) => {
    const [isShow, setIsShow] = useState(false)

    const toggleIsShow = () => setIsShow((prevIsShow: boolean) => !prevIsShow)


    const ref = useRef<any>(null)


    useOnClickOutside(ref, toggleIsShow)

    return (
        <div
            className={cn(
                'flex flex-col absolute select-none right-[3px] overflow-hidden',
                isShow ? 'top-[4px] z-[11]' : 'z-[10] top-[50%] translate-y-[-50%]'
            )}
        >
            {isShow
                ? (
                    <div
                        ref={ref}
                        className='bg-[#FFD747] shadow-select cursor-pointer rounded-[15px] flex flex-col gap-[6px] w-[80px] py-[5px] min-h-[28px]'
                    >
                        {values?.map((value: any) => (
                            <label
                                key={value.currency}
                                className='flex gap-[6px] py-[5px] justify-start pl-[14px]'
                            >
                                <input
                                    checked={value.currency === select}
                                    onChange={(e: any) => {
                                        onSelect(value)
                                        toggleIsShow()
                                    }}
                                    name="currency"
                                    className='w-[11px]'
                                    type="radio"
                                />
                                <span className='font-[600] text-slate-700 text-[12px]'>
                                    {value?.currency}
                                </span>
                            </label>
                        ))}
                    </div>
                )
                : (
                    <div
                        onClick={() => values?.length > 1 && toggleIsShow()}
                        className='bg-[#FFD747] cursor-pointer rounded-[14px] hover:bg-[#ecc741] flex gap-[6px] items-center justify-center px-[14px] h-[28px]'
                    >
                        <span className='font-[600] text-slate-700 text-[12px]'>
                            {select}
                        </span>
                        {values?.length > 1 && <ChevronDown size={18} />}
                    </div>
                )
            }
        </div>
    )
}

export const CurrencySelectGet = ({
    select,
    values,
    onSelect
}: any) => {
    const [isShow, setIsShow] = useState(false)

    const toggleIsShow = () => setIsShow((prevIsShow: boolean) => !prevIsShow)


    const ref = useRef<any>(null)


    useOnClickOutside(ref, toggleIsShow)

    return (
        <div
            className={cn(
                'flex flex-col absolute select-none right-[3px] overflow-hidden',
                isShow ? 'top-[4px] z-[11]' : 'z-[10] top-[50%] translate-y-[-50%]'
            )}
        >
            {isShow
                ? (
                    <div
                        ref={ref}
                        className='bg-[#FFD747] shadow-select cursor-pointer rounded-[15px] flex flex-col gap-[6px] w-[80px] py-[5px] min-h-[28px]'
                    >
                        {values?.map((value: any) => (
                            <label
                                key={value}
                                className='flex gap-[6px] py-[5px] justify-start pl-[14px]'
                            >
                                <input
                                    checked={value === select}
                                    onChange={(e: any) => {
                                        onSelect({
                                            currency: value,
                                            values: values
                                        })
                                        toggleIsShow()
                                    }}
                                    name="give_currency"
                                    className='w-[11px]'
                                    type="radio"
                                />
                                <span className='font-[600] text-slate-700 text-[12px]'>
                                    {value}
                                </span>
                            </label>
                        ))}
                    </div>
                )
                : (
                    <div
                        onClick={() => values?.length > 1 && toggleIsShow()}
                        className='bg-[#FFD747] cursor-pointer rounded-[14px] hover:bg-[#ecc741] flex gap-[6px] items-center justify-center px-[14px] h-[28px]'
                    >
                        <span className='font-[600] text-slate-700 text-[12px]'>
                            {select}
                        </span>
                        {values?.length > 1 && <ChevronDown size={18} />}
                    </div>
                )
            }
        </div>
    )
}