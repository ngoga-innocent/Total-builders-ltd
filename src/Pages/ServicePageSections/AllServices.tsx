// import React from "react";
import { BsBuildingsFill } from "react-icons/bs";
import ServiceImage1 from "../../assets/TotalImages/image1.jpeg";
import ServiceImage2 from "../../assets/TotalImages/image2.jpeg";
import ServiceImage3 from "../../assets/TotalImages/image3.jpeg";
import ServiceImage4 from "../../assets/TotalImages/Image4.jpeg";
import ServiceImage5 from "../../assets/TotalImages/Image7.jpeg";
import ServiceImage6 from "../../assets/TotalImages/image6.jpeg";
const AllServices = () => {
  const services = [
    {
      image: ServiceImage1,
      title: "Electrical Infrastructure Design and Construction",
      description:
        "Includes Tower and pole foundation and erection, transmission lines, substations and network distribution for electricity, telephone and internet"
    },
    {
      image: ServiceImage2,
      title: "Civil Engineering Studies and supervision",
      description:
        "Encompasses the study and supervision of buildings, roads, bridges and other civil infrastructure projects"
    },
    {
      image: ServiceImage3,
      title: "Water Supply and treatment",
      description:
        "Provides topographical assessments, design, study, and supervision of water supply, treatment and rainwater/wastewater systems."
    },
    {
      image: ServiceImage4,
      title: "Environmental management and sustainability",
      description:
        "Focuses on environmental impact management including tree planting, sanitation and sustainable practices"
    },
    {
      image: ServiceImage5,
      title: "Tender Documentation and project cost estimation",
      description:
        "Offers services for creating tender documents, conducting official studies and managing regulatory procedures."
    },
    {
      image: ServiceImage6,
      title: "Training and technology development",
      description:
        "Provides training and technology updates to enhance skills and adapt to industry advancements."
    }
  ];
  return (
    <div className="bg-[#FEF9E1] text-[#0F1721] py-5 md:py-20 flex flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center ">
        <div className="flex flex-row items-center gap-x-2">
          <BsBuildingsFill />
          <p>ALL SERVICES</p>
        </div>
        <h3 className="text-2xl md:text-5xl">Our Full Range of Services</h3>
        <p className="text-center py-3">
          Explore our comprehensive range of constructions and landscaping
          services designed to enhance the <br /> beauty and functionality of
          your outdoor spaces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-14 gap-y-[20vh] md:gap-y-[24vh]  md:py-32">
            {services?.map((service,index)=>(
                <div key={index} className="flex flex-col md:w-[40vw]">
                    <img src={service?.image} className="rounded-xl md:h-[40vh] w-[90%] z-10 mx-auto" alt={service?.title} />
                    <div className="bg-white w-[100%] gap-y-3  flex flex-col justify-end py-7 px-4 -my-[15vh] md:-my-[22vh] rounded-2xl h-[45vh] md:h-[45vh]">
                    <div className=" flex flex-col gap-y-2 ">
                    <BsBuildingsFill size={40}/>
                    <h2>{service?.title}</h2>
                    <p className="">{service?.description}</p>
                    </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
