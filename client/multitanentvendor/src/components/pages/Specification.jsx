import React from 'react'
import {MousePointer2, ClockAlert, Headset} from "lucide-react"
const Specification = () => {
  return (
    <div className='px-6  mx-auto my-20 max-w-6xl'>
         <div className='flex flex-col items-center'>
            <h2 className='text-2xl font-semibold text-slate-800'>Specifications</h2>
            <p className='flex items-center text-sm text-slate-600 mt-2 gap-5 text-center'>
                We offer top-tier service and convenience to ensure your shopping experience is smooth, secure and completely hassle-free.
            </p>
         </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-10 mt-26 '>
            <div className='relative h-44 px-8 flex flex-col items-center justify-center w-full text-center border rounded-lg' style={{backgroundColor:"#05DF7210", borderColor:"#05DF7230"}}>
                <h3 className='text-slate-800 font-medium'>Free Shipping</h3>
                <p className='text-sm text-slate-600 mt-3'>Enjoy fast, free delivery on every order no conditions, just reliable doorstep.</p>
                <div className='absolute -top-4 flex items-center justify-center rounded-md transition ' style={{backgroundColor:"#05DF72"}}>
                    <MousePointer2 className='text-white' size={30} />
                </div>
            </div>
            <div className='relative h-44 px-8 flex flex-col items-center justify-center w-full text-center border rounded-lg' style={{backgroundColor:"#FF890410", borderColor:"#FF890430"}}>
                <h3 className='text-slate-800 font-medium'>7 Days easy Returns </h3>
                <p className='text-sm text-slate-600 mt-3'>Change your mind? No worries. Return any item within 7 days.</p>
                <div className='absolute -top-4 flex items-center justify-center rounded-md transition ' style={{backgroundColor:"#FF8904"}}>
                    <ClockAlert className='text-white' size={30} />
                </div>
            </div>

            <div className='relative h-44 px-8 flex flex-col items-center justify-center w-full text-center border rounded-lg' style={{backgroundColor:"#A684FF10", borderColor:"#A684FF30"}}>
                <h3 className='text-slate-800 font-medium'>24/7 Customer Support</h3>
                <p className='text-sm text-slate-600 mt-3'>We're here for you. Get expert help with our customer support.</p>
                <div className='absolute -top-4 flex items-center justify-center rounded-md transition ' style={{backgroundColor:"#A684FF"}}>
                    <Headset className='text-white' size={30} />
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Specification