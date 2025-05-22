// import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import whyUs from '../../assets/WhyUS.jpeg'
import topImage from '../../assets/TopImage.jpeg'
const WhyUs = () => {
  return (
    <div className="w-full flex text-white flex-col bg-[#0F172A] not-md:text-center items-center justify-center md:h-screen">
      <div className="w-[90%] mx-auto flex flex-col not-md:justify-center md:flex-row-reverse md:gap-x-20 gap-y-3 items-center py-4 md:py-12">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-row items-center not-md:justify-center gap-x-2">
            <BsFillBuildingsFill />
            <h5 className="uppercase text-sm">Why Us</h5>
          </div>
          <h3 className="text-lg md:text-xl">
            Our Commitment to Excellence with Mission & Vision
          </h3>
          <div className="flex flex-col  divide-y-2 divide-slate-300">
            <div className="py-4">
              <h2 className="text-[#fd9800] py-4 font-bold text-lg md:text-xl">Mission</h2>
              <p>
                Our mission at Total Builders Ltd. is to shape resilient and
                sustainable communities through exceptional engineering and
                construction solutions. We are dedicated to delivering projects
                with precision, integrity, and an unwavering commitment to
                quality. By harnessing cutting-edge technology, fostering strong
                partnerships, and investing in the growth of our team, we ensure
                that every project not only meets but exceeds expectations,
                creating lasting value for our clients and the communities we
                serve.
              </p>
            </div>
            <div>
              <h2 className="text-[#fd9800] py-4 font-bold text-lg md:text-xl">Vision</h2>
              <p>
                At Total Builders Ltd., we strive to be a globally recognized
                leader among architectural and engineering firms. Our vision is
                to set new benchmarks in innovation by pioneering advanced
                technological solutions and consistently delivering exceptional
                service, regardless of project size or profitability. We aim to
                inspire trust, elevate industry standards, and make a lasting
                impact on every project we undertake.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
            <img src={whyUs} alt="" />
            <div className="hidden md:block absolute overflow-clip w-[60%] h-[30vh] md:rounded-2xl border-8 border-[#0F172A] z-10 -bottom-20 -right-12">
                <img src={topImage} className="h-[100%] w-[100%] object-cover" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
