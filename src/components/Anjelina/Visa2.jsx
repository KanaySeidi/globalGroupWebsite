import React from 'react'
import { imgImp } from '../../helpers/imgImports'
const {imgTwoVisa} = imgImp

function Visa2() {
  return (
    <div>
      <div className="bg-white flex px-72 py-36 gap-40">
        <div>
          <img className="w-202" src={imgTwoVisa} alt="visa img" />
        </div>
        <div className="text-black w-2/5 grid gap-y-4 py-12">
          <h1 className="text-6xl">Get inspired.</h1>
          <p className="text-2xl">
            Explore our curated lists of products and stores for more inspo.
            Find something to love in electronics, fashion, beauty and more.
          </p>
          <button className="w-72 h-20 bg-black px-8 py-4 text-2xl text-white">
            Discover trends
          </button>
        </div>
      </div>
    </div>
  )
}

export default Visa2
