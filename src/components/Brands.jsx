import React from "react";
import userImg from "../assets/user.png";
import brand1Img from "../assets/brand1.jpeg";

function Brands() {
  return (
    <div className="bg-primary-white pt-32">
      <div className="w-full mx-auto max-w-7xl 2xl:max-w-[1536px]">
        <h1 className="text-[60px] font-objectSans font-[800] text-center">
          Praise from Collaborating Brands
        </h1>
        <div className="slider relative mt-16">
          <div className="img flex gap-5 items-center">
            <div className="dots">
              <div className="dot w-3.5 h-3.5 cursor-pointer rounded-full bg-primary-black"></div>
              <div className="dot w-3.5 h-3.5 cursor-pointer rounded-full bg-primary-gray my-2"></div>
              <div className="dot w-3.5 h-3.5 cursor-pointer rounded-full bg-primary-gray"></div>
            </div>
            <img className="w-[70%]" src={brand1Img} alt="brand1" />
          </div>
          <div className="content absolute bottom-0 w-[50%] right-0 flex flex-col">
            <div className="bg-primary-black text-white p-16">
            <p className="text-[20px]">
              Working with Litestore has been a game-changer for us. Their
              innovative approach to retail design and their unwavering
              dedication to creating immersive shopping experiences is truly
              commendable. Our brand's visibility and sales have seen a
              significant boost since our association.
            </p>
            <div className="user flex items-center gap-5 mt-10">
              <img className="rounded-full" src={userImg} alt="user" />
              <div>
                <h3 className="text-[24px] font-[600]">John Smith</h3>
                <p className="text-[24px] font-[400]">CEO of Zouk</p>
              </div>
            </div>
            </div>
            <div className="btns flex gap-5 items-center self-end mt-10">
              <div className="border border-primary-black rounded-full p-2.5 cursor-pointer">
                <img
                  className="rotate-180  w-4"
                  src="./arrow-right.png"
                  alt="arrow"
                />
              </div>
              <div className="bg-primary-black rounded-full cursor-pointer p-3.5">
                <img className="filter invert" src="./arrow-right.png" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
