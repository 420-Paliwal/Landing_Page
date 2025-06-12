import React from 'react'
import icon from '../assets/Icon.png'
import aboutLogo from '../assets/aboutLogo.png'
import aboutImage from '../assets/about_image.png' // used for inline bg image

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10 mb-10 px-4 lg:px-16">
      
      {/* Left Section */}
      <div className="w-full lg:w-[70%] bg-red-500 rounded-2xl p-6 md:p-10 font-sans">
        <h1 className="text-white font-bold text-3xl md:text-4xl">
          <p className="text-xl md:text-2xl opacity-40">Organize.</p>
          <p className="text-xl md:text-2xl">Achieve.</p>
          <p className="text-xl md:text-2xl">Relax.</p>
        </h1>

        <p className="text-white text-base md:text-lg mt-6 mb-6">
          Turn clutter into clarity, chaos into control, and dreams into done. Bold visions into market success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="rounded-full bg-white border-2 border-white text-black font-bold px-6 py-2 text-sm md:text-base">
            Get Started Today
          </button>
          <button className="rounded-full border-2 border-white text-white px-6 py-2 text-sm md:text-base">
            Discover Features
          </button>
        </div>
      </div>

      {/* Right Section with background image and gradient */}
      <div
        className="w-full lg:w-[30%] rounded-2xl p-6 md:p-10 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(230, 75, 75, 0.6), rgba(0, 0, 230, 0)), url(${aboutImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '300px',
        }}
      >
        <div className="mb-6">
          <h1 className="opacity-55 text-2xl md:text-3xl font-bold">Your Task.</h1>
          <h1 className="text-2xl md:text-3xl font-bold">Our Tools.</h1>
        </div>

        <div>
          <img src={aboutLogo} alt="About Logo" className="w-1/2 mb-4" />
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-black text-lg md:text-xl">Freddie Halvorson</h1>
              <p className="text-white text-sm">Chief Productivity Enthusiast</p>
            </div>
            <div>
              <img src={icon} alt="Icon" className="w-16 h-16 rounded-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
