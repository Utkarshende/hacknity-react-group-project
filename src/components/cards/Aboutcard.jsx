import React from 'react';

function Aboutcard({ profilephoto, noun, role, social }) {
  return (
    <div
      className='relative border-gray-300 p-8 rounded-3xl flex flex-col items-center text-center shadow- transition-all duration-300 hover:scale-105 hover:border-amber-500 border-1'
    >
     
      <div className="relative mb-6 ">
        <img
          src={profilephoto}
          className='size-55 rounded-full border-2 border-amber-500 p-4 transition-transform duration-300 hover:scale-105'
          alt={`${noun}'s profile`}
        />
        <p className='absolute py-2 px-4 -mt-2 left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-2xl text-amber-600 text-lg font-bold shadow-md tracking-wider border-1 border-amber-500'>
          {noun}
        </p>
      </div>

      <p className='text-gray-700 text-md font-medium mt-6'>{role}</p>
      
      <div className='flex mt-6 gap-4'> 
        {social.map((socialLink, index) => (
          <a
            href={socialLink.url}
            target='_blank'
            key={index}
          >
            <img
              src={socialLink.icon}
              className='size-12 bg-gray-200 p-2 rounded-full border-2 border-gray-300 hover:border-amber-500'
              alt={`social icon`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Aboutcard;