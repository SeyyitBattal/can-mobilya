import React from "react";
import { Data } from "../Data";

export const Header = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 sticky top-0 z-50 mt-[-80px]">
      <img
        src={Data.headerSection.canMobilyaLogo}
        className="max-w-16 ml-2 mt-[-250px]"
      />

      <div className="container mx-auto flex justify-end">
        <div className="text-white">
          <a href="#" className="mr-8">
            Ana Sayfa
          </a>
          <a href="#" className="mr-8">
            Hizmetler
          </a>
          <a href="#" className="mr-8">
            İletişim
          </a>
        </div>
      </div>
    </div>
  );
};
