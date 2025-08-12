import RavikantProfile from '../../src/assets/AboutImages/ravikantprofile.png'
import GajananProfile from '../../src/assets/AboutImages/gajananprofile.png'
import AyushProfile from '../../src/assets/AboutImages/ayushprofile.png'
import SrushtiProfile from '../../src/assets/AboutImages/srushtiprofile.png'
import UtkarshaProfile from '../../src/assets/AboutImages/utkarshaprofile.png'
import MaheshProfile from '../../src/assets/AboutImages/maheshprofile.png'


const socialUrl= [
        { url: 'https://peerlist.io/scroll', icon: 'https://www.roadtocode.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeerlist.6d09d3a9.png&w=64&q=75' },
        {  url: 'https://www.linkedin.com/in/utkarsha-shende-344b57231/', icon: 'https://www.roadtocode.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flinkedin.e3b667c6.png&w=64&q=75' },
        {  url: 'https://cdn-icons-png.flaticon.com/128/25/25231.png', icon: 'https://www.roadtocode.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgithub.7a02bc24.png&w=64&q=75' }
      ];

const MEMBERS= [
      {
      noun: 'Gajanan ', 
      role: 'Manager', 
      profilephoto: GajananProfile, 
      social: socialUrl
    },
    {
      noun: 'Mahesh ', 
      role: ' Team Leader', 
      profilephoto: MaheshProfile, 
      social:socialUrl
    },
    {
      noun: 'Srushti ', 
      role: ' Developer', 
      profilephoto: SrushtiProfile, 
      social:socialUrl
    },
   {
      noun: 'Ravikant ', 
      role: 'Developer', 
      profilephoto: RavikantProfile, 
      social: socialUrl
    },
       {
      noun: 'Ayush ', 
      role: 'UI/UX Designer', 
      profilephoto: AyushProfile, 
      social: socialUrl
    },
      {
      noun: 'Utkarsha ', 
      role: 'Developer', 
      profilephoto:UtkarshaProfile, 
      social: socialUrl}
  
  ];

const ABOUT_MANIFESTO = [
  {
    icon: '✨',
    title: 'Our Mission',
    description: 'Our mission is simple: to provide an epic platform that\'s intuitive, robust, and community-driven. We\'re here to bridge the gap between game developers and their players, whether they\'re battling online or conquering a single-player epic.'
  },
  {
    icon: '🤝',
    title: 'Empowering Creators',
    description: 'We\'re committed to empowering creators by giving you the tools to host your games with ease. No more tangled wires or confusing dashboards—just pure, creative flow.'
  },
  {
    icon: '⚡',
    title: 'Enhancing Player Experience',
    description: 'We\'re obsessed with enhancing player experience. We promise stable, lightning-fast servers and a diverse gaming universe for players worldwide. Say goodbye to lag!'
  },
  {
    icon: '🌐',
    title: 'Fostering Community',
    description: 'Finally, we\'re all about fostering community. Think of us as your digital tavern—a place for developers to share wisdom, for players to find their next favorite game, and for everyone to connect and build something awesome together.'
  },
];



  export {MEMBERS , ABOUT_MANIFESTO};