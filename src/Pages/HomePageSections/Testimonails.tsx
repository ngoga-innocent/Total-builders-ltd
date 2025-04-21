import React from "react";
import Testimony1 from "../../assets/Testmonial1.jpg";
import Testimony2 from "../../assets/Testmonial2.jpg";
import Testimony3 from "../../assets/testimonial3.jpg";
import { TiStarFullOutline } from "react-icons/ti";
import { FaGoogle } from "react-icons/fa";
import { FaAppleWhole } from "react-icons/fa6";
const Testimonails = () => {
    const rates=[1,2,3,4,5]
  const testimonies = [
    {
      img: Testimony1,
      name: "Jane Anderson",
      location: "Homeowner, San Diego",
      message:
        "The team at Earthly Elegance totally transformed our backyard into a stunning oasis. Their attention to detail and creativity exceeded our expectations!",
      rate: 4,
      commpany:<FaGoogle size={30} />
    },
    {
      img: Testimony2,
      name: "Jane Anderson",
      location: "Homeowner, San Diego",
      message:
        "The team at Earthly Elegance totally transformed our backyard into a stunning oasis. Their attention to detail and creativity exceeded our expectations!",
      rate: 5,
      commpany:<FaAppleWhole size={30} />
    },
    {
      img: Testimony3,
      name: "James Head",
      location: "Homeowner, New York City",
      message:
        "The team at Earthly Elegance totally transformed our backyard into a stunning oasis. Their attention to detail and creativity exceeded our expectations!",
      rate: 5,
      commpany:<FaAppleWhole size={30} />
    }
  ];
  return (
    <div className="w-screen flex flex-col py-6 md:h-[60vh] items-center justify-center md:py-12">
      <div className="w-[90%] flex flex-col mx-auto items-center">
        <p className="uppercase text-sm">Testimonials</p>
        <h4 className="text-lg md:text-2xl mx-auto">
          Honest Review from Our customers
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-12 md:py-12">
          {testimonies.slice(0,2)?.map((testmony, index) => (
            <div key={index} className="flex flex-col bg-[#FEF9E1]  rounded-lg gap-y-4 py-9 px-4">
              <div className="flex flex-row gap-x-2 items-center">
                <img
                  src={testmony.img}
                  className="w-[4vw] h-[4vw] rounded-full object-cover"
                  alt={testmony.name}
                />
                <div>
                  <h3>{testmony.name}</h3>
                  <p className="text-sm">{testmony.location}</p>
                </div>
              </div>
              <p>{testmony.message}</p>
              <div className="flex flex-row items-center justify-between py-3">
                <div className="flex flex-row gap-x-1">
                    {rates?.map((item,index)=>(
                        <TiStarFullOutline size={26} key={index} color={testmony.rate <= item? "":"orange"} />
                    ))}
                </div>
                 <div>{testmony.commpany}</div>   
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonails;
