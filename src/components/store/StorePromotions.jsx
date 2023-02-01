import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import rollerLogo from "@/assets/rollerLogo.png";

import heroVideo from "@/assets/video3.mp4";

const StorePromotions = ({ isMenuShown }) => {
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
        <div className="flex flex-col gap-5 items-center">
          <div className="flex items-center flex-wrap gap-10">
            {isVideoPlaying ? (
              <FaPauseCircle
                size={50}
                onClick={handleVideoPause}
                className="cursor-pointer hover:scale-150 duration-300 text-thBlue"
              />
            ) : (
              <FaPlayCircle
                size={50}
                onClick={handleVideoPlay}
                className="cursor-pointer hover:scale-150 duration-300 text-thBlue"
              />
            )}
            <a
              href="https://www.instagram.com/tienda.roller/"
              target="_blank"
              rel="noreferrer"
              className="   rounded-full   hover:scale-150 duration-300 p-3 "
            >
              <img
                src={rollerLogo}
                alt=""
                className="rounded-full object-cover w-14 h-14 shadow-md shadow-thBlue"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorePromotions;
