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
          <p className="font-ubuntu max-w-[500px] text-amber-800 ">
            {Data.bodySection.hakkimizdaText}
          </p>
          <p>
            Yüksek kaliteli ve uygun fiyatlı ürünlerimiz için instagram
            adresimizi ziyaret edebilirsiniz. [instagram icon]
          </p>
          <p>
            Detaylı bilgi almak için Whatsapp Hattımız: [Whatsapp icon] + numara
          </p>
        </div>
      </div>
      <div>
        <p className="font-playfair text-6xl text-orange-500 my-20 flex mx-auto justify-center">
          Hizmetlerimiz
        </p>
        <div className="flex flex-wrap justify-center mx-48">
          {Object.keys(Data.bodySection.hizmetler.Photos).map((serviceKey) => (
            <div
              key={serviceKey}
              className="m-8 hover:scale-110 transform transition-transform"
            >
              <img
                src={Data.bodySection.hizmetler.Photos[serviceKey]}
                className="max-w-[300px] h-[300px] object-cover rounded-3xl shadow-2xl"
                alt={serviceKey}
              />
              <p className="font-Quicksand text-amber-800 text-center mt-4 text-lg">
                {Data.bodySection.hizmetler.Texts[serviceKey]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
