import React from "react";
import Button from "./Button";
import project1Thumbnail from "../assets/project1thumbnail.png";
import bgProject1 from "../assets/bgProject1.jpg";

function RecentProjects() {
  return (
    <div className="relative flex items-center justify-center bg-primary-white">
      <div className="bgImage">
        <img className="-z-1" src={bgProject1} alt="project1" />
      </div>
      <div className="w-full text-primary-white max-w-7xl 2xl:max-w-[1536px] mt-[3rem] absolute top-0">
        <h1 className="font-objectSans text-[40px] font-[800]">
          Our Recent Projects
        </h1>

        <div className="flex justify-between mt-48">
          <div className="left w-[50%]">
            <h2 className="text-[28px] font-[600]">Zymrat</h2>
            <p className="text-[20px] mt-6 mb-16">
              With Zymrat, we redefined urban retail by designing a space that
              effortlessly blends elegance with urban aesthetics.
            </p>
            <Button text="View all projects" />
          </div>
          <div className="right flex flex-col">
            <img src={project1Thumbnail} alt="projectImage" />
            <div className="btns flex gap-5 items-center self-end mt-8">
              <div className="border border-white rounded-full p-2.5 cursor-pointer">
                <img
                  className="rotate-180 filter invert w-4"
                  src="./arrow-right.png"
                  alt="arrow"
                />
              </div>
              <div className="bg-primary-white rounded-full cursor-pointer p-3.5">
                <img src="./arrow-right.png" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
