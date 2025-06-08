import React from 'react'
// import aboutImage from '../assets/about_image.png' // Assuming you have an image in the assets folderb
import icon from '../assets/icon.png' // Assuming you have an icon in the assets folder
import aboutLogo from '../assets/aboutLogo.png' // Assuming you have a logo in the assets folder
const About = () => {
  return (
    <div className='flex flex-row items-center justify-between mt-10 mb-10 gap-20'>
        <div className="w-[75%] flex flex-col align-center rounded-2xl font-sans justify-start bg-red-500 p-10 mt-10">
            <h1 className=' text-white font-bold text-[250%]'>
                <p className='text-[150%] opacity-40'>Organize.</p>
                <p className='text-[150%] text-white'>Achieve.</p>
                <p className='text-[150%] text-white'>Relax.</p>
            </h1>
            <p className='text-white text-[110%] mt-8 mb-6 '>Turn clutter into clarity, chaos into control, and dreams into done.bold visions into market success</p>
            <div className="flex align-center justify-start mt-4 gap-5">
                <button className='btn rounded-full bg-white border-2 border-white text-black font-bold px-8 py-2'>Get Started Today</button>
                <button className='btn border-2 border-white rounded-full text-white px-8 py-2 ml-4'>Discover Features</button>
            </div>
        </div>
        <div id='about_image' className="w-[25%]  mt-10 p-10 flex flex-col rounded-2xl align-center justify-between">
            <div className="upper-box flex flex-col align-center justify-start">
                <h1 className='opacity-55 text-3xl font-bold text-white'>Your Task.</h1>
            <h1 className='text-3xl font-bold text-white'>Our Tools.</h1>
            </div>
            <div className="lower-box">
                <img src={aboutLogo} alt="About Logo" className='w-[40%] mb-3' />
                <div className="inner-box flex justify-between items-center">
                    <div className="box-left">
                        <h1 className='text-black text-xl'>Freddie Halvorson</h1>
                <p className='text-white text-sm'>Chief Productivity Enthusiast</p>
                    </div>
                    <div className="box-right">
                        <img src={icon} alt="Icon" className='w-[580%] rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About