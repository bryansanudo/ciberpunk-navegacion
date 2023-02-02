import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

import heroVideo from "@/assets/heroVideo/roller.mp4";

import { Link } from "react-router-dom";
import ingravityLogo from "@/assets/ingravityLogo.png";
import rollerLogo from "@/assets/rollerLogo.png";

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div
      name="inicio"
      className="flex items-end justify-center w-full h-screen text-center"
    >
      <video
        ref={videoRef}
        autoPlay
        src={heroVideo}
        loop
        muted
        className="h-full object-cover w-full absolute -z-10"
      ></video>
      <div
        className={` w-full p-8 flex flex-row items-center justify-center duration-500  gap-10 ${
          isMenuShown ? "opacity-20" : "opacity-100"
        }`}
      >
        <Link to="/">
          <img
            src={ingravityLogo}
            alt="contact us"
            className="rounded-full object-cover w-12 h-12 shadow-lg hover:shadow-thOrange   duration-300"
          />
        </Link>
        {isVideoPlaying ? (
          <FaPauseCircle
            size={50}
            onClick={handleVideoPause}
            className="cursor-pointer hover:scale-105 duration-300 text-white"
          />
        ) : (
          <FaPlayCircle
            size={50}
            onClick={handleVideoPlay}
            className="cursor-pointer hover:scale-110 duration-300 text-white"
          />
        )}
        <Link to="/productos">
          <img
            src={rollerLogo}
            alt="contact us"
            className="rounded-full object-cover w-12 h-12 shadow-lg hover:shadow-thBlue  duration-300 "
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
