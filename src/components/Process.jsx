import React from 'react'
import processLogo1 from '../assets/processLogo1.png'
import processLogo2 from '../assets/processLogo2.png'
import processLogo3 from '../assets/processLogo3.png'
import processLogo4 from '../assets/processLogo4.png'
import processLine from '../assets/processLine.png'

const Process = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full md:w-[80%] text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Transform Your Productivity with Our Innovative To-Do List Features
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full md:w-[90%]">
        {/* Box 1 */}
        <div className="border-2 border-red-500 rounded-2xl bg-white shadow-md p-6">
          <img src={processLogo1} alt="Process 1" className="w-12 sm:w-14 mb-6" />
          <h2 className="text-lg sm:text-xl font-bold">User-Friendly Interface</h2>
          <img src={processLine} alt="Line" className="w-16 sm:w-20 my-4" />
          <p className="text-gray-600 text-sm">
            Our platform offers seamless task management to boost your efficiency.
          </p>
        </div>

        {/* Box 2 */}
        <div className="border-2 border-red-500 rounded-2xl bg-white shadow-md p-6">
          <img src={processLogo2} alt="Process 2" className="w-12 sm:w-14 mb-6" />
          <h2 className="text-lg sm:text-xl font-bold">Collaborate & Share Effortlessly</h2>
          <img src={processLine} alt="Line" className="w-16 sm:w-20 my-4" />
          <p className="text-gray-600 text-sm">
            Invite team members to work together and achieve your goals faster.
          </p>
        </div>

        {/* Box 3 */}
        <div className="border-2 border-red-500 rounded-2xl bg-white shadow-md p-6">
          <img src={processLogo3} alt="Process 3" className="w-12 sm:w-14 mb-6" />
          <h2 className="text-lg sm:text-xl font-bold">Effortless Collaboration</h2>
          <img src={processLine} alt="Line" className="w-16 sm:w-20 my-4" />
          <p className="text-gray-600 text-sm">
            Invite team members to work together and achieve your goals faster.
          </p>
        </div>

        {/* Box 4 */}
        <div className="border-2 border-red-500 rounded-2xl bg-white shadow-md p-6">
          <img src={processLogo4} alt="Process 4" className="w-12 sm:w-14 mb-6" />
          <h2 className="text-lg sm:text-xl font-bold">Seamless Access</h2>
          <img src={processLine} alt="Line" className="w-16 sm:w-20 my-4" />
          <p className="text-gray-600 text-sm">
            Stay connected and manage your tasks on the go with ease.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Process
