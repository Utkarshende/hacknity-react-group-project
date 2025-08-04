import React from 'react';
import HacknityLogo from '../../src/assets/logo.png'
import { Heading } from 'lucide-react';



 const navlinks=[
  <a href='/'> Home</a>,
  <a href='/dashboard'> Dashboard</a>,
  <a href='/discover'> Discover</a>,
  <a href='/about'> About</a>,
  <a href='/hackathon'> HJackathon</a>,
  <a href='/organize'> Organize</a>,
  <a href='/login'>Login</a>]

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
        <div className='text-left pb-2 px-2  text-gray-400'>

      <h1 className='py-2 font-bold text-left'>Quick Links</h1>
<div className='grid grid-cols-2 space-x-6 space-y-1'>
  <a href='/'> Home</a>
  <a href='/dashboard'> Dashboard</a>
  <a href='/discover'> Discover</a>
  <a href='/about'> About</a>
  <a href='/hackathon'> Hackathon</a>

  <a href='/login'>Login</a>

 </div>
</div>
        <div className="md:text-right text-center">
            <p className="text-[15px] text-gray-400">
              Engaging & Community-Focused <br /> Join our community!
            </p>
            <div className="flex justify-center items-center md:justif-end space-x-4 mt-4 md:space-x-6">
               <a href="https://peerlist.io/scroll" target="_blank" >
                <img src="https://www.roadtocode.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeerlist.6d09d3a9.png&w=64&q=75" alt="Twitter" className="size-10 transition-transform bg-white p-2 rounded-3xl border-none hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" >
                <img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="Instagram" className="size-10 transition-transform bg-white p-2 rounded-3xl border-none hover:scale-110" />
              </a>
              <a href="https://github.com/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/128/25/25231.png" alt="GitHub" className="size-10 transition-transform bg-white p-2 rounded-3xl border-none hover:scale-110"/>
              </a>
              <a href="https://x.com/" target="_blank" >
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" alt="Twitter" className="size-10 transition-transform bg-white p-2 rounded-3xl border-none hover:scale-110" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" >
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968852.png" alt="YouTube" className="size-10 transition-transform bg-white p-2 rounded-3xl border-none hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      
    </footer>
  );
}

export default Footer;