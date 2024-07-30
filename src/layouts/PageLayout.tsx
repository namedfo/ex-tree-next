import Header from '@/components/Header'
import { Infinity } from 'lucide-react'

export default function PageLayout({
    children
}: any) {
    return (
        <main className='flex flex-col gap-[60px] items-center overflow-y-auto h-full relative'>
            <Header />
            <div className='h-[50px]' />
            <div
                style={{
                    height: 'calc(100% - 50px)'
                }}
                className='flex flex-col justify-between px-[10px] gap-[10px] w-full sm:w-[640px]'>
                <div className='flex flex-col gap-[30px]'>
                    {children}
                </div>
                <div className='min-h-[40px] pt-[200px] w-full flex items-center justify-center'>
                    <div className='pl-[6px] pb-[6px] flex items-center text-[13px] text-gray-500'>
                        <span className="leading-[12px] font-[500] mr-[5px]">
                            © 2001 -
                        </span>
                        <div className='flex items-center pt-[1px]'>
                            <Infinity strokeWidth={1.8} size={16} />,
                        </div>
                        <span className='ml-[6px] font-[600]'>
                            Ex24.pro
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}