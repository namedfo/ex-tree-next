import { IBlock } from '@/app/api/page/route'
import { ReactNode } from 'react'
import Banks from './Banks'
import Calculator from './Calculator'
import CourseShorts from './CourseShorts'
import Offices from './Offices'
import ProfitableTerms from './ProfitableTerms'
import Royalty from './Royalty'
import Title from './Title'



const getBlock = (data: IBlock): ReactNode | null => {
    const blocks: {
        [key: string]: ReactNode
    } = {
        course_shorts: <CourseShorts {...data.content} />,
        title: <Title {...data.content} />,
        calculator: <Calculator {...data.content} />,
        profitable_terms: <ProfitableTerms {...data.content} />,
        banks: <Banks {...data.content} />,
        offices: <Offices {...data.content} />,
        royalty: <Royalty {...data.content} />
    }
    return blocks[data.name] ?? null
}


export default getBlock