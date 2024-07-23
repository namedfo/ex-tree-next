import { IProfitableTermsTexts } from '@/app/[page]/profitable_terms'

interface IProfitableTermsProps {
    texts: IProfitableTermsTexts
}


export default function ProfitableTerms({
    texts
}: IProfitableTermsProps) {
    return (
        <div className='flex flex-col mt-[40px] gap-[12px]'>
            <span className='font-[500]'>
                {texts.title}
            </span>
            <div className='grid grid-cols-2 gap-[10px]'>
                <Element />
                <Element />
                <Element />
                <Element />
            </div>
        </div>
    )
}


const Element = () => {
    return (
        <div className='h-[100px] flex items-center justify-center bg-white rounded-[14px]'>
            <span>
                preview content
            </span>
        </div>
    )
}