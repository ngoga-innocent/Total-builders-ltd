// import React from 'react'
import { RiAedElectrodesFill } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const OurServices = () => {
  const services = [
    {
      title: "Electrical Infrastructure Design and Construction",
      description:
        "Includes Tower and pole foundation and erection, transmission lines, substations and network distribution for electricity, telephone and internet"
    },
    {
      title: "Civil Engineering Studies and supervision",
      description:
        "Encompasses the study and supervision of buildings, roads, bridges and other civil infrastructure projects"
    },
    {
      title: "Water Supply and treatment",
      description:
        "Provides topographical assessments, design, study, and supervision of water supply, treatment and rainwater/wastewater systems."
    },
    {
      title: "Environmental management and sustainability",
      description:
        "Focuses on environmental impact management including tree planting, sanitation and sustainable practices"
    },
    {
      title: "Tender Documentation and project cost estimation",
      description:
        "Offers services for creating tender documents, conducting official studies and managing regulatory procedures."
    },
    {
      title: "Training and technology development",
      description:
        "Provides training and technology updates to enhance skills and adapt to industry advancements."
    }
  ];
  return (
    <div className="w-full bg-[#FEF9E1] md:h-[80vh] flex flex-col gap-y-3 justify-center">
      <div className="w-[90%] mx-auto flex flex-col gap-y-3 items-center justify-center py-3">
        <h1 className="text-[#0F172A] font-bold text-xl my-7 uppercase">
          Our services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-3 items-start justify-center mx-auto">
          {services?.slice?.(0, 4)?.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white py-5 shadow shadow-black z-0 px-3 rounded-2xl gap-y-7 transition-transform duration-300 transform hover:scale-105 hover:skew-x-2"
            >
              <div className="p-2 border rounded-full">
                <RiAedElectrodesFill />
              </div>
              <h1 className="text-[#0F172A] text-lg font-bold text-center">
                {service.title}
              </h1>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="border-2 border-[#0F172A] rounded-full py-3 md:my-10 px-5 flex flex-row items-center gap-x-5 hover:border-[#fd9800] hover:text-white hover:font-bold hover:bg-[#fd9800] hover:cursor-pointer ease-in-out duration-300">
          <Link to='/services' className="">Explore Our Services</Link>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
