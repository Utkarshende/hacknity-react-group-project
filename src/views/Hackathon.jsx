import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Maps from "./../../public/map.png";
import Footer from "./../components/Footer";
import  Heading  from './../components/Heading';
import {CalendarDays,Timer } from 'lucide-react';
import CARDS from '../configs/Hackathonconfig';



function Hackathon( ) {
  const upcomingEvents =CARDS .slice(0, 6);
  
  const pastEvents = CARDS.slice(6, 10);

  const renderCards = (CARDS) => (
    <div className="flex flex-wrap pl-[200px] gap-y-5 gap-x-[30px] bg-gray-100">
      {CARDS.map((card) => (
        <div
          
          className="h-[300px] max-w-[500px] rounded-[20px] border-2 border-[#D1EE6B] text-center bg-white shadow-sm 
                   transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:border-[#a2e317]"
        >
          <div className="font-bold text-left mx-4.5">
           
            <h1 className="text-[#485129] text-2xl"> {card.name}</h1>
            <p className="font-extralight">Hackathon</p>
          </div>
          <img className='mx-60 h-[25px] w-[30px]' src={Maps}/>{card.location}
          <p className="cards-info">{card.city}</p>
          <p className="cards-info">Organizer = {card.organizer}</p>
          <p className="text-[#28e317]">{card.description}</p>
          <div className="flex pl-[90px] gap-y-5 gap-x-[30px] pt-5 bg-amber-300">
            <p><CalendarDays /> Start = {card.date}</p>
            <p className="cards-info"><Timer /> {card.time}</p>
            <p><Button BtnTitle="Apply Now"  /></p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Navbar openPage={"/hackathon"} />
      
      
      
      <div className="bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#485129]"></h1>
        <Heading headingTitle=" Upcoming Hackathon Events"/>
        {renderCards(upcomingEvents)}
      </div>

      <div>
        <Heading headingTitle=" past Hackathon Events"/>
        {renderCards(pastEvents)}
      </div>
      <Footer/>
    </div>
  );
}


export default Hackathon;
