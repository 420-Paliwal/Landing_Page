import React from 'react'
import orgImage from '../assets/organizingImage.png'
const Origanization = () => {
  return (
    <div className='mt-20 flex md:flex-row items-center justify-between gap-10'>
        <div className="box1">
            <img src={orgImage} alt="Organization Image" />
        </div>
        <div className="box-2">
            <h1 className='text-4xl font-bold'>Start Organizing Your Life Today</h1>
            <p className='text-lg mt-3'>Join us now and transform your productivity with our intuitive to-do list platform</p>
            <div className="mt-10 flex gap-10">
                <button className='text-red-500 border-2 border-red-500 px-6 py-2 rounded-md '>
                    Sign Up
                </button>
                <button className='bg-red-500 text-white px-6 py-2 rounded-md transition duration-300'>
                    Learn More
                </button>
            </div>
        </div>
    </div>
  )
}

export default Origanization 