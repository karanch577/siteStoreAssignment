import React from 'react'

function StatsCard({item}) {
  return (
    <div>
        <h2 className='text-center text-[42px] font-[600]'>{item.count}</h2>
        <p className='text-[28px] font-[500]'>{item.text}</p>
    </div>
  )
}

export default StatsCard