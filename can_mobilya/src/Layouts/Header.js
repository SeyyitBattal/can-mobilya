import React from "react";
import { Data } from "../Data";

export const Header = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 sticky top-0 z-50 mt-[-151px]">
      <div className="flex items-center">
        <img
          src={Data.headerSection.canMobilyaLogo}
          className="max-w-28 p-3 ml-4 rounded-[35px]"
        />

        <div className="mt-16 mr-12 container mx-auto flex justify-end">
          <div className="text-white flex items-center">
            <a href="#" className="mr-16 hover:text-orange-300">
              Ana Sayfa
            </a>
            <a href="#" className="mr-16 hover:text-orange-300">
              Hizmetlerimiz
            </a>
            <a href="#" className="mr-16 hover:text-orange-300">
              Hakkımızda
            </a>
            <div className="flex items-center">
              <img
                src={Data.headerSection.whatsappIcon}
                className="min-w-4 mr-1.5"
              />
              <a
                href="https://api.whatsapp.com/send?phone=905424342149"
                className="mr-16 hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whatsapp Hattı
              </a>
            </div>
            <div className="flex items-center">
              <img
                src={Data.headerSection.instagramIcon}
                className="min-w-4 mr-1.5"
              />
              <a
                href="https://www.instagram.com/can.mobilyadekor/"
                className="mr-16 hover:text-pink-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram Hesabımız
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
