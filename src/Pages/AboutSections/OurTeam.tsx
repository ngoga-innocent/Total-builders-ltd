// import React from "react";
import { BsBuildingsFill } from "react-icons/bs";
import Team1 from '../../assets/Testmonial1.jpg'
import Team2 from '../../assets/Testmonial2.jpg'
import Team3 from '../../assets/testimonial3.jpg'
import { FaLinkedin } from "react-icons/fa6";
const OurTeam = () => {
    const Team=[
        {
            name:"Matthew Cole",
            position:"Founder",
            linkedlin:"",
            image:Team1
        },
        {
            name:"Juan Soto",
            position:"CO-Founder",
            linkedlin:"",
            image:Team2
        },
        {
            name:"Benjamin Shaw",
            position:"CEO",
            linkedlin:"",
            image:Team3
        },
        
    ]
  return (
    <div className="w-screen bg-[#FEF9E1] text-[#183030] py-4 md:py-12">
      <div className="w-[80vw] mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center py-4">
          <div className="flex flex-row items-center">
            <BsBuildingsFill />
            <h5 className="text-[#183030]">THE TEAM</h5>
          </div>
          <h4 className="text-lg md:text-5xl">Meet Our Team</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gapy-2 py-2 md:py-7">
            {Team?.map((team,index)=>{
                return(
                    <div key={index} className="flex flex-col">
                        <img src={team?.image} className="rounded-xl not-md:w-[100vw] h-[45vh] " alt="" />
                        <div className="flex flex-col gap-y-2 py-3 md:py-7">
                            <h2 className="text-lg md:text-2xl">{team?.name}</h2>
                            <p>{team?.position}</p>
                            <a href={team?.linkedlin} target="_blank">
                                <FaLinkedin size={32}/>
                            </a>
                        </div>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
