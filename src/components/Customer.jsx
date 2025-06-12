import React from 'react'
import boxImage from '../assets/customerBox.png'
import rectangleImage from '../assets/CustomerRectangle.png'
import sliderImage from '../assets/CustomerSlider.png'
import boxImage2 from '../assets/CustomerImageBox.png'
import customerImage from '../assets/CustomerImage.png'

const Customer = () => {
  return (
    <div className="mt-20">
      {/* Header Section */}
      <div className="text-left mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Customer Testimonials</h1>
        <p className="text-md md:text-lg mt-2 text-gray-700">
          This tool has transformed my productivity and organization!
        </p>
      </div>

      {/* Testimonial Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* Left Box with Border */}
        <div className="relative w-full lg:w-1/2 border-4 border-[#ff3d57] border-r-0 p-6">
          <h1 className="text-xl md:text-2xl font-bold mb-6">
            Using this website has made my tasks so much easier! I can't imagine my day without it.
          </h1>
          <div className="flex items-center gap-6 mt-6">
            <img src={rectangleImage} alt="User icon" className="" />
            <div>
              <h2 className="font-bold text-lg">Sherri Cronin</h2>
              <p className="text-sm md:text-base text-gray-600">Project Manager, TechCorp</p>
            </div>
          </div>
          <img src={sliderImage} alt="Slider" className="mt-10 w-24 md:w-32" />
        </div>

        {/* Right Image with Border */}
        <div className="relative w-full lg:w-1/3 flex justify-center items-center p-2">
          <img src={boxImage2} alt="Box Frame" className="w-full" />
          <img
            src={customerImage}
            alt="Customer"
            className="absolute top-0 left-0 w-full h-full object-cover p-10"
          />
        </div>
      </div>
    </div>
  )
}

export default Customer
