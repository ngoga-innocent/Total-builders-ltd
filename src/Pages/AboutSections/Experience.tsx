// import React from "react";
import Image from "../../assets/TotalImages/Image10.jpeg";
import { BsBuildingsFill } from "react-icons/bs";
import Consultation from "../../assets/Icons/consultation.png";
const Experience = () => {
  return (
    <div className="w-screen bg-[#141006]">
      <div className="w-[90%] mx-auto flex flex-col items-center">
        <div className="hidden md:flex flex-col md:h-[70vh] md:w-[80vw] overflow-clip md:rounded-[2rem] md:-mt-[35vh] border-[0.5rem] border-[#141006]">
          <img src={Image} alt="" className=" w-[100%] h-[100%]" />
        </div>
        <div className="w-[80vw] mx-auto flex flex-col md:divide-y divide-[#FEF9E1]">
          <div className="flex flex-col md:flex-row justify-between items-center py-4  not-md:gap-y-7 md:py-10">
            <div className="flex flex-col md:flex-row items-center gap-x-3">
              <h1 className="md:text-4xl text-2xl font-bold text-white">7</h1>
              <p className="text-white">Years of experience</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-3">
              <h1 className="md:text-4xl text-2xl font-bold text-white">17k</h1>
              <p className="text-white">
                Satisified Customers <br />
                in Rwanda
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-x-3">
              <h1 className="md:text-4xl text-2xl font-bold text-white">500</h1>
              <p className="text-white ">
                Completed Projects <br /> in Rwanda
              </p>
            </div>
          </div>
          <div className="flex flex-col not-md:items-center w-[100%] py-4 md:py-12">
            <div className="flex flex-row items-center gap-x-2">
              <BsBuildingsFill color="white" />
              <p className="uppercase font-bold text-white text-sm">
                our process
              </p>
            </div>
            <h5 className="text-lg text-white md:text-4xl my-2 md:my-4">
              Steps to Your Dream <br /> Outdoor Space
            </h5>
            <div className="grid grid-cols-1 py-8 md:py-20 md:grid-cols-3 gap-x-5 not-md:gap-y-2">
              <div className="flex flex-col items-center bg-[#FEF9E1] py-4 px-4 rounded-xl ">
                <img src={Consultation} className="w-[5vw] h-[4vw]" alt="" />
                <div className="py-4 flex flex-col items-center">
                  <h4 className="text-xl">1.Consult</h4>
                  <p className="text-center">
                    We begin with a personalized consultation to capture your
                    vision and needs.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center bg-[#FEF9E1] py-4 px-4 rounded-xl ">
                <img src={Consultation} className="w-[5vw] h-[4vw]" alt="" />
                <div className="py-4 flex flex-col items-center">
                  <h4 className="text-xl">2.Design</h4>
                  <p className="text-center">
                  Our experts craft a detailed plan with eco-friendly practices for your approval.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center bg-[#FEF9E1] py-4 px-4 rounded-xl ">
                <img src={Consultation} className="w-[5vw] h-[4vw]" alt="" />
                <div className="py-4 flex flex-col items-center">
                  <h4 className="text-xl">3.Execute</h4>
                  <p className="text-center">
                  Our skilled team transforms your space with precision and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
