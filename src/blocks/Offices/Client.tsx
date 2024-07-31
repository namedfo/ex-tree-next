'use client'
import { FC, ReactNode, useState } from 'react'

interface ClientProps {
    all: ReactNode
    small: ReactNode
}

const Client: FC<ClientProps> = ({ all, small }) => {
    const [isShowMore, setIsShowMore] = useState(false)

    const onToggle = () => setIsShowMore(prev => !prev)

    return (
        <div className='flex flex-col'>
            {isShowMore ? all : small}
            <button
                onClick={onToggle}
                className='flex justify-center rounded-[16px] mb-[6px] mt-[8px] font-[550] py-[8px] w-full items-center gap-[8px]'
            >
                {isShowMore
                    ? (
                        <div className='bg-white w-full rounded-[12px] py-[8px]'>
                            <span>
                                Скрыть офисы
                            </span>
                        </div>
                    )
                    : (
                        <div className='bg-white w-full rounded-[12px] py-[8px]'>
                            <span>
                                Показать все офисы
                            </span>
                        </div>
                    )
                }
            </button>
        </div>
    )
}

export default Client