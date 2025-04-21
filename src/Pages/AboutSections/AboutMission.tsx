// import React from "react";
import AboutMissionImage from "../../assets/TotalImages/Image4.jpeg";
import { GoGoal } from "react-icons/go";
const AboutMission = () => {
  return (
    <div className="flex flex-col py-4 md:py-12">
      <div className="flex flex-col md:flex-row items-center w-[80vw] mx-auto justify-between gap-x-12">
        <div className="flex-1 overflow-clip w-[100%] md:w-[80%] h-[100%] rounded-lg md:rounded-xl">
          <img src={AboutMissionImage} className="w-[100%] h-[100%]" alt="" />
        </div>
        <div className="flex-1 flex flex-col text-[#183030] divide-y divide-[#183030]">
          <div className="flex flex-col gap-y-2 md:gap-y-4 py-4">
            <div>
              <div className="flex flex-row items-center gap-x-2">
                <GoGoal />
                <h4 className="uppercase text-sm font-light">The Goal</h4>
              </div>
              <h2 className="text-lg md:text-3xl">Our Mission</h2>
            </div>
            <p>
              Our mission at Total Builders Ltd. is to shape resilient and
              sustainable communities through exceptional engineering and
              construction solutions. We are dedicated to delivering projects
              with precision, integrity, and an unwavering commitment to
              quality. By harnessing cutting-edge technology, fostering strong
              partnerships, and investing in the growth of our team, we ensure
              that every project not only meets but exceeds expectations,
              creating lasting value for our clients and the communities we
              serve
            </p>
          </div>
          <div className="flex flex-col gap-y-2 md:gap-y-4 py-4">
            <div>
              <div className="flex flex-row items-center gap-x-2">
                <GoGoal />
                <h4 className="uppercase text-sm">The Outlook</h4>
              </div>
              <h2 className="text-lg md:text-3xl">Our Vission</h2>
            </div>
            <p>
              At Total Builders Ltd., we strive to be a globally recognized
              leader among architectural and engineering firms. Our vision is to
              set new benchmarks in innovation by pioneering advanced
              technological solutions and consistently delivering exceptional
              service, regardless of project size or profitability. We aim to
              inspire trust, elevate industry standards, and make a lasting
              impact on every project we undertake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
