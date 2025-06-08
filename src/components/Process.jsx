import React from 'react'
import processLogo1 from '../assets/processLogo1.png' // Assuming you have a process logo in the assets folder
import processLogo2 from '../assets/processLogo2.png' // Assuming you have another process logo in the assets folder    
import processLogo3 from '../assets/processLogo3.png' // Assuming you have another process logo in the assets folder    
import processLogo4 from '../assets/processLogo4.png' // Assuming you have another process logo in the assets folder
import processLine from '../assets/processLine.png' // Assuming you have a process line image in the assets folder

const Process = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
          <div className="w-[60%] mt-10">
        <h1 className='font-bold text-center text-[250%]'>Transform Your Productivity with Our Innovative To-Do List Features</h1>  
            </div> 
    <div className=' flex gap-5 items-center justify-center text-center rounded-lg mt-10'>
        <div className="box1 border-2 border-red-500 rounded-2xl">
            <div className="inner-box p-5 flex flex-col items-start justify-cemter">
                <img src={processLogo1} alt="Process Logo 1" className='w-[20%] mb-8' />
                <h1 className='text-[150%] font-bold'>User-Friendly Interface</h1>
                <img src={processLine} alt="Process Line" className='w-[20%] mt-5 mb-5' />
                <p className='text-gray-600 text-[100%] mt-2'>Our platform offers seamless task management to boost your efficiency.</p>
            </div>
        </div>
        <div className=" box1 border-2 border-red-500 rounded-2xl">
            <div className="inner-box p-5 flex flex-col items-start justify-cemter">
                <img src={processLogo2} alt="Process Logo 2" className='w-[20%] mb-8' />
                <h1 className='text-[130%] font-bold'>Collaborate & Share Effortlessly</h1>
                <img src={processLine} alt="Process Line" className='w-[20%] mt-5 mb-5' />
                <p className='text-gray-600 text-[100%] mt-2'>Invite team members to work together and achieve your goals faster.</p>
            </div>
        </div>
        <div className="box1 border-2 border-red-500 rounded-2xl">
            <div className="inner-box p-5 flex flex-col items-start justify-start">
                <img src={processLogo3} alt="Process Logo 3" className='w-[20%] mb-8' />
                <h1 className='text-[150%] font-bold'>Effortless Collaboration</h1>
                <img src={processLine} alt="Process Line" className='w-[20%] mt-5 mb-5' />
                <p className='text-gray-600 text-[100%] mt-2'>Invite team members to work together and achieve your goals faster.</p>
            </div>
        </div>
        <div className=" box1 border-2 border-red-500 rounded-2xl">
            <div className="inner-box p-5 flex flex-col items-start justify-cemter">
                <img src={processLogo4} alt="Process Logo 4" className='w-[20%] mb-8' />
                <h1 className='text-[150%] font-bold'>Seamless Access</h1>
                <img src={processLine} alt="Process Line" className='w-[20%] mt-5 mb-5' />
                <p className='text-gray-600 text-[100%] mt-2'>Stay connected and manage your tasks on the go with ease.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

// Transform Your Productivity with Our Innovative To-Do List Features

export default Process