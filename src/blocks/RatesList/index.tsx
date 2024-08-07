import Client from './Client'
import Server from './Server'


async function getRates(url: string) {
    const res = await fetch(url, { cache: 'no-store' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    // console.log(res.json())

    return res.json()
}


export default async function RatesList({
    text,
    data,
    property
}: any) {

    const { rates } = await getRates(data.url)

    return (
        <div className='flex flex-col mt-[40px] pt-[12px] bg-white rounded-[14px]'>
            <div className='flex font-[600]  px-[12px] text-zinc-500 text-[14px]'>
                <span className='w-[50%]'>
                    {text?.currency}
                </span>
                <span className='w-[25%]'>
                    {text?.buy}
                </span>
                <span className='w-[25%]'>
                    {text?.sell}
                </span>
            </div>
            <div className='flex flex-col mt-[6px]'>
                <Client
                    all={(
                        <>
                            {Object.entries(rates)?.map(([key, item]: any) => (
                                <Server key={key} {...{ ...item, currency: key }} />
                            ))}
                        </>
                    )}
                    small={(
                        <>
                            {Object.entries(rates)?.slice(0, property?.max_rate_show ?? 3).map(([key, item]: any) => (
                                <Server key={key} {...{ ...item, currency: key }} />
                            ))}
                        </>
                    )}
                />
            </div>
        </div>
    )
}


const Element = () => {
    return (
        <div className='flex font-[550] justify-between px-[10px] py-[7px] text-[15px] odd:bg-zinc-100'>
            <div className='flex gap-[8px] items-center w-[50%]'>
                <div className='w-[16px] h-[16px] rounded-full bg-zinc-400' />
                <span className='font-[600]'>
                    RUB
                </span>
            </div>
            <span className='w-[25%]'>
                2.65
            </span>
            <span className='w-[25%]'>
                2.65
            </span>
        </div>
    )
}