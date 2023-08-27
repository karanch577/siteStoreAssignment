import React from 'react'
import StatsCard from './StatsCard'
import statsImg from "../assets/statsImg.jpeg"

const data = [
    {
        id: 1,
        count: "50+",
        text: "Renowned Brands"
    },
    {
        id: 2,
        count: "500+",
        text: "Delighted Clients"
    },
    {
        id: 3,
        count: "5+",
        text: "Expanding Locations"
    },
    {
        id: 4,
        count: "12",
        text: "Prominent Malls"
    },
]

function Stats() {
  return (
    <div className='bg-primary-black text-primary-white'>
        <div className="stats w-full mx-auto max-w-7xl 2xl:max-w-[1536px] flex justify-between py-20">
            {
                data.length > 0 && data.map(item => <StatsCard key={item.id} item={item} />)
            }
        </div>

        <img className='w-full h-[500px] object-cover' src={statsImg} alt="stats Image" />
    </div>
  )
}

export default Stats