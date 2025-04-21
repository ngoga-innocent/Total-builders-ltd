// import React from "react";
import About_Image from "../../assets/about_us.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
const About_us = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col  md:flex-row md:gap-x-8 items-center py-4 md:py-10">
      <div className="flex-1 flex flex-col gap-y-7">
        <h1 className="text-[#0F172A] text-lg md:text-3xl font-bold">
          Solving complex challenges
        </h1>
        <p className="text-[#454F5E]">
          Founded on March 17, 2018, Total Builders Ltd. is quickly rising in
          Rwanda’s construction industry, transforming visions into reality
          across multiple sectors. Proudly Rwandan and privately owned, we bring
          together a highly skilled team and innovative solutions to deliver on
          projects of all scales and complexities..
          <br /> <br />
          <span className="py-3">
            Our commitment to excellence is evident in every project we
            undertake, grounded in both local expertise and international
            standards. At Total Builders, we go beyond traditional construction;
            we build trust, long-lasting partnerships, and resilient structures
            that shape communities. We proudly collaborate with national and
            international partners to create engineering solutions that are
            sustainable, impactful, and tailored to our clients&#39; unique
            needs..
          </span>
        </p>
        <div className="flex flex-row gap-x-2 items-center not-md:border not-md:border-[#fd9800]  hover:border rounded-full px-4 py-2 hover:border-[#fd9800] w-fit ease-in duration-200 hover:cursor-pointer">
        <a href="#">Learn More</a>
        <FaArrowRightLong color="#454F5E" />
        </div>
      </div>
      <div className="flex-1 md:-translate-y-[13vh] o rounded-lg md:border-4 md:border-[#454F5E] p-2">
        <img
          src={About_Image}
          alt="about image"
          className="md:-translate-y-[5vh] rounded-t-lg"
        />
      </div>
    </div>
  );
};

export default About_us;
