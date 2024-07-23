'use client'
import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

export default function CurrencySelect() {
    const [isShow, setIsShow] = useState(false)

    const toggleIsShow = () => setIsShow((prevIsShow: boolean) => !prevIsShow)


    const ref = useRef<any>(null)


    useOnClickOutside(ref, toggleIsShow)



    return (
        <div
            className={cn(
                'flex flex-col absolute right-[3px] z-[10] overflow-hidden',
                isShow ? 'top-[4px]' : 'top-[50%] translate-y-[-50%]'
            )}
        >
            {isShow
                ? (
                    <div
                        ref={ref}
                        className='bg-[#FFD747] shadow-select cursor-pointer rounded-[15px] flex flex-col gap-[6px] w-[76px] py-[5px] min-h-[28px]'
                    >
                        <label className='flex gap-[6px] py-[5px] pl-[14px]'>
                            <input
                                name="give_currency"
                                className='w-[11px]'
                                type="radio"
                            />
                            <span className='font-[600] text-slate-700 text-[12px]'>
                                USDT
                            </span>
                        </label>
                        <div className='bg-slate-400 h-[1px] w-[70%] mx-auto' />
                        <label className='flex gap-[6px] py-[5px] justify-start pl-[14px]'>
                            <input
                                name="give_currency"
                                className='w-[11px]'
                                type="radio"
                            />
                            <span className='font-[600] text-slate-700 text-[12px]'>
                                RUB
                            </span>
                        </label>
                    </div>
                )
                : (
                    <div
                        onClick={toggleIsShow}
                        className='bg-[#FFD747] cursor-pointer rounded-[14px] hover:bg-[#ecc741] flex gap-[6px] items-center justify-center w-[78px] h-[28px]'
                    >
                        <span className='font-[600] text-slate-700 text-[12px]'>
                            USDT
                        </span>
                        <ChevronDown size={18} />
                    </div>
                )
            }
        </div>
    )
}