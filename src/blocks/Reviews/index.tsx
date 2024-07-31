import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'

async function getReviews(url: string) {
    const res = await fetch(url, { cache: 'no-store' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    // console.log(res.json())

    return res.json()
}

export default async function Reviews({
    text,
    data
}: any) {

    if (!text || !data) return null

    const reviews = await getReviews(data.url)


    return (
        <div className='flex flex-col gap-[10px]'>
            <span className='font-[500] text-[18px]'>
                {text?.title}
            </span>
            <div className='mt-[4px] flex overflow-x-auto'>
                {reviews?.result?.data?.map((feedback: any) => (
                    <Feedback key={feedback.text} feedback={feedback} />
                ))}
            </div>
        </div>
    )
}



function getRandomColor(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}
const colors = ['#7B1FA2', '#689F38', '#0097A7', '#0288D1', '#F4511E']


const Feedback = ({
    feedback
}: any) => {


    return (
        <div
            style={{ minWidth: '300px' }}
            className='h-[220px] bg-white ml-[16px] first:ml-[0px] flex flex-col justify-between rounded-[14px] shadow-sm p-[16px]'
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
                                backgroundColor: getRandomColor(colors),
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
                {/* <ClientRate
                    defaultValue={feedback?.rating}
                    disabled={true}
                    style={{ fontSize: 16 }}
                    character={<i className='anticon anticon-star' />}
                /> */}
            </div>
            <div className='h-[110px] overflow-hidden w-full'>
                <p className='text-[16px] truncate-text leading-[20px] w-full pb-[10px] font-[400] mt-[10px]'>
                    {feedback?.text}
                </p>
            </div>
            <div className='flex items-end h-[40px] justify-between'>
                <span className='opacity-[0.6] text-[16px]'>
                    {formatDistanceToNow(
                        new Date(feedback.published_at * 1000),
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
    )
}