import React from 'react'
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3'>
        <div>
              <h2 className="font-poppins font-bold text-4xl mx-2 px-4 py-2">
              <span className="text-green-400">go</span>cart
              <span className="text-green-400">.</span>
              </h2>
            <p>
                Welcome to gocort, your ultimate destination for the latest and smartest gadget.From smartphones and smartwatches to essential accessories, we bring you the best in innovations --all in one place.
            </p>
            <div className='flex'>
                <Instagram />
            </div>
        </div>
        <div className='grid sm:grid-cols-2'>
            <div>

            </div>
        </div>

    </div>
  )
}

export default Footer