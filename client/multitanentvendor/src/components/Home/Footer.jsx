import React from 'react'
import {Instagram, Facebook, Twitter, Linkedin, Mails, PhoneCall,MapPinHouse} from 'lucide-react';

const Footer = () => {
  return (
    <footer className='mx-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 border-b border-slate-500/30 text-slate-500'>
         <div>
          <p className='text-4xl font-semibold text-slate-700'>
            <span className='text-green-600'>go</span>cart
            <span className='text-green-600'>.</span>
          </p>
          <p className='max-w-[410px] mt-6 text-sm'>Welcome to gocart, your ultimate destination for the latest and smartest gadgets. From smartphones and smartwatches to essential accessories, we bring you the best in innovation — all in one place.</p>
          <div className='flex items-center gap-3 mt-5'>
            <a href="https://www.instagram.com" className='flex items-center justify-center w-10 h-10 bg-slate-100 hover:scale-105 hover:border border-slate-300 transition rounded-full'> <Instagram /></a>
            <a href="https://www.facebook.com" className='flex items-center justify-center w-10 h-10 bg-slate-100 hover:scale-105 hover:border border-slate-300 transition rounded-full'> <Facebook /></a>
            <a href="https://www.twitter.com" className='flex items-center justify-center w-10 h-10 bg-slate-100 hover:scale-105 hover:border border-slate-300 transition rounded-full'> <Twitter /> </a>
            <a href="https://www.linkedin.com" className='flex items-center justify-center w-10 h-10 bg-slate-100 hover:scale-105 hover:border border-slate-300 transition rounded-full'> <Linkedin /> </a>
          </div>
         </div>
         <div className='flex flex-wrap justify-between w-full gap-5 text-sm'>
          <div>
            <h3 className='font-medium text-slate-700 md:mb-5 mb-3'>PRODUCTS</h3>
            <ul className='space-y-2.5'>
              <li className='flex items-center gap-2'>Earphones</li>
              <li className='flex items-center gap-2'>Headphones</li>
              <li className='flex items-center gap-2'>Smartphones</li>
              <li className='flex items-center gap-2'>Laptops</li>
            </ul>
          </div>

          <div>
            <h3 className='font-medium text-slate-700 md:mb-5 mb-3'>WEBSITES</h3>
            <ul className='space-y-2.5'>
              <li className='flex items-center gap-2'>Home</li>
              <li className='flex items-center gap-2'>Privacy Policy</li>
              <li className='flex items-center gap-2'>Become Plus Member</li>
              <li className='flex items-center gap-2'>Create Your Store</li>
            </ul>
          </div>
          <div>
            <h3 className='font-medium text-slate-700 md:mb-5 mb-3'>CONTACT</h3>
            <ul className='space-y-2.5'>
              <li className='flex items-center gap-2'><Mails /> +1-29490-9009</li>
              <li className='flex items-center gap-2'><PhoneCall size={20} /> naval@gmail.com</li>
              <li className='flex items-center gap-2'><MapPinHouse /> 790 Francisco, 864-12 </li>
            </ul>
          </div>


         </div>
        </div>
        <p className='py-4 text-sm text-slate-500 lg:text-center'>Copyright 2025 © gocart All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer