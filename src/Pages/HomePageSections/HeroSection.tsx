import { useEffect, useState } from "react";
import Road from "../../assets/homepage.jpg";
import Road1 from "../../assets/homepage2.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const Slides = [
    { img: Road, text: "We built the Best" },
    { img: Road1, text: "We built the Best" },
  ];

  const [current, setCurrentSlide] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index: number) => {
    if (index === current) return;
    setPrevious(current);
    setCurrentSlide(index);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const nextSlide = () => {
    goToSlide((current + 1) % Slides.length);
  };

  const prevSlide = () => {
    goToSlide((current - 1 + Slides.length) % Slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative h-[80vh] w-screen overflow-hidden pt-[80px]">
      {/* Sliding Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out ${
            isAnimating ? "-translate-y-full" : "translate-y-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(253,152,0,0.2), rgba(0,0,0,0.3)), url(${Slides[previous].img})`,
          }}
        />
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out ${
            isAnimating ? "translate-y-0" : "translate-y-full"
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(253,152,0,0.2), rgba(0,0,0,0.3)), url(${Slides[current].img})`,
          }}
        />
      </div>

      {/* Foreground Text */}
      <div className="relative z-20 w-[80%] mx-auto flex flex-col h-full justify-center items-center md:items-start text-white">
        <div className="md:w-[50vw] w-[90vw] flex-wrap flex flex-col py-12 md:py-20">
          <h1 className="font-bold text-lg md:text-4xl leading-relaxed">
            Total Builders, we go beyond traditional construction. we build
            trust, long-lasting partnerships, and resilient structures that
            shape communities.
          </h1>
        </div>
        <div className="flex flex-row font-semibold md:text-lg items-center gap-x-4">
          <Link to='/about' className="rounded-full py-3 px-5 text-white bg-[#fd9800] cursor-pointer">
            Learn More
          </Link>
          <Link to='/contact' className="rounded-full py-3 px-5 text-white border-3 border-white hover:bg-[#fd9800] hover:border-0 ease-in duration-200 cursor-pointer">
            Contact us
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 text-white bg-transparent bg-opacity-30 hover:bg-opacity-60 p-2 rounded-full"
      >
        <IoIosArrowBack size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 text-white bg-transparent bg-opacity-30 hover:bg-opacity-60 p-2 rounded-full"
      >
        <IoIosArrowForward size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-[10vw] transform -translate-x-1/2 flex space-x-3 z-30">
        {Slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-[#fd9800]" : "bg-white opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
