import Banks from '@/blocks/Banks'
import Calculator from '@/blocks/Calculator'
import CourseList from '@/blocks/CourseList'
import Offices from '@/blocks/Offices'
import ProfitableTerms from '@/blocks/ProfitableTerms'
import Royalty from '@/blocks/Royalty'
import Title from '@/blocks/Title'
import PageLayout from '@/layouts/PageLayout'



export default async function Page() {

    return (
        <PageLayout>
            <Title />
            <Calculator />
            <ProfitableTerms />
            <Banks />
            <Offices />
            <CourseList />
            <Royalty />
        </PageLayout>
    )
}