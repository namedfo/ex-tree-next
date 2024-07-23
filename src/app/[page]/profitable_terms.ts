import { IBlock } from '../api/page/route'

const data = null



export interface IProfitableTermsTexts {
    title: string
}


const texts: IProfitableTermsTexts = {
    title: 'Выгодные условия'
}


export const profitable_terms: IBlock = {
    name: 'profitable_terms',
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


