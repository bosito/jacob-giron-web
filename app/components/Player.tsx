import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoPlayBack, IoPlayForward } from "react-icons/io5";
import video_example from "../../public/video_example.png";

export default function Player() {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full  z-20">
      <div className="h-32 sm:h-full w-full bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-t-1 border-gray-600">
        <div className="my-3 mx-2 flex-1 flex flex-row">
          <div className="flex flex-row flex-1">
            <Image
              width={90}
              height={90}
              src={video_example}
              alt="video example"
              className="rounded"
            />
            <div className="ml-3">
              <p className="text-xs sm:text-base">
                From Cuba with $300, to Millions | Alex Otaola
              </p>
              <p className="text-primary text-xs sm:text-base">
                862 suscriptores
              </p>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <div className="flex">
              <IoPlayBack className="text-2xl" />
              <FaPlay className="text-primary text-2xl mx-3" />
              <IoPlayForward className="text-2xl" />
            </div>
          </div>
          <div className="flex flex-1"></div>
        </div>
        <div className="w-full h-1 bg-black">
          <div className="h-full w-1/2 bg-primary" />
        </div>
      </div>
    </footer>
  );
}
