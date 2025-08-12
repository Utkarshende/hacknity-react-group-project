import React from 'react';
import HacknityLogo from '../../src/assets/logo.png';
import { Link } from 'react-router';
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>

    
          <div className='text-center lg:text-left mb-10 lg:mb-0 lg:w-1/3'>
            <div className='flex justify-center lg:justify-start items-center mb-4'>
              <img className='h-8 mr-2' src={HacknityLogo} alt='Hacknity Logo' />
              <h2 className='text-2xl font-extrabold text-white'>
                HACKNITY
              </h2>
            </div>
            <p className='mt-4 text-base text-gray-400 max-w-md mx-auto lg:mx-0'>
              Join our community and be a part of the HACKNITY journey. Whether you're a builder, a dreamer, or a gamer, you'll find a welcoming home here.
            </p>
            <div className='flex justify-center lg:justify-start space-x-4 mt-6'>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

         
          <div className='flex flex-col sm:flex-row justify-around flex-grow text-center lg:text-left'>
            <div className='mb-6 sm:mb-0'>
              <h3 className='text-lg font-semibold text-white mb-4'>Explore</h3>
              <ul className='space-y-2 text-gray-400'>
                <li><Link to='/' className='hover:text-lime-500 transition-colors duration-300'>Home</Link></li>
                
                <li><Link to='/hackathon' className='hover:text-lime-500 transition-colors duration-300'>Hackathon</Link></li>
                 <li><Link to='/dashboard' className='hover:text-lime-500 transition-colors duration-300'>Dashboard</Link></li>
              </ul>
            </div>

            <div className='mb-6 sm:mb-0'>
              <h3 className='text-lg font-semibold text-white mb-4'>Learn</h3>
              <ul className='space-y-2 text-gray-400'>
                <li><a href='#' className='hover:text-lime-500 transition-colors duration-300'>Troubleshooting</a></li>
                <li><a href='#' className='hover:text-lime-500 transition-colors duration-300'>Technical & Networking Skills</a></li>
                <li><a href='#' className='hover:text-lime-500 transition-colors duration-300'>Community Management</a></li>
              </ul>
            </div>

               <div className='mb-6 sm:mb-0'>
              <h3 className='text-lg font-semibold text-white mb-4'>Company</h3>
              <ul className='space-y-2 text-gray-400'>
                <li><Link to='/about' className='hover:text-lime-500 transition-colors duration-300'>About Us</Link></li>
                <li><Link to='/contact' className='hover:text-lime-500 transition-colors duration-300'>Contact</Link></li>
                <li><Link to='/discover' className='hover:text-lime-500 transition-colors duration-300'>Discover</Link></li>
              </ul>
            </div>


          </div>
        </div>

        <hr className='border-gray-700 my-8' />
        <div className='text-center text-gray-500'>
          <p> @2025 Hacknity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;