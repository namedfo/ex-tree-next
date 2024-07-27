export default function CardWithImage({
    data,
    texts
}: any) {
    return (
        <div className='flex gap-[14px] p-[14px] bg-white rounded-[14px]'>
            <div className='w-[70px] bg-zinc-300 rounded-[10px] h-[70px]' />
            <div className='flex flex-col gap-[6px] justify-between flex-1'>
                <span className='leading-[18px] font-[450]'>
                    Карточка с картинкой
                </span>
                <span className='text-[14px] text-zinc-500 leading-[20px]'>
                    Вы можете получать до 35% прибыли сервиса по сделкам приглашенных Вам
                </span>
            </div>
        </div>
    )
}