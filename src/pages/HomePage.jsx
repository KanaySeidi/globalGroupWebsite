import React from "react";
import { imgImp } from "../helpers/imgImports";
import { introCard } from "../helpers/introCards";
import Discover from "../components/Malika/Discover";
import SliderPage from "../components/Malika/SliderPage";

const { intro } = imgImp;

function HomePage() {
  return (
    <>
      <div className="w-screen h-screen">
        <div className="h-[400px] bg-blue-200 ">
          <div className="mx-24 flex h-full items-center justify-between">
            <div>
              <p className="text-2xl md:text-5xl">Find it. Compare it.</p>
              <p className="text-5xl">
                And pay how you <br /> like.
              </p>
              <input
                type="text"
                name=""
                id=""
                className="w-96 h-12 rounded-full focus:outline-none pl-5 mt-5"
              />
            </div>
            <div>
              <img width={350} src={intro} alt="" />
            </div>
          </div>
        </div>
        <div className="w-screen h-96 flex justify-evenly mt-24  ">
          {introCard.map((item) => (
            <div className="w-36 flex flex-col items-center text-center ">
              <img width={50} src={item.image} alt="" />
              <p className="text-xs leading-5 mt-5">{item.title}</p>
              <p className="text-xs leading-5">{item.description}</p>
            </div>
          ))}
        </div>
        <Discover/>
        <SliderPage/>
      </div>
    </>
  );
}

export default HomePage;
