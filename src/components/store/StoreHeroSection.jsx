import React, { useRef, useState } from "react";
import heroVideo from "@/assets/heroVideo.mp4";
import Navegacion from "@/layouts/Navegacion";

import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const StoreHeroSection = ({ isMenuShown }) => {
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
    <div className="flex items-end justify-center w-full h-screen text-center">
      <video
        ref={videoRef}
        autoPlay
        src={heroVideo}
        loop
        muted
        className="h-full object-cover w-full absolute -z-10"
      ></video>
      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${
          isVideoPlaying ? "" : "bg-black/80"
        } ${isMenuShown ? "opacity-20" : "opacity-100"}`}
      >
        <h1 className="text-5xl lg:text-7xl">Ingravity</h1>

        <h1 className="text-5xl lg:text-7xl capitalize mb-12">
          <span className="text-thBlue font-bold">Roller</span> is here
        </h1>

        <div className="flex flex-row justify-center items-center">
          <Navegacion className="capitalize" className2="capitalize mx-12" />

          {isVideoPlaying ? (
            <FaPauseCircle
              size={30}
              onClick={handleVideoPause}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
          ) : (
            <FaPlayCircle
              size={30}
              onClick={handleVideoPlay}
              className="cursor-pointer hover:scale-110 duration-200 text-thBlue"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreHeroSection;
