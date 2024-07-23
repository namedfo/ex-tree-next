import { IBlock } from '../api/page/route'

const data: {
    [key: string]: [number, string]
} = {
    'USD': [89.54, '+0.75'],
    'RUR': [76.54, '+0.1'],
    'THB': [12.54, '-5'],
    'EUR': [102.54, '+1']
}


const texts = null


export const course_shorts: IBlock = {
    name: 'course_shorts',
    content: {
        type: 'result',
        data,
        texts,
        styles: {
            marginTop: 0,
            marginBottom: 0
        }
    }
}


