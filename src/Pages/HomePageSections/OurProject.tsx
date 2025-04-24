// // import React from 'react'
// import Service1 from "../../assets/landing.jpg";
// import Service2 from "../../assets/road.jpg";
// import Service3 from "../../assets/construction.webp";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { url } from "../../url";
const OurProject = () => {
  // const projects = [
  //   {
  //     name: "KIGALI 15KV NETWORKS STRENGTHENING PROJECT 8 CABINS",
  //     img: Service1
  //   },
  //   {
  //     name: "KIGALI 15KV NETWORKS STRENGTHENING PROJECT 8 CABINS",
  //     img: Service2
  //   },
  //   {
  //     name: "KIGALI 15KV NETWORKS STRENGTHENING PROJECT 8 CABINS",
  //     img: Service3
  //   }
  // ];
  const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get(`${url}/api/projects/`)  // replace with your actual API domain if hosted
        .then((res:any) => {
          setProjects(res.data);
          console.log("services",res)
          setLoading(false);
        })
        .catch((err:any) => {
          console.error("Failed to fetch services:", err);
          setLoading(false);
        });
    }, []);
  return (
    <div className="flex flex-col w-screen md:min-h-[70vh] py-4 md:py-12 justify-center bg-[#FEF9E1]">
      <div className="w-[90%] mx-auto flex flex-col gap-y-3 md:gap-y-12 items-center ">
        <div className="flex flex-col items-center">
          <h5 className="text-[#0F172A]">OUR PROJECTS</h5>
          <h1 className="text-[#0f172a] text-xl md:text-3xl lowercase ">
            OUR STUNNING PROJECTS
          </h1>
        </div>

        {/* Projects */}
        {loading && <p>Loading Projects...</p>}
        <div className="grid grid-cols-1 not-md:gap-y-2 md:grid-cols-3 gap-x-5">
          {projects.map((project:any, index) => (
            <div key={index} className="relative overflow-clip group rounded-xl flex flex-col  items-cemter">
                <div className="absolute group-hover:inset-0 bg-black/60 -translate-y-[200px] group-hover:translate-y-0 ease-in-out duration-300"></div>
              <img src={project?.image} alt="" className="w-[100%] h-[100%]" />
              <p className="absolute top-[30%] left-[20%] w-[50%] mx-auto text-white lowercase text-center translate-y-[200px] group-hover:translate-y-0 ease-in-out duration-300">{project.title}</p>
            </div>
          ))}
        </div>
        <div className="border-2 border-[#0F172A] rounded-full py-3 md:my-10 px-5 flex flex-row items-center gap-x-5 hover:border-[#fd9800] hover:text-white hover:font-bold hover:bg-[#fd9800] hover:cursor-pointer ease-in-out duration-300">
                  <Link to='/projects' className="">Explore Our Projects</Link>
                  <FaChevronRight />
                </div>
      </div>
    </div>
  );
};

export default OurProject;
