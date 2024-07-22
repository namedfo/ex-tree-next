import Header from '@/components/Header'

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
                className='flex flex-col px-[10px] gap-[10px] w-full sm:w-[640px]'>
                {children}
            </div>
        </main>
    )
}