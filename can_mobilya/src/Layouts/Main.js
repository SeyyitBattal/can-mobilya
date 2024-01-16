import React from "react";
import { Data } from "../Data.js";

export const Main = () => {
  return (
    <div className="">
      <img
        src={Data.bodySection.mainWallpaper}
        className="w-full"
        alt="Main Wallpaper"
      />
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-amber-800 text-9xl font-bold ">Can Mobilya</p>
        <p className="text-orange-500 text-5xl font-bold leading-20 text-shadow mt-16 ml-4">
          20 gün içerisinde hızlı teslimat.
        </p>
        <p className="text-white text-3xl font-bold leading-20 text-shadow mt-6 ml-4">
          En İyi Hizmet. En İyi Kalite.
        </p>
      </div>
      <div className="flex my-48 mx-auto justify-center ">
        <img
          src={Data.bodySection.hakkimizdaPhoto}
          className="max-w-[500px] rounded-3xl shadow-2xl"
          alt="Main Wallpaper"
        />
        <div className="ml-32 max-w-[600px] ">
          <p className="font-playfair text-6xl text-orange-500 my-20">
            Hakkımızda
          </p>
          <p className="font-ubuntu max-w-[500px] text-amber-800">
            {Data.bodySection.hakkimizdaText}
          </p>
        </div>
      </div>
    </div>
  );
};
