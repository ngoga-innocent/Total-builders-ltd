import { useEffect, useState } from "react";
import Road from "../../assets/homepage.jpg";
const HeroSection = () => {
  const Slides = [
    {
      img: Road,
      text: "We built the Best"
    }
  ];
  const [current, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [Slides.length]);

  const currentSlide = Slides[current];
  return (
    <div
      className="h-[80vh] w-screen bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(253,152,0,0.2), rgba(0,0,0,0.3)), url(${currentSlide?.img})`
      }}
    >
      <div className="w-[90%] mx-auto flex flex-col py-3 h-[100%]  justify-center items-center md:items-start ">
        <div className="md:w-[50vw] w-[90vw] flex-wrap flex flex-col  py-12 md:py-20">
          <h1 className="font-bold text-lg md:text-4xl text-white leading-relaxed">
            Total Builders, we go beyond traditional construction; we build
            trust, long-lasting partnerships, and resilient structures that
            shape communities.
          </h1>
        </div>
        <div className="flex flex-row font-semibold md:text-lg items-center gap-x-4">
          <button className="rounded-full py-3 px-5 text-white bg-[#fd9800] cursor-pointer">
            Learn More
          </button>
          <button className="rounded-full py-3 px-5 text-white border-3 border-white hover:bg-[#fd9800] hover:border-0 ease-in duration-200 cursor-pointer">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
