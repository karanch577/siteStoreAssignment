import React from "react";
import Button from "./Button";

function Footer() {
  return (
    <div className="bg-primary-black text-primary-white">
    <div className=" w-full mx-auto max-w-7xl 2xl:max-w-[1536px]">
      {/* footer start */}
      <div className="footer flex py-24 justify-between">
        <div className="left w-[40%]">
          <h2 className="font-objectSans font-[800] text-[40px] cursor-pointer">LiteStore</h2>
          <p className="font-[500] text-[20px]">
            The easiest way to go offline.
          </p>
          <div className="icons mt-11 flex gap-5">
            <img className="cursor-pointer" src="./social1.svg" alt="icon" />
            <img className="cursor-pointer" src="./social2.svg" alt="icon" />
            <img className="cursor-pointer" src="./social3.svg" alt="icon" />
            <img className="cursor-pointer" src="./social4.svg" alt="icon" />
          </div>
        </div>
        <div className="knowMore w-[12%]">
          <h3 className="text-[20px] font-[600] cursor-pointer">Know More</h3>
          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5">Why LiteStore</p>
          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5">Latest Stores</p>
          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5">
            What's Included?
          </p>
          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5">Find a Space</p>
        </div>
        <div className="about w-[12%]">
          <h3 className="text-[20px] font-[600] cursor-pointer">About</h3>
          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5">Company</p>
          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5">Careers</p>
          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5">Press</p>
          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5">Privacy Policy</p>
        </div>
        <div className="explore w-[12%]">
          <h3 className="text-[20px] font-[600] cursor-pointer">Explore</h3>
          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5">Blog</p>
          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5">
            Success Stories
          </p>
          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5">FAQ's</p>
        </div>
        <div className="contact w-[22%]">
          <h3 className="text-[20px] font-[600]">Contact</h3>
          <p className="text-primary-gray hover:text-primary-white text-[18px] py-1.5"><span className="inline-block relative top-0.5 mr-2"><img src="./contact1.svg" alt="icon" /></span>
            460, Shri Krishna Temple Rd,
            <br />
            1st Stage, Indiranagar,
            <br />
            Bengaluru, Karnataka 560038
          </p>
          
          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5"><span className="inline-block relative top-1 mr-2"><img src="./contact2.svg" alt="icon" /></span>
          support@litestore.in
          </p>

          <p className="text-primary-gray hover:text-primary-white cursor-pointer text-[18px] py-1.5"><span className="inline-block relative top-1 mr-2"><img src="./contact3.svg" alt="icon" /></span>
          +91 9483465923
          </p>
        </div>
      </div>
      {/* footer end */}

      {/* newsletter start */}
      <div className="newsletter border-b border-b-[#464646] text-primary-white flex justify-between pb-12">
        <div className="left ">
          <h2 className="text-[32px] font-opanSans font-[800]">
            Be in the know, sign up to our newsletter
          </h2>
          <div className="flex my-5 gap-6">
            <input
              className="rounded outline-none w-full py-1 bg-transparent border-b border-b-[#464646]"
              placeholder="Enter Your Email Address"
              type="text"
            />
            <Button text="Subscribe" bgColor="black" />
          </div>
        </div>
        <div className="right bg-primary-black border cursor-pointer border-white rounded-full p-7">
          <img
            className="bg-transparent"
            src="./arrow-up.png"
            alt="arrow icon"
          />
        </div>
      </div>
      {/* newsletter end */}

      {/* copyright start */}
      <div className="copyright">
        <p className="text-center text-[20px] text-[#464646] bg-primary-black py-8">
          ©2022-2023 LiteStore. All Right Reserved
        </p>
      </div>
      {/* copyright end */}
      </div>
    </div>
  );
}

export default Footer;
