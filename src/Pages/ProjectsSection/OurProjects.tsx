// import React from 'react'
// import Project1 from '../../assets/TotalImages/image1.jpeg'
// import Project2 from '../../assets/TotalImages/image2.jpeg'
// import Project3 from '../../assets/TotalImages/image3.jpeg'
// import Project4 from '../../assets/TotalImages/Image4.jpeg'
// import Project10 from '../../assets/TotalImages/Image10.jpeg'
// import Project6 from '../../assets/TotalImages/Image6.jpeg'
// import Project7 from '../../assets/TotalImages/Image7.jpeg'
// import Project8 from '../../assets/TotalImages/Image8.jpeg'
// import Project9 from '../../assets/TotalImages/Image9.jpeg'
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { url } from "../../url";
import { BsBuildingsFill } from "react-icons/bs";
interface projectInterface {
  id: string;
  thumbnail: string;
  images: any[];
  title: string;
  description: string | null;
  duration: string | null;
  location: string | null;
}
const OurProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<projectInterface>();
  const [scrollPositon, setScrollPosition] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const modalRef = useRef(null);
  // const [activeProject, setActiveProject] = useState<any>();
  useEffect(() => {
    axios
      .get(`${url}/api/projects/`) // replace with your actual API domain if hosted
      .then((res: any) => {
        setProjects(res.data);
        console.log("services", res);
        setLoading(false);
      })
      .catch((err: any) => {
        console.error("Failed to fetch services:", err);
        setLoading(false);
      });
  }, []);
  const handleCloseModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setProject(undefined);
      window.scrollTo({ top: scrollPositon, behavior: "smooth" });
    }, 300); // Wait for transition to finish
  };
  useEffect(() => {
    if (project) {
      setModalVisible(true);
      setActiveImageIndex(0);
    }
  }, [project]);
  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? (project?.images.length ?? 1) - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === (project?.images.length ?? 1) - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex flex-col w-screen py-7 md:py-12 bg-[#FEF9E1]">
      <div className="flex flex-col w-[90vw] mx-auto md:w-[80vw] items-center">
        <div className="flex flex-row items-center gap-x-2 ">
          <BsBuildingsFill />
          <h2 className="text-xs md:text-sm font-bold uppercase">
            Our Projects
          </h2>
        </div>
        <h2 className="text-2xl md:text-4xl">Our Stunning Projects</h2>
        {loading && <p>Loading projects...</p>}
        <div className="w-[90vw] md:w-[80vw] mx-auto py-5 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-7">
          {projects.map((project: projectInterface, index: number) => (
            <div
              onClick={() => {
                setScrollPosition(window.scrollY);
                window.scrollTo({ top: 0, behavior: "smooth" });
                setProject(project);
                // setModalVisible(true);
              }}
              key={index}
              // onClick={() => setActiveProject(project)}
              className="rounded-xl md:rounded-2xl group flex flex-col cursor-pointer shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={project?.thumbnail}
                className="w-[100%] h-[80%] md:h-[80%]  rounded-t-xl md:rounded-t-2xl"
                alt=""
              />

              {/* Animated Text */}
              <div className="bg-white px-4 py-5 text-center space-y-1 opacity-80  translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <h1 className="text-lg font-semibold text-gray-800">
                  {project?.title}
                </h1>
                <p className="text-sm text-gray-600">{project?.duration}</p>
                <p className="text-sm text-gray-600">{project?.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {project != null && (
        <div
          className="fixed inset-0 z-50 bg-black/20 bg-opacity-30 flex justify-end overflow-y-auto"
          onClick={handleCloseModal}
        >
          <div
            ref={modalRef}
            className={`
    h-full overflow-y-scroll w-full md:w-[70vw] bg-white flex flex-col not-md:justify-between px-3 md:rounded-tl-[4rem] items-center relative
    transform transition-transform duration-300
    ${modalVisible ? "translate-x-0" : "translate-x-full"}
  `}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-2xl"
            >
              &times;
            </button>

            <h1 className="text-2xl font-bold my-4">{project?.title}</h1>

            {/* Image Slider */}
            <div className="w-full px-4">
              <div className="relative w-full max-w-3xl mx-auto">
                {project?.images.length ? (
                  <img
                    src={project.images[activeImageIndex].image}
                    alt=""
                    className="w-full h-96 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p>No images</p>
                  </div>
                )}
                <button
                  onClick={handlePrevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                >
                  &lt;
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                >
                  &gt;
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex flex-row gap-2 mt-4 overflow-x-auto items-center justify-center ">
                {project?.images.map((img, index) => (
                  <img
                    key={img.id}
                    src={img.image}
                    alt=""
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                      index === activeImageIndex
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: project?.description || "" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProjects;
