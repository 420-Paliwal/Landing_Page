import React from 'react'
import logo from '../assets/navbar_logo.png'
import twiter from '../assets/twiter.png'
import facebook from '../assets/facebookSmall.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import youtube from '../assets/Youtube.png'

const Footer = () => {
  return (
    <div className='flex mt-20'>
        <div className="box1 w-[40%] p-10">
            <img src={logo} alt="logo" className='w-[30%]'/>
            <p className='mt-10'>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
            <div className="flex items-center justify-between mt-10">
                <input type="text" placeholder='Your email here' className='border-2 border-black p-2 w-[75%] rounded-xl' />
                <button className='bg-red-500 text-white px-6 py-2 rounded-md'>Join</button>
            </div>
            <p className='mt-3 text-sm'>By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
        </div>

        <div className="box2 mt-10 w-[20%]">
            <div className="flex justify-center">
                <ul>
                    <li className='text-lg font-semibold'>Userful Links</li>
                    <li className='mt-3'>Home Page</li>
                    <li className='mt-3'>About Us</li>
                    <li className='mt-3'>Careers</li>
                    <li className='mt-3'>Press</li>
                    <li className='mt-3'>Blog</li>
                </ul>
            </div>
        </div>

        <div className="box3 mt-10 w-[20%]">
            <div className="flex justify-center ">
                <ul>
                    <li className='text-lg font-semibold'>Resources</li>
                    <li className='mt-3'>Help Center</li>
                    <li className='mt-3'>User Guide</li>
                    <li className='mt-3'>Community Forum</li>
                    <li className='mt-3'>Feedback</li>
                    <li className='mt-3'>Support</li>
                </ul>
            </div>
        </div>


        <div className="box4 mt-10 w-[20%]">
            <div className="flex justify-center">
                <ul>
                    <li className='text-lg font-semibold'>Follow Us</li>
                    <li className='mt-3 flex items-center gap-2'>
                        <img src={twiter} alt="twitter" className='w-6 h-6' />
                        Twitter
                    </li>
                    <li className='mt-3 flex items-center gap-2'>
                        <img src={facebook} alt="facebook" className='w-6 h-6' />
                        Facebook
                    </li>
                    <li className='mt-3 flex items-center gap-2'>
                        <img src={instagram} alt="instagram" className='w-6 h-6' />
                        Instagram
                    </li>
                    <li className='mt-3 flex items-center gap-2'>
                        <img src={linkedin} alt="linkedin" className='w-6 h-6' />
                        LinkedIn
                    </li>
                    <li className='mt-3 flex items-center gap-2'>
                        <img src={youtube} alt="youtube" className='w-6 h-6' />
                        YouTube
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer