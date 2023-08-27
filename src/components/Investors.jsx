import React from "react";
import investor1 from "../assets/investor1.png";
import investor2 from "../assets/investor2.png";
import ctaImage from "../assets/ctaImage.png";
import Button from "./Button";

function Investors() {
  return (
    <div className="bg-primary-white text-primary-black pt-28">
      <h1 className="text-[60px] font-objectSans font-[800] text-center">
        Our Investors
      </h1>
      <p className="text-center text-[20px] font-[500]">
        We’re fortunate to have the support of the amazing institutional
        investors
      </p>
      {/* investors icon start */}
      <div className="investors flex items-center gap-4 justify-between mx-auto max-w-3xl mt-16">
        <img className="w-[161px]" src={investor1} alt="investor icon" />
        <img className="w-[207px]" src={investor2} alt="investor icon" />
        <img className="w-[161px]" src={investor1} alt="investor icon" />
      </div>
      {/* investors icon end */}

      {/* cta section start */}
      <div className="flex mt-32">
        <img className="w-[58%]" src={ctaImage} alt="cta image" />
        <div className="right w-[42%] bg-primary-black text-primary-white p-20">
          <h1 className="text-[60px] font-objectSans font-[800] leading-[66px]">
            Elevate Your<br />Brand with Us
          </h1>
          <p className="text-[20px] font-[500] mt-5 mb-7">
            Turn your brand's vision into reality with<br />Litestore's expertise in
            retail design
          </p>
          <Button text="Let's Create Magic" bgColor="black" />
        </div>
      </div>
      {/* cta section end */}
    </div>
  );
}

export default Investors;
