import getBlock from '@/blocks'
import PageLayout from '@/layouts/PageLayout'
import { Metadata } from 'next'



async function getData(page: string) {
    const res = await fetch(`http://localhost:3000/api/page?name=${page}`, { cache: 'no-store' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    // console.log(res.json())

    return res.json()
}



export async function generateMetadata(
    { params }: any
): Promise<Metadata> {

    const data = await getData(params.slug)



    return {
        title: data?.ceo?.title,
        description: data?.ceo?.description
    }
}



export default async function Page({
    params
}: {
    params: { page: string }
}) {

    const { data } = await getData(params.page)

    console.log(data)

    return (
        <PageLayout>
            {data?.blocks?.map((block: any) => getBlock(block))}
        </PageLayout>
    )
}