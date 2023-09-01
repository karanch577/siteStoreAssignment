import React, { useState } from "react";
import user1Img from "../assets/user.png";
import user2Img from "../assets/user2.jpeg";
import user3Img from "../assets/user3.jpg";

import brand1Img from "../assets/brand1.jpeg";
import brand2Img from "../assets/header5.jpg";
import brand3Img from "../assets/header6.jpg";
import { AnimatePresence, motion } from "framer-motion";
import BrandsCard from "./BrandsCard";


const data = [
  {
    id: 1,
    bgImgUrl: brand1Img,
    personName: "John Smith",
    personDetail: "CEO of Zouk",
    personImgUrl: user1Img,
    review: "Working with Litestore has been a game-changer for us. Their innovative approach to retail design and their unwaverin dedication to creating immersive shopping experiences is truly commendable. Our brand's visibility and sales have seen a significant boost since our association."
  },
  {
    id: 2,
    bgImgUrl: brand2Img,
    personName: "Angad Bhatia",
    personDetail: "CEO of MensXP",
    personImgUrl: user2Img,
    review: "Working with Litestore has been a game-changer for us. Their innovative approach to retail design and their unwaverin dedication to creating immersive shopping experiences is truly commendable. Our brand's visibility and sales have seen a significant boost since our association."
  },
  {
    id: 3,
    bgImgUrl: brand3Img,
    personName: "Dinesh Paliwal",
    personDetail: "CEO of JBL",
    personImgUrl: user3Img,
    review: "Working with Litestore has been a game-changer for us. Their innovative approach to retail design and their unwaverin dedication to creating immersive shopping experiences is truly commendable. Our brand's visibility and sales have seen a significant boost since our association."
  },
]


function Brands() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextButton = () => {
    // checking if the current index is the last index

    if(currentIndex === data.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const handlePrevButton = () => {
    // checking if the current index is the first index

    if(currentIndex === 0) {
      setCurrentIndex(data.length - 1)
    } else {
      setCurrentIndex(prev => prev - 1)
    }
  }

  const moveToExactIndex = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="bg-primary-white pt-32 overflow-hidden">
      <div className="w-full mx-auto max-w-7xl 2xl:max-w-[1536px]">
        <h1 className="text-[60px] font-objectSans font-[800] text-center">
          Praise from Collaborating Brands
        </h1>
        <AnimatePresence>
        <div className="relative mt-16">
          <div className="flex gap-5 items-center">
            <div className="dots z-10 flex flex-col gap-2">
              {data.map(el => <div key={el.id} onClick={() => moveToExactIndex(el.id - 1)} className={`dot w-3.5 h-3.5 cursor-pointer rounded-full ${currentIndex === el.id - 1 ? "bg-primary-black": "bg-primary-gray"}`}></div>)}
            </div>
            <motion.div
               key={data[currentIndex].id}
               initial={{ y: "100%", opacity: 0.3 }}
               animate={{ y: "0%", opacity: 1 }}
               exit={{ y: "-100%"}}
               transition={{
                x: { type: "spring", stiffness: 200, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            className="img h-[700px] w-[70%] border">
            <img className="w-full h-full" src={data[currentIndex].bgImgUrl} alt="brand1" />
            </motion.div>
          </div>

          {/* review card start */}
          <div className="overflow-x-hidden">

          <BrandsCard data={data[currentIndex]} />
          </div>
          {/* review card end */}

          <div className="btns flex gap-5 items-center self-end absolute bottom-0 right-0">
              <div onClick={handlePrevButton} className="border border-primary-black rounded-full p-2.5 cursor-pointer">
                <img
                  className="rotate-180  w-4"
                  src="./arrow-right.png"
                  alt="arrow"
                />
              </div>
              <div onClick={handleNextButton} className="bg-primary-black rounded-full cursor-pointer p-3.5">
                <img className="filter invert" src="./arrow-right.png" alt="arrow" />
              </div>
            </div>
        </div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Brands;
