import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MEMBERS } from '../configs/Aboutconfig';
import Aboutcard from '../components/cards/Aboutcard';
import Heading from '../components/Heading';

function About() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen ">
      <Navbar openPage={"/about"} />
      <main className="mx-auto p-4 lg:px-12">

      
        <div className="text-center md:text-left my-6">
        
        <h1 className='text-3xl font-bold py-2 text-gray-800 text-center'> We're not just a team. We're a guild of <span className='text-lime-500'>legendary developers!  </span></h1>
          
          <p className="text-lg  md:text-xl text-center justify-center items-center text-gray-600">
            Welcome to <span className='text-amber-500'>HACKNITY</span>, where code is our magic and coffee is our fuel. We're on a quest to build the ultimate platform for game creators and players, making online and offline hosting an adventure, not a chore.
          </p>
        </div>

        <section className='my-1 bg-gray-50 p-8 rounded-xl shadow-lg'>
          <h2 ><Heading headingTitle={"The HACKNITY Manifesto"} customStyle={"mt-[-20px] md:text-[25px]"} /></h2>
          <div className="text-md text-gray-600 space-y-6">
            <p className='flex items-start'>
              <span className='text-3xl text-amber-500 mr-4 animate-bounce'>✨</span>
              <span>Our mission is simple: to provide an epic platform that's <span className='text-lime-500'>intuitive</span>, robust, and community-driven. We're here to bridge the gap between game developers and their players, whether they're battling online or conquering a single-player epic.</span>
            </p>
            <p className='flex items-start'>
              <span className='text-3xl text-amber-500 mr-4 animate-bounce'>🤝</span>
              <span>We're committed to <span className='text-amber-500'>Empowering Creators</span> by giving you the tools to host your games with ease. No more tangled wires or confusing dashboards—just pure, creative flow.</span>
            </p>
            <p className='flex items-start'>
              <span className='text-3xl text-amber-500 mr-4 animate-bounce'>⚡</span>
              <span>We're obsessed with <span className='text-lime-500'>Enhancing Player Experience</span>. We promise stable, lightning-fast servers and a diverse gaming universe for players worldwide. Say goodbye to lag!</span>
            </p>
            <p className='flex items-start'>
              <span className='text-3xl text-amber-500 mr-4 animate-bounce'>🌐</span>
              <span>Finally, we're all about <span className='text-amber-500'>Fostering Community</span>. Think of us as your digital tavern—a place for developers to share wisdom, for players to find their next favorite game, and for everyone to connect and build something awesome together.</span>
            </p>
          </div>
        </section>

        <hr className='border-t-2 border-dashed border-gray-400 my-8' />

       
        <section className="my-8">
          <Heading headingTitle={"Your Game's New Home"} customStyle={"md:text-[25px]"}/>
          <p className='text-md font-light text-gray-600 text-center mb-8 max-w-3xl mx-auto'>
            HACKNITY is a magical toolbox for all your hosting needs. Here's a glimpse into the spells we've crafted to help you out:
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          
            <div className='bg-gray-100 p-8 rounded-lg shadow-xl border-2 border-transparent hover:border-lime-500 transition-all duration-300 transform hover:-translate-y-2'>
              <h1 className='text-2xl font-extrabold text-lime-500 mb-2'>
                For Online Games
              </h1>
              <div className='text-md text-gray-700 space-y-4 font-light'>
                <p>
                  <span className='text-black font-semibold flex items-center mb-2'>
                    <span className='text-2xl text-lime-500 mr-2'>🛡️</span>Robust Server Infrastructure:
                  </span>
                  Our infrastructure is a digital fortress, ready for any player stampede. It scales instantly, so your game never crashes under pressure.
                </p>
                <p>
                  <span className='text-black font-semibold flex items-center mb-2'>
                    <span className='text-2xl text-lime-500 mr-2'>🚀</span>Easy Deployment & Management:
                  </span>
                  Our dashboard is so simple, you can get your game online faster than a speed-run. No need for a tech wizard—just click, upload, and go!
                </p>
              </div>
            </div>
            
            <div className='bg-gray-100 p-8 rounded-lg shadow-xl border-2 border-transparent hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-2'>
              <h1 className='text-2xl font-extrabold mb-2 text-amber-500'>
                For Offline Games
              </h1>
              <div className='text-md text-gray-700 space-y-4 font-light'>
                <p>
                  <span className='text-black font-semibold flex items-center mb-2'>
                    <span className='text-2xl text-amber-500 mr-2'>💾</span>Secure Content Delivery:
                  </span>
                  We'll deliver your game files faster than you can say "offline adventure." Our secure hosting ensures a smooth and safe download every time.
                </p>
                <p>
                  <span className='text-black font-semibold flex items-center mb-2'>
                    <span className='text-2xl text-amber-500 mr-2'>🔄</span>Version Control & Updates:
                  </span>
                  Pushing an update is as easy as a new patch. Manage different versions and get your latest masterpiece out to your fans without any fuss.
                </p>
              </div>
            </div>
          </div>
        </section>

       
        <section className="my-16">
          <hr className="border-t-2 border-dashed border-gray-300 my-12" />
          
          <Heading headingTitle={"Meet Our HACKNITY Team"} customStyle={"mt-[-20px] md:text-[25px]"}/>
          
          <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
            These are the heroes behind the keyboards, the architects of our code, and the masterminds of your hosting experience. They may seem normal, but they're secretly powered by caffeine and brilliant ideas.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center' >
            {MEMBERS.map((individualMember, index) => {
              const { profilephoto, noun, role, social } = individualMember;
              return (
                <Aboutcard
                  key={index}
                  profilephoto={profilephoto}
                  noun={noun}
                  role={role}
                  social={social}
                />
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;