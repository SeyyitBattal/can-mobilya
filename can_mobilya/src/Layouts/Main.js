import React from "react";
import { Data } from "../Data.js";

export const Main = () => {
  const containerStyle = {
    position: "relative",
  };

  const textContainerStyle = {
    position: "absolute",
    top: "25%",
    left: "25%",
    transform: "translate(-50%, -50%)",
    textAlign: "left",
  };

  const textStyle = {
    fontSize: "8rem",
    fontFamily: "Segoe UI Emoji",
    fontWeight: "bold",
    lineHeight: "2.0",
    textShadow: "1px 12px 0px rgba(0, 0, 0, 0.8)",
  };

  return (
    <div style={containerStyle}>
      <div className="mt-[-50px] relative">
        <img
          src={Data.bodySection.mainWallpaper}
          className="w-full"
          alt="Main Wallpaper"
        />
        <div style={textContainerStyle}>
          <p className="text-amber-800 " style={textStyle}>
            Can Mobilya
          </p>
        </div>
      </div>
    </div>
  );
};
