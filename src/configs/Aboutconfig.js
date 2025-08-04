import RavikantProfile from '../../src/assets/RavikantPP.png'
import GajananProfile from '../../src/assets/GajananPP.png'
import AyushProfile from '../../src/assets/AyushPP.png'
import SrushtiProfile from '../../src/assets/SrushtiPP.png'
import UtkarshaProfile from '../../src/assets/UtkarshaPP.png'
import MaheshProfile from '../../src/assets/MaheshPP.png'


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
  export {MEMBERS};