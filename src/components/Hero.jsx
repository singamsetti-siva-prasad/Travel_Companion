import React from "react";
import heroBg from "../images/heroBg.jpg";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${heroBg}")`,
    backgroundSize: "cover",
  };
  return (
    <div className="w-screen h-screen">
      <div
        style={backgroundImageStyle}
        className="h-screen w-screen  bg-no-repeat"
      >
        <div className="flex flex-col items-center w-full h-full justify-center">
          <h1 className="text-3xl text-sky-900 font-bold">
            "Have stories to tell not stuff to show"
          </h1>
          <p className="">Explore the world the world now..</p>
          <p className="">
            Don't worry travel advisor will be your guide in your every step
          </p>
        </div>
        <div className="">
          <input
            placeholder="Have a place in mind search!.."
            type="text"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
