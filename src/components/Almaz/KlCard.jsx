import React from "react";
import { imgImp } from "../../helpers/imgImports";

const { photo1 } = imgImp



function KlCard() {
    const bg = {
        backgroundColor: "#FFE6CC"
    }
  return (
    <>
      <div className="w-screen h-screen flex justify-center gap-36 items-center" style={bg}>
        <div className="">
          <div>
            <h1 className="text-5xl flex">
              Save time and <br /> money with Klarna.
            </h1>
            <p className="text-xl flex my-4">
              Shop and split your payments with Klarna. <br /> Sign up now to
              pay via our app, browser <br /> extension or in-store with the
              Klarna Card.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-40 h-8 bg-black text-white text-sm hover:bg-white hover:text-black ...">
              Get Klarna for Chrome
            </button>
            <button className="w-36 h-8 bg bg-white border border-slate-500 hover:bg-green-300 ...">
              Get the app
            </button>
          </div>
        </div>
        <div>
            <img src={photo1} alt="" />
        </div>
      </div>
    </>
  );
}

export default KlCard;
