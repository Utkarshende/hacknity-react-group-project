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
  <div className="flex flex-wrap gap-y-5 gap-x-6  sm:pl-10 md:pl-20 lg:pl-[10px] ">
    {CARDS.map((card, index) => (
      <div
        key={index}
        className=" sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-20px)] h-auto rounded-[20px] border-2 border-[#D1EE6B] 
                   text-left bg-white shadow-sm p-4 transition-transform duration-300 transform 
                   hover:scale-105 hover:shadow-xl hover:border-[#a2e317]"
      >
        <div className="font-bold">
          <h1 className="text-[#485129] text-2xl">{card.name}</h1>
          <p className="font-extralight">Hackathon</p>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <img className="h-[25px] w-[30px]" src={Maps} alt="location icon" />
          <span className="text-sm text-gray-600">{card.location}</span>
        </div>

        <p className=" text-sm text-gray-700 mt-1">{card.city}</p>
        <p className=" text-sm text-gray-700">Organizer: {card.organizer}</p>
        <p className="text-[#28e317] mt-2">{card.description}</p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 bg-amber-300 p-3 rounded-md mt-4">
          <p className="text-sm flex items-center gap-1">
            <CalendarDays /> Start: {card.date}
          </p>
          <p className="cards-info text-sm flex items-center gap-1">
            <Timer /> {card.time}
          </p>
          <Button BtnTitle="Apply Now" />
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

