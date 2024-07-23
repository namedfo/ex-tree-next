import { IBlock } from '../api/page/route'

const data = null



export interface IRoyaltyTexts {
    title: string
    subtitles: {
        one: string
        two: string
        three: string
    }
    btn_connect: string
}

const texts: IRoyaltyTexts = {
    title: "Приглашайте новый пользователей <br />и получайте пассивный доход.",
    subtitles: {
        one: 'Вы можете получать до 35% прибыли сервис по сделкам приглашенных Вами людей.',
        two: 'Все что вам нужно, отсканировать QR-код в нашем офисе и пройти простейшую регистрацию.',
        three: 'Партнерская программа бессрочна, не имеет лимита приглашений и начинает действовать моментально.'
    },
    btn_connect: 'Присоединиться к программе'
}


export const royalty: IBlock = {
    name: 'royalty',
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


