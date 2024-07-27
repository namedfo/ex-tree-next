import { ReactNode } from 'react'
import Banks from './Banks'
import Calculator from './Calculator'
import CardWithImage from './CardWithImage'
import CourseList from './CourseList'
import CourseShorts from './CourseShorts'
import Faq from './Faq'
import Map from './Map'
import Notify from './Notify'
import Offices from './Offices'
import ProfitableTerms from './ProfitableTerms'
import Reviews from './Reviews'
import Royalty from './Royalty'
import Text from './Text'
import Title from './Title'



const getBlock = (data: any): ReactNode | null => {
    return <Block {...data} />
}


const Block = ({
    data,
    texts,
    styles,
    name
}: any) => {
    const blocks: {
        [key: string]: ReactNode
    } = {
        course_shorts: <CourseShorts {...{ data, texts }} />,
        title: <Title {...{ data, texts }} />,
        calculator: <Calculator {...{ data, texts }} />,
        profitable_terms: <ProfitableTerms {...{ data, texts }} />,
        banks: <Banks {...{ data, texts }} />,
        offices: <Offices {...{ data, texts }} />,
        royalty: <Royalty {...{ data, texts }} />,
        reviews: <Reviews {...{ data, texts }} />,
        course_list: <CourseList {...{ data, texts }} />,
        faq: <Faq {...{ data, texts }} />,
        text: <Text {...{ data, texts }} />,
        card_with_image: <CardWithImage {...{ data, texts }} />,
        notify: <Notify {...{ data, texts }} />,
        map: <Map {...{ data, texts }} />
    }


    return (
        <div style={{
            marginTop: styles?.marginTop,
            marginBottom: styles?.marginBottom
        }}>
            {blocks[name]}
        </div>
    )
}


export default getBlock