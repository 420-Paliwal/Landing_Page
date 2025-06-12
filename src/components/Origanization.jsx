import React from 'react'
import orgImage from '../assets/organizingImage.png'

const Origanization = () => {
  return (
    <div className='mt-20 px-4 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
      
      {/* Text Content */}
      <div className="box-2 w-full md:w-1/2 text-center md:text-left">
        <h1 className='text-2xl md:text-4xl font-bold'>
          Start Organizing Your Life Today
        </h1>
        <p className='text-md md:text-lg mt-3 text-gray-700'>
          Join us now and transform your productivity with our intuitive to-do list platform
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
          <button className='text-red-500 border-2 border-red-500 px-6 py-2 rounded-md'>
            Sign Up
          </button>
          <button className='bg-red-500 text-white px-6 py-2 rounded-md transition duration-300'>
            Learn More
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="box1 w-full md:w-1/2 flex justify-center">
        <img
          src={orgImage}
          alt="Organization"
          className='w-full max-w-[400px] object-contain'
        />
      </div>
    </div>
  )
}

export default Origanization
