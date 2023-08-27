import React from 'react'

function Button({text, bgColor = "white"}) {
  return (
    <button className={`${bgColor === "black"? "bg-black border-primary-white text-primary-white": "bg-transparent border-[#7E7E7E]"} border border-[#7E7E7E] rounded-[38.5px] py-1.5 px-9`}>
        {text}
    </button>
  )
}

export default Button;