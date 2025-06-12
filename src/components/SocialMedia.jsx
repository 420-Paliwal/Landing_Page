import React from 'react'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import twitch from '../assets/twitch.png'
import youtube from '../assets/youtubee.png'
import pinterest from '../assets/pinterest.png'

const SocialMedia = () => {
  return (
    <div className="my-20 px-6">
      <ul className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
        <li>
          <a href="/" aria-label="Google">
            <img src={google} alt="Google Icon" className=" hover:scale-110 transition-transform duration-200" />
          </a>
        </li>
        <li>
          <a href="/" aria-label="Facebook">
            <img src={facebook} alt="Facebook Icon" className=" hover:scale-110 transition-transform duration-200" />
          </a>
        </li>
        <li>
          <a href="/" aria-label="Twitch">
            <img src={twitch} alt="Twitch Icon" className=" hover:scale-110 transition-transform duration-200" />
          </a>
        </li>
        <li>
          <a href="/" aria-label="YouTube">
            <img src={youtube} alt="YouTube Icon" className=" hover:scale-110 transition-transform duration-200" />
          </a>
        </li>
        <li>
          <a href="/" aria-label="Pinterest">
            <img src={pinterest} alt="Pinterest Icon" className="  hover:scale-110 transition-transform duration-200" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
