import { ITitleTexts } from '@/blocks/Title'
import { IBlock } from '../api/page/route'

const data = null


const texts: ITitleTexts = {
    title: 'Обмен валюты №1 на Пхукете',
    subtitle: 'Единственный лицензированный сервис обмена в Таиланде',
    change: {
        title: 'Обменять через менеджера',
        btns: {
            whatsapp: 'Обмен через WhatApp',
            telegram: 'Обмен через Telegram',
            website: 'Обмен через сайт'
        }
    }
}


export const title: IBlock = {
    name: 'title',
    content: {
        type: 'result',
        data,
        texts,
        styles: {
            marginTop: 0,
            marginBottom: 0,
        }
    }
}


