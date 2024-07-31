import getBlock from '@/blocks'
import PageLayout from '@/layouts/PageLayout'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'



async function getData(page: string) {
    const res = await fetch(`https://ex-crm.com/api/landing`, { cache: 'no-store' })

    if (!res.ok) {
        notFound()
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

    const data = await getData(params.page)

    return (
        <PageLayout>
            {data?.blocks?.map((block: any) => getBlock(block))}
        </PageLayout>
    )
}