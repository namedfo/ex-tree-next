import { IBlock } from '../api/page/route'

const data = null



export interface IBanksTexts {
    title: string
}

const texts: IBanksTexts = {
    title: 'Поддерживаемые банки и системы'
}


export const banks: IBlock = {
    name: 'banks',
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


