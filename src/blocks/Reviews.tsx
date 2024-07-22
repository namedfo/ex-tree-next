import { formatDistanceToNow } from 'date-fns'
import ru from 'date-fns/locale/ru'
import Rate from 'rc-rate'

export default function Reviews() {
    return (
        <div className='flex flex-col gap-[10px]'>
            <span className='font-[500]'>
                Отзывы
            </span>
            <div className='mt-[15px] flex overflow-x-auto'>
                {[{}].map((feedback: any) => (
                    <div
                        style={{ minWidth: '300px' }}
                        key={feedback?.text}
                        className='h-[220px] bg-white ml-[16px] first:ml-[0px] flex flex-col justify-between rounded-[26px] shadow-sm p-[16px]'
                    >
                        <div className='flex h-[36px] justify-between'>
                            <div className='flex w-[50%] items-center'>
                                {feedback?.reviewer_picture_url ? (
                                    <img
                                        src={feedback?.reviewer_picture_url}
                                        className='h-[30px] w-[30px] bg-transparent rounded-full'
                                        alt='logo'
                                    />
                                ) : (
                                    <div
                                        style={{
                                            // backgroundColor: getRandomColor(colors),
                                        }}
                                        className='h-[30px] w-[30px] flex items-center font-[700] text-[20px] text-white justify-center bg-transparent rounded-full'
                                    >
                                        {feedback?.reviewer_name?.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <div className='flex flex-col pl-[12px]'>
                                    <span className='text-[16px] font-[600] leading-[16px]'>
                                        {feedback?.reviewer_name}
                                    </span>

                                </div>
                            </div>
                            <Rate
                                defaultValue={feedback?.rating}
                                disabled
                                style={{ fontSize: 16 }}
                                character={<i className='anticon anticon-star' />}
                            />
                        </div>
                        <div className='h-[110px] overflow-hidden w-full'>
                            <p className='text-[16px] truncate-text leading-[20px] w-full pb-[10px] font-[400] mt-[10px]'>
                                {feedback?.text}
                            </p>
                        </div>
                        <div className='flex items-end h-[40px] justify-between'>
                            <span className='opacity-[0.6] text-[16px]'>
                                {formatDistanceToNow(
                                    new Date(feedback?.published_at * 1000),
                                    { locale: ru, addSuffix: true }
                                )}
                            </span>
                            <a
                                className='text-indigo-600 text-[20px]'
                                target='_blank'
                                href={feedback?.url}
                            >
                                {feedback?.supplier.charAt(0).toUpperCase() +
                                    feedback?.supplier.slice(1)}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}