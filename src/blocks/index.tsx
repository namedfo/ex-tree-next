import { ReactNode } from 'react'
import Advants from './Advants'
import Banks from './Banks'
import Buttons from './Buttons'
import CourseShorts from './CourseShorts'
import Faq from './Faq'
import Notify from './Notify'
import Offices from './Offices'
import RatesList from './RatesList'
import Reviews from './Reviews'
import SingleImage from './SingleImage'
import TextBackground from './TextBackground'
import TextSimple from './TextSimple'
import Title from './Title'



const getBlock = (data: any): ReactNode | null => {
    return <Block key={data.id} {...data} />
}


const Block = ({
    data,
    text,
    styles,
    property,
    name
}: any) => {
    const blocks: {
        [key: string]: ReactNode
    } = {
        course_shorts: <CourseShorts {...{ data, text }} />,
        buttons: <Buttons {...{ data, text }} />,
        "content-block-width-2": <Advants {...{ data, text }} />,
        "icons-grid": <Banks {...{ data, text }} />,
        "text-block-simple": <TextSimple {...{ data, text }} />,
        "text-block-background": <TextBackground {...{ data, text }} />,
        "text-with-image": <Notify {...{ data, text }} />,
        faq: <Faq {...{ data, text, property }} />,
        image: <SingleImage {...{ data, text }} />,
        "reviews-fetch": <Reviews {...{ data, text }} />,
        offices: <Offices {...{ data, text, property }} />,
        "exchange-rates": <RatesList {...{ data, text, property }} />,
        title: <Title {...{ data, text, property }} />
        // calculator: <Calculator {...{ data, text }} />,
        // profitable_terms: <ProfitableTerms {...{ data, text }} />,
        // banks: <Banks {...{ data, text }} />,
        // offices: <Offices {...{ data, text }} />,
        // royalty: <Royalty {...{ data, text }} />,
        // reviews: <Reviews {...{ data, text }} />,
        // course_list: <CourseList {...{ data, text }} />,
        // faq: <Faq {...{ data, texts }} />,
        // text: <Text {...{ data, texts }} />,
        // card_with_image: <CardWithImage {...{ data, text }} />,
        // notify: <Notify {...{ data, text }} />,
        // map: <Map {...{ data, text }} />
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