import React from 'react'
import header1 from "../assets/header1.jpeg";
import header2 from "../assets/header2.jpeg";
import header3 from "../assets/header3.jpeg";
import header4 from "../assets/header4.jpg";
import header5 from "../assets/header5.jpg";
import header6 from "../assets/header6.jpg";
import header7 from "../assets/header7.jpeg";
import header8 from "../assets/header8.jpg";

function HeaderImages() {
  return (
    <div className="flex shrink-0 w-full">
          <div className="flex flex-col gap-4 w-full relative top-11 px-2.5">
            <img src={header1} alt="header img" />
            <img src={header2} alt="header img" />
          </div>
          <div className="px-2.5">
            <img className="object-center object-cover w-[1300px] h-full" src={header3} alt="header img" />
          </div>
          <div className="w-[150%] relative top-11 flex flex-col gap-4 px-2.5">
            <div className="flex gap-4 overflow-hidden">
              <img className="w-1/2" src={header4} alt="header img" />
              <img className="w-1/2" src={header5} alt="header img" />
            </div>
            <img src={header6} alt="header img" />
          </div>
          <div className="flex flex-col gap-4 w-full px-2.5">
            <img src={header7} alt="header img" />
            <img src={header8} alt="header img" />
          </div>
        </div>
  )
}

export default HeaderImages