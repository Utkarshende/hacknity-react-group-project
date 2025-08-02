import React from 'react';

function Aboutcard({ profilephoto, noun, role, social }) {
  return (
    <div
      className='relative bg-gray-100 border-2 border-gray-200 p-8 rounded-3xl flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:scale-105 hover:border-amber-500'
    >
     
      <div className="relative mb-8 group">
        <img
          src={profilephoto}
          className='size-48 rounded-full border-2 border-amber-500 p-1 transition-transform duration-300 group-hover:scale-105'
          alt={`${noun}'s profile`}
        />
        <p className='absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 py-2 px-6 bg-gray-50 rounded-full text-amber-600 text-lg font-bold shadow-md tracking-wide border-2 border-amber-500'>
          {noun}
        </p>
      </div>

      <p className='text-gray-700 text-md font-medium mt-6'>{role}</p>
      
      <div className='flex mt-6 gap-4'> 
        {social.map((socialLink, index) => (
          <a
            href={socialLink.url}
            target='_blank'
            rel='noopener noreferrer'
            key={index}
            className='transition-transform duration-300 hover:rotate-12'
          >
            <img
              src={socialLink.icon}
              className='size-10 bg-gray-200 p-2 rounded-full border-2 border-gray-300 hover:border-lime-500 transition-all duration-300'
              alt={`social icon`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Aboutcard;