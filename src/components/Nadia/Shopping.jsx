import React from 'react'
import { imgShop } from '../../helpers/imgShoppings'
import { shopCard } from '../../helpers/shopsCards'

const {} = imgShop

function Shopping() {
  return (
    <>
    <div className=''>
           <div className='flex flex-wrap bg-[#F0F1F1]'>
            <h2 className='w-full'>Shop by category.</h2>
           {shopCard.map((item) => (
                <div key={item.id} className='w-[150px] h-[123px] bg-white rounded-2xl text-center m-5'>
                    <img src={item.image} alt={item.title} className='p-2 ml-8'/>
                    <p  className=''>{item.title}</p>
                </div>
            ))}
           </div>
        </div>
    </>
  )
}

export default Shopping