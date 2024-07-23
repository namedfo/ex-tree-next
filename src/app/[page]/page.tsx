import Banks from '@/blocks/Banks'
import Calculator from '@/blocks/Calculator'
import CourseList from '@/blocks/CourseList'
import CourseShorts from '@/blocks/CourseShorts'
import Offices from '@/blocks/Offices'
import ProfitableTerms from '@/blocks/ProfitableTerms'
import Royalty from '@/blocks/Royalty'
import Title from '@/blocks/Title'
import PageLayout from '@/layouts/PageLayout'
import { Infinity } from 'lucide-react'




export default async function Page() {

    return (
        <PageLayout>
            <CourseShorts />
            <Title />
            <Calculator />
            <ProfitableTerms />
            <Banks />
            <Offices />
            <CourseList />
            <Royalty />
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