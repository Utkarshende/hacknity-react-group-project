import React from 'react';

function Footer() {
  return (
    <footer className='bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-12'>
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start">
        
        <div className="text-center md:text-left mb-8 md:mb-0 ">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Join us on our <span className="text-lime-500">adventures</span>
          </h2>
          <p className="mt-4 text-base md:text-md text-gray-400">
            We invite you to be a part of the HACKNITY journey. <br className="hidden md:block" />
            Whether you're launching your dream game, discovering new worlds, <br className="hidden md:block" />
            or simply connecting with fellow enthusiasts, you'll find a welcoming home here!
          </p>
        </div>
    
        <div className="text-center md:text-right md:mt-0">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            For us, it's all about <span className="text-lime-400">software</span> and the visionary <br className="hidden md:block" /> 
            <span className="text-lime-400">people</span> who develop it.
          </h1>
          <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-base font-medium text-gray-400">
              Engaging & Community-Focused <br /> Join our community!
            </p>
            <div className="flex justify-center md:justify-end items-center mt-4 space-x-6">
              <a href="https://www.instagram.com/" target="_blank" >
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="Instagram" className="size-8 transition-transform hover:scale-110" />
              </a>
              <a href="https://github.com/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/128/25/25231.png" alt="GitHub" className="size-8 transition-transform hover:scale-110" />
              </a>
              <a href="https://discord.com/" target="_blank" >
                <img src="https://cdn-icons-png.flaticon.com/128/3670/3670157.png" alt="Discord" className="size-8 transition-transform hover:scale-110" />
              </a>
              <a href="https://x.com/" target="_blank" >
                <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="Twitter" className="size-8 transition-transform hover:scale-110" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" >
                <img src="https://cdn-icons-png.flaticon.com/128/1077/1077046.png" alt="YouTube" className="size-8 transition-transform hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;