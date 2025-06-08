import React from 'react'

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
    <div className='w-[60%] flex flex-col items-center justify-center text-center bg-white rounded-lg mt-10'>
        <h1 className='font-bold text-[250%]'>Simplify Your Life with Our
            Todo App</h1>
        <p className='text-[100%] text-gray-600 mt-8 mb-6 px-8'>Stay organized and boost your productivity with our intuitive todo website. Experience a modern approach to task management that fits your lifestyle.</p>
        <div className="flex align-center justify-center mb-4 gap-5">
            <button className='btn rounded-full bg-red-500 border-2 border-red-500 text-white px-8 py-2'>Get Started </button>
            <button className='btn border-2 border-red-500 rounded-full text-red-500 px-8 py-2'>Learn More</button>
        </div>
    </div>
    </div>
        
  )
}

export default GetStarted