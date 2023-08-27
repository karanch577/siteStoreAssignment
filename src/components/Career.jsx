import React from "react";
import Button from "./Button";

function Career() {
  return (
    <div className="bg-primary-white text-primary-black py-32">
      <h1 className="text-[60px] font-objectSans font-[800] text-center">
        Join Our Team
      </h1>
      <p className="text-center text-[20px] font-[500]">
        Work from home, or from wherever makes you happy.
      </p>
      <div className="openings p-4 mt-16 mx-auto w-full max-w-4xl">
        {/* first card start */}
        <div className="opening cursor-pointer font-[500] border border-primary-gray rounded-[10px] p-7 flex justify-between items-center">
          <div className="left">
            <h3 className="text-[24px]">Software Engineer(Android)</h3>
            <div className="flex gap-2 items-center">
              <p className="text-primary-gray">INDIA (REMOTE)</p>
              <div className="circle rounded-full w-3 h-3 bg-primary-gray"></div>
              <p className="text-primary-gray">FULL-TIME</p>
            </div>
          </div>
          <Button text="Apply" />
        </div>
        {/* first card end */}

        {/* second card start */}
        <div className="opening cursor-pointer mt-8 font-[500] border border-primary-gray rounded-[10px] p-7 flex justify-between items-center">
          <div className="left">
            <h3 className="text-[24px]">Event & Field Marketer</h3>
            <div className="flex gap-2 items-center">
              <p className="text-primary-gray">Bangalore</p>
              <div className="circle rounded-full w-3 h-3 bg-primary-gray"></div>
              <p className="text-primary-gray">FULL-TIME</p>
            </div>
          </div>
          <Button text="Apply" />
        </div>
        {/* second card end */}
      </div>
    </div>
  );
}

export default Career;
