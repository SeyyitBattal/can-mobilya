import React from "react";
import { Data } from "../Data.js";

export const Footer = () => {
  return (
    <div className="bg-gray-800 p-8 mt-16 flex justify-between">
      <div className="flex items-center">
        <img
          src={Data.headerSection.canMobilyaLogo}
          alt="Can Mobilya Logo"
          className="w-16 h-16 mr-4"
        />
        <div className="text-white text-left">
          <p className="text-lg font-semibold">İletişim Bilgileri:</p>
          <p className="text-sm">Telefon: 0123 456 789</p>
          <p className="text-sm">E-posta: info@canmobilya.com</p>
        </div>
      </div>

      <div className="flex items-center">
        <a
          href="https://www.instagram.com/can.mobilyadekor/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-300 mr-4 flex items-center"
        >
          <img
            src={Data.headerSection.instagramIcon}
            alt="Instagram Icon"
            className="w-5 h-5 mr-1"
          />
          Instagram
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=905424342149"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-300 flex items-center"
        >
          <img
            src={Data.headerSection.whatsappIcon}
            alt="Whatsapp Icon"
            className="w-5 h-5 mr-1"
          />
          Whatsapp
        </a>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          © 2024 Can Mobilya. Tüm Hakları Saklıdır.
        </p>
      </div>
    </div>
  );
};
