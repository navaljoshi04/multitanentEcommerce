
import React from 'react'

 const products = [
  {
    id: 1,
    name: "Smart Home Cleaner",
    price: 49.99,
    image: "/productsImages/img1.webp",
    rating: 4
  },
  {
    id: 2,
    name: "Ergonomic Mouse",
    price: 99,
    image: "/productsImages/img2.webp",
    rating: 4
  },
  {
    id: 3,
    name: "Apple Smart Watch",
    price: 199.00,
    image: "/productsImages/img3.webp",
    rating: 5
  },
  {
    id: 4,
    name: "Apple Wireless Earbuds",
    price: 89.00,
    image: "/productsImages/img4.webp",
    rating: 4
  },
  {
    id: 5,
    name: "Home Theater",
    price: 149.00,
    image: "/productsImages/img5.webp",
    rating: 5
  },
  {
    id: 6,
    name: "Smart Pen for Ipad",
    price: 69.00,
    image: "/productsImages/img6.webp",
    rating: 4
  },
  {
    id: 7,
    name: "Security Camera",
    price: 49.00,
    image: "/productsImages/img7.webp",
    rating: 5
  },
  
  {
    id: 8,
    name: "Bluetooth Speakers",
    price: 79.00,
    image: "/productsImages/img8.webp",
    rating: 5
  },
  {
    id: 9,
    name: "Wireless headphones",
    price: 59.00,
    image: "/productsImages/img9.webp",
    rating: 5
  },
  {
    id: 10,
    name: "Smart Watch White",
    price: 79.00,
    image: "/productsImages/img8.webp",
    rating: 5
  },
];


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
           <div key={item.id}
           >
             <div className='bg-[#F5F5F5] h-40 sm:h-60 rounded-lg flex items-center justify-center w-full'>
            <img loading='lazy' className='max-h-30 sm:max-h-40 w-auto ' src={item.image} />
             </div>
            <div className='flex gap-2 text-[10px] mt-2'>
                <h2 className='font-light'>{item.name} </h2>
            <p>
                ${item.price}
            </p>
            </div>

            <Stars rating={item.rating} />
           </div>

        ))}
    </div>
  )
}

export default Cart;



