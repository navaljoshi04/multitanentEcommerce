
import { Link } from 'react-router-dom';
import React from 'react'
import {products} from "../data/products"


const Stars=({rating}) =>{
    const filled= Array(rating).fill("★");
    const empty = Array(5 - rating).fill("☆");
    return(
        <div className='text-green-400 text-lg'>
            {filled}{empty}
        </div>
    )
}
const Cart = ({showcount}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8' >
        {products.slice(0, showcount).map((item)=>(
          <Link 
           to={`/product/${item.id}`}
           key={item.id}
           className='cursor-pointer'
          >
           <div key={item.id}
           >
            <div className='bg-[#F5F5F5] h-40 sm:h-60 rounded-lg flex items-center justify-center w-full'>
            <img loading='lazy' className='max-h-30 sm:max-h-40 w-auto hover:scale-110' src={item.image} />
             </div>
            <div className='flex gap-2 text-[10px] mt-2'>
                <h2 className='font-light'>{item.name} </h2>
            <p>
                ${item.price}
            </p>
            </div>

            <Stars rating={item.rating} />
           </div>
           </Link>
        ))}
    </div>
  )
}

export default Cart;



