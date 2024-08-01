'use client'
import { Rating, RoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



export default function ClientRate({ value }: any) {

    return (
        <div className='w-[80px]'>
            <Rating
                value={value}
                itemStyles={{
                    itemShapes: RoundedStar,
                    activeFillColor: '#f59e0b', 
                    inactiveFillColor: '#ffedd5'
                }}
            />
        </div>
    )
}