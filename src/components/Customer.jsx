import React from 'react'
import boxImage from '../assets/customerBox.png' // Adjust the path as necessary
import rectangleImage from '../assets/CustomerRectangle.png' // Adjust the path as necessary
import sliderImage from '../assets/CustomerSlider.png' // Adjust the path as necessary
import boxImage2 from '../assets/CustomerImageBox.png' // Adjust the path as necessary
import customerImage from '../assets/CustomerImage.png' // Adjust the path as necessary

const Customer = () => {
    return (
        <div className='mt-20'>
            <div className="upper-box flex flex-col justify-start mb-10">
                <h1 className='text-4xl font-bold'>Customer Testimonials</h1>
                <p className='text-lg mt-3'>This tool has transformed my productivity and organization!</p>
            </div>

            <div className="mt-20 relative">
                <div className="left-box">
                    <img src={boxImage} alt="box-image" />
                </div>
                <div className="right-box flex items-center
                justify-between p-10 absolute top-15 right-0 bottom-15 left-20 bg-white ">
                    <div className="inner-box1 w-[50%]">
                        <h1 className='text-2xl font-bold mb-4'>
                            Using this website has made my tasks so much easier! I can't imagine my day without it.
                        </h1>
                        <div className="flex items-center gap-10 mt-10">
                            <img src={rectangleImage} alt="Rectangle Image" />
                            <div className="">
                                <h1 className='text-xl font-bold'>Sherri Cronin</h1>
                                <p className='text-lg'>Project Manager, TechCorp</p>
                            </div>
                        </div>
                        <img src={sliderImage} alt="Slider Image" className="mt-10" />
                    </div>

                    <div className="inner-box2">
                        <div className="flex items-center relative">
                            <img src={boxImage2} alt="box-image" className=" mb-4 ml-2" />
                            <img src={customerImage} alt="box-image" className="mb-4 absolute" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer