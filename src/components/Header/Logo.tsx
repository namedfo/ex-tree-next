import Image from 'next/image'

export default function Logo() {
    return (
        <div className='ml-[10px]'>
            <Image
                src="https://ex24images.b-cdn.net/icon/exnew042024.png"
                alt="logo"
                className='object-contain'
                height={36}
                width={84}
            />
        </div>
    )
}