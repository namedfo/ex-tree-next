import getBlock from '@/blocks'
import PageLayout from '@/layouts/PageLayout'
import { Infinity } from 'lucide-react'
import { IBlock, IPage } from '../api/page/route'



async function getData(page: string) {
    const res = await fetch(`http://localhost:3000/api/page?name=${page}`, { cache: 'no-store' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}



// export async function generateMetadata(
//     { params }: any
// ): Promise<Metadata> {

//     const { data } = await getData(params.slug)


//     return {
//         title: data?.ceo?.title,
//         description: data?.ceo?.description
//     }
// }



export default async function Page({
    params
}: {
    params: { page: string }
}) {

    const { data }: { data: IPage } = await getData(params.page)


    return (
        <PageLayout>
            {data?.blocks?.map((block: IBlock) => getBlock(block))}
            {/* <Calculator />
            <ProfitableTerms />
            <Banks />
            <Offices />
            <CourseList />
            <Royalty /> */}
            <div className='min-h-[200px]' />
            <div className='min-h-[40px] w-full flex items-center justify-center'>
                <div className='pl-[6px] pb-[6px] flex items-center text-[13px] text-gray-500'>
                    <span className="leading-[12px] font-[500] mr-[5px]">
                        © 2001 -
                    </span>
                    <div className='flex items-center pt-[1px]'>
                        <Infinity strokeWidth={1.8} size={16} />,
                    </div>
                    <span className='ml-[6px] font-[600]'>
                        Ex24.pro
                    </span>
                </div>
            </div>
        </PageLayout>
    )
}