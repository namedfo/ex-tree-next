import Client from './Client'
import Server from './Server'




export default function Offices({
    data,
    text,
    property
}: any) {


    return (
        <div className='flex flex-col mt-[40px] gap-[10px]'>
            <span className='font-[500] text-[18px]'>
                Адреса офисов
            </span>
            <Client
                all={(
                    <div className='flex flex-col gap-[20px]'>
                        {data?.map((item: any) => (
                            <Server key={item.id} {...item} />
                        ))}
                    </div>
                )}
                small={(
                    <div className='flex flex-col gap-[20px]'>
                        {data?.slice(0, property?.max_office_show ?? 3).map((item: any) => (
                            <Server key={item.id} {...item} />
                        ))}
                    </div>
                )}
            />
            {/* <div className='flex flex-col gap-[10px]'>
                {data?.map((office: TOffice) => (
                    <Office
                        key={office.id}
                        {...office}
                    />
                ))}
            </div>
            <button
                onClick={toggleIsShowList}
                className='bg-white rounded-[14px] py-[10px] flex justify-center'
            >
                {isShowList
                    ? 'Скрыть офисы'
                    : 'Показать все офисы'
                }
            </button> */}
        </div>
    )
}
