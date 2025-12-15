import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center mx-4 my-36'>
        <div className='flex flex-col items-center'>
            <h2 className='text-2xl font-semibold text-slate-800 mt-2'>Join Newsletter</h2>
            <p className='flex items-center gap-5 text-sm text-slate-600 mt-2 text-center max-w-lg'>
                Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week.
            </p>
        </div>
        <div className='flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200'>
            <input type="text" className='flex-1 pl-5 outline-none' placeholder='Enter your email address' id="" />
            <button className='font-medium bg-green-500 text-white px-7 py-3 rounded-full hover:scale-100 active:scale-90 transition'>Get Updates </button>
        </div>
    </div>
  )
}

export default Newsletter