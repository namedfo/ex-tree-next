import { X } from 'lucide-react'

export default function Notify({
    data,
    texts
}: any) {
    return (
        <div className='flex flex-col rounded-[14px] bg-white p-[14px]'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='bg-zinc-400 rounded-full h-[32px] w-[32px]' />
                    <span className='font-[450]'>
                        Notify
                    </span>
                </div>
                <button className='text-zinc-600'>
                    <X size={20} />
                </button>
            </div>
            <p className='leading-[20px]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex alias tenetur blanditiis animi earum dolorem sequi quia doloribus accusamus, numquam quod! Alias voluptates magni inventore provident molestias quo blanditiis quam!
            </p>
        </div>
    )
}