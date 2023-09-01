import React from 'react'

function Button({text, bgColor = "white"}) {
  return (
    <button className={`${bgColor === "black"? "bg-black hover:bg-primary-white border-primary-white hover:border-primary-black text-primary-white hover:text-primary-black": "bg-transparent hover:bg-primary-black hover:text-primary-white border-[#7E7E7E]"} border border-[#7E7E7E] rounded-[38.5px] py-1.5 px-9 `}>
        {text}
    </button>
  )
}

export default Button;