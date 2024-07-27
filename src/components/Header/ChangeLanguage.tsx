'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

export default function ChangeLanguage({ languages }: any) {
    const [language, setLanguage] = useState('-')

    useEffect(() => {
        const initialLanguage = (['en', 'ru', 'cn'].includes(navigator.language.slice(0, 2)))
            ? navigator.language.slice(0, 2)
            : 'en'

        setLanguage(initialLanguage)
    }, [])

    const [isShow, setIsShow] = useState(false)

    const ref = useRef<any>(null)

    useOnClickOutside(ref, () => setIsShow(false))

    return (
        <div ref={ref} className='relative'>
            <button
                onClick={() => setIsShow((prevIsShow: boolean) => !prevIsShow)}
                className='h-[40px] items-center justify-center rounded-[16px] flex'
            >
                <div className='mr-[10px]'>
                    {language === 'en' && (
                        <img
                            alt='United States'
                            className='w-[20px] border border-zinc-300 rounded-[2px]'
                            src='http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg'
                        />
                    )}
                    {language === 'ru' && (
                        <img
                            alt='United States'
                            className='w-[20px] border border-zinc-300 rounded-[2px]'
                            src='http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg'
                        />
                    )}
                    {language === 'cn' && (
                        <img
                            alt='United States'
                            className='w-[20px] border border-zinc-300 rounded-[2px]'
                            src='http://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg'
                        />
                    )}
                </div>
                <span className='font-[550] text-[14px]'>{language.toUpperCase()}</span>
                <div className='ml-[6px]'>
                    {isShow ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
            </button>
            {isShow && (
                <div className='flex p-[2px] shadow-select border rounded-[10px] flex-col w-[200px] absolute right-0 top-[50px] bg-white'>
                    {/* {languages?.map(
                        (language: {
                            name: string
                            short_name: string
                            icon: string
                            code: string
                        }) => (
                            <button
                                key={language.code}
                                onClick={() => setLang(language.code)}
                                className={`px-[14px] flex items-center py-[8px] rounded-[12px] font-[500] ${lang === language.code ? 'bg-zinc-200' : ''
                                    }`}
                            >
                                <img
                                    alt={language.code}
                                    className='w-[24px] mr-[12px] rounded-[2px]'
                                    src={language.icon}
                                />
                                <span>{language.name}</span>
                            </button>
                        )
                    )} */}
                </div>
            )}
        </div>
    )
}

