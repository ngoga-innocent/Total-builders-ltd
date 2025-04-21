// import React from "react";
import IdeaImage from "../../assets/TotalImages/ideas.jpeg";
import { BsBuildingsFill } from "react-icons/bs";
const GvingBack = () => {
  return (
    <div className="w-screen flex flex-col py-4 md:py-12">
      <div className="w-[80vw] mx-auto flex flex-col md:flex-row items-center gap-x-4 md:gap-x-12">
        <div className="overflow-clip h-[70vh] flex-1 w-[100%] md:w-[70%] rounded-lg md:rounded-2xl">
          <img src={IdeaImage} className="w-[100%] h-[100%]" alt="" />
        </div>
        <div className="flex flex-col flex-1 gap-y-2 md:gap-y-4 not-md:py-4">
          <div className="flex flex-row items-center">
            <BsBuildingsFill />
            <p className="text-sm">SHARING IDEAS</p>
          </div>
          <h3 className="text-lg md:text-5xl">Community <br /> Involvement</h3>
          <p>We believe in supporting our community and giving back through various initiatives. Whether it’s volunteering for local garden projects or sponsoring environmental education programs, we are dedicated to making a positive impact.</p>
        </div>
      </div>
    </div>
  );
};

export default GvingBack;
