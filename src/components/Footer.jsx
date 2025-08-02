import React from 'react';
import ButtonSecondary from '../components/Button';

function Footer() {
  return (

    
    <footer>
       <hr className="border-t border-lime-500 my-12" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="md:text-4xl font-extrabold text-black">
            Join us on our <span className="text-lime-500">adventures</span>
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-gray-400">
            We invite you to be a part of the HACKNITY journey. Whether you're launching your dream game, discovering new worlds, or simply connecting with fellow enthusiasts, 
            you'll find a welcoming home here. Explore our features, get started with your first host, or reach out to our team—we're excited to have you!
          </p>
          <div className="mt-8">
            <ButtonSecondary BtnTitle={"Get Started"}/>
          </div>
        </div>

        <hr className="border-t  border-lime-500 my-12" />

  
        <div className="text-center">
          <h1 className="md:text-2xl font-bold text-black ">
            For us, it's all about <span className="text-lime-400">software</span> and the <br /> visionary <span className="text-lime-400">people</span> who develop it.
          </h1>
          <div className="mt-8">
            <p className="text-base font-medium text-gray-400">
              Engaging & Community-Focused
              <br />
              <br />
              Join our community!
            </p>
            <div className="flex justify-center items-center mt-6 space-x-6">
              <a href="https://www.instagram.com/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="Instagram" className="size-8 transition-transform hover:scale-110" />
              </a>
              <a href="https://github.com/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/128/25/25231.png" alt="GitHub" className="size-8 transition-transform hover:scale-110" />
              </a>
              <a href="https://discord.com/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/128/3670/3670157.png" alt="Discord" className="size-8 transition-transform hover:scale-110" />
              </a>
              <a href="https://x.com/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="Twitter" className="size-8 transition-transform hover:scale-110" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/128/1077/1077046.png" alt="YouTube" className="size-8 transition-transform hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-t border-lime-500 my-12" />

       
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="w-full text-center">
            <h1 className="text-lime-400 text-4xl font-extrabold ">HACKNITY</h1>
            <p className="mt-2 text-sm text-gray-500"> © 2025 HACKNITY. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;