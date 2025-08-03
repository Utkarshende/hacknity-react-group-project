import React from 'react';
import HacknityLogo from '../../src/assets/logo.png'

function Footer() {
  return (
    <footer className='bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-8 px-2'>
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start">
        
        <div className="text-center md:text-left mb-8 md:mb-0 ">
          
          <h2 className="text-xl  flex md:text-3xl font-extrabold text-white">
            <img  className='h-8' src={HacknityLogo}/>
          &nbsp;Join us on our &nbsp;<span className="text-lime-500 "> adventures</span>
          </h2>
          <p className="mt-4 text-base md:text-md text-gray-400">
            We invite you to be a part of the HACKNITY journey. <br className="hidden md:block" />
            Whether you're launching your dream game, discovering new worlds, <br className="hidden md:block" />
            or simply connecting with fellow enthusiasts, you'll find a welcoming home here!
          </p>
        </div>
    
        <div className="text-center md:text-right md:mt-0">
            <p className="text-2xl font-light text-gray-400">
              Engaging & Community-Focused <br /> Join our community!
            </p>
            <div className="flex justify-center md:justify-end items-center mt-4 space-x-6">
               <a href="https://peerlist.io/scroll" target="_blank" >
                <img src="https://www.roadtocode.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeerlist.6d09d3a9.png&w=64&q=75" alt="Twitter" className="size-12 transition-transform bg-white p-2 rounded-2xl border-none hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" >
                <img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="Instagram" className="size-12 transition-transform bg-white p-2 rounded-2xl border-none hover:scale-110" />
              </a>
              <a href="https://github.com/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/128/25/25231.png" alt="GitHub" className="size-12 transition-transform bg-white p-2 rounded-2xl border-none hover:scale-110"/>
              </a>
              <a href="https://discord.com/" target="_blank" >
                <img src="https://cdn-icons-png.flaticon.com/128/3670/3670157.png" alt="Discord" className="size-12 transition-transform bg-white p-2 rounded-2xl border-none hover:scale-110" />
              </a>
              <a href="https://x.com/" target="_blank" >
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" alt="Twitter" className="size-12 transition-transform bg-white p-2 rounded-2xl border-none hover:scale-110" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" >
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968852.png" alt="YouTube" className="size-12 transition-transform bg-white p-2 rounded-2xl border-none hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      
    </footer>
  );
}

export default Footer;