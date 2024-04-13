import React from 'react'
import { imgImp } from '../../helpers/imgImports'
const {imgVisa} = imgImp

function Visa() {
  return (
    <div>
      <div className="bg-black flex px-72 py-36 gap-28">
      <div className="text-white w-2/5 grid gap-y-4">
        <p className="text-2xl">Klarna Card</p>
        <h1 className="text-6xl">Pay anywhere that accepts Visa.</h1>
        <p className="text-2xl">
          More time to pay is what we do. Charging interest? Not our thing. The
          Klarna Card has a 0% APR. Your credit score won’t be affected when you
          apply for or use the Klarna Card.
        </p>
        <button className="bg-red-300 px-8 py-4 text-2xl text-black ">
          Learn more
        </button>
      </div>
      <div>
        <img className="w-202" src={imgVisa} alt="visa img" />
      </div>
    </div>
    </div>
  )
}

export default Visa
