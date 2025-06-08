import React, { Link } from 'react'
import goole from '../assets/google.png' // Assuming you have a Google icon in the assets folder
import facebook from '../assets/facebook.png' // Assuming you have a Facebook icon in the assets folder
import twitch from '../assets/twitch.png'
import youtube from '../assets/youtubee.png'
import pinterest from '../assets/pinterest.png'
 // Assuming you have a Twitter icon in the assets folder

const SocialMedia = () => {
  return (
    <div className='my-20'>
        <ul className='flex items-center justify-between px-20'>
            <li><a to="/"><img src={goole} alt="Google Image" /></a></li>
            <li><a to="/"><img src={facebook} alt="facebook   Image" /></a></li>
            <li><a to="/"><img src={twitch} alt="twitch Image" /></a></li>
            <li><a to="/"><img src={youtube} alt="youtube Image" /></a></li>
            <li><a to="/"><img src={pinterest} alt="pinterest Image" /></a></li>
        </ul>
      </div>
  )
}

export default SocialMedia