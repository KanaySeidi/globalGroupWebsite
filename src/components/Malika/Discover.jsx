import React from 'react'
import { imgImp } from '../../helpers/imgImports'

const { strelka } = imgImp

export function Discover() {
  return (
    <>
      <div className='w-screen h-screen ml-20 mt-20'>
        <div > 
            <div>
                <h2 className='text-base'>Discover Klarna features.</h2>
                <p className='text-xs mt-2'>Download the app to enjoy all of Klarna's features. Start saving time and money<br/> now in just a few taps.</p>
            </div>
            <div className='mt-10'>
                <div className='flex gap-2'>
                <img src={strelka} alt=''/>
                <img src={strelka} alt='' />
                </div>
                <ul>
                    <li className=''>Rewards</li>
                    <li className='text-xs text-red-100'>Loyalty cards</li>
                    <li className='text-xs text-red-100'>Referrals</li>
                    <li className='text-xs text-red-100'>Price drops</li>
                    <li className='text-xs text-red-100'>Returns</li>
                    <li className='text-xs text-red-100'>Delivery tracking</li>
                </ul>
            </div>
        </div>
      </div>
    </>

  );
}

export default Discover;
