import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='bg-primary-white'>
    <div className='flex justify-between items-center w-full mx-auto max-w-7xl 2xl:max-w-[1536px] pt-10'>
        <div className="logo font-objectSans text-[28px]">Litestore</div>
        <div className="buttons flex items-center gap-6">
            <Button text="Log in" bgColor='black'/>
            <Button text="Sign up"/>

            <div className="hamburger bg-primary-black p-3 rounded-3xl">
                <img className='w-4 filter invert' src="./hamburger.png" alt="hamburger" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar