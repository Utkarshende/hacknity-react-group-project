import React from "react";
import Navbar from './../components/Navbar'
import Footer from './../components/Footer'
import { Calendar, Check, CircleCheck, MapPin } from "lucide-react";

function Dashboard() {

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 text-gray-800 font-sans px-26 py-4 flex flex-col gap-10">
        <div className="p-5 bg-white rounded-2xl shadow-md">
          <input
            type="search"
            placeholder="🔍 Type to begin the search"
            className="w-full h-14 px-8 text-lg bg-gray-100 border border-gray-300 rounded"
          />
        </div>

        <div className="flex gap-8 w-full">
          <div className="w-[70%] h-[530px] bg-white rounded-2xl shadow-md overflow-hidden">
            <img
              src="https://devfolio.co/_next/image?url=%2Fbrand-blocks%2Fonchain-summer-awards%2Fdiscover.webp&w=1440&q=100"
              alt="event"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="w-[30%] h-[530px] bg-white rounded-2xl shadow-md px-5 box-border">
            <h1 className="font-extrabold text-4xl text-gray-800 mt-5">Onchain Summer Awards</h1>
            <h4 className="text-gray-500 font-medium mt-4 mb-5">Build. Launch. Scale. Earn.</h4>

            <div className="h-32 border-l-4 border-blue-600 rounded pl-4 mt-10 mb-5">
              <p className="text-xm font-bold text-gray-400 uppercase tracking-widest">Runs from</p>
              <span className="text-xl font-bold block mb-2">Jul 9 - Aug 26, 2025</span>
              <p className="text-xm font-bold text-gray-400 uppercase tracking-widest">Happening</p>
              <span className="text-xl font-bold block">Online</span>
            </div>

            <div className="bg-blue-100 p-4 rounded-xl mb-5">
              <span className="text-xm font-bold uppercase tracking-widest text-blue-400">Applications close in</span>
              <p className="text-lg font-bold text-blue-700 mt-1 animate-pulse">30d:9h:56m</p>
            </div>

            <button className="w-full h-14 bg-blue-600 text-white rounded-md font-semibold text-lg hover:bg-blue-700 transition duration-300">
              Go to Application
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Upcoming Hackathons</h2>
            <div className="flex flex-col gap-5">
              <div className="relative p-5 border border-gray-200 rounded-xl bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">MumbaiHacks 2025</h3>
                <p className="text-sm text-gray-500">📍 Online | 🗓 Aug 12 – Aug 31</p>
                <span className="absolute top-5 right-5 px-3 py-1 text-white text-xs font-semibold rounded-full bg-green-500">
                  Registration Open
                </span>
              </div>
              <div className="relative p-5 border border-gray-200 rounded-xl bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">AI Builders Fest</h3>
                <p className="text-sm text-gray-500">📍 Pune | 🗓 Sep 5 – Sep 10</p>
                <span className="absolute top-5 right-5 px-3 py-1 text-white text-xs font-semibold rounded-full bg-red-600">
                  Registration Closed
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Currently Participating</h2>
            <div className="flex flex-col gap-5">
              <div className="relative p-5 border border-gray-200 rounded-xl bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Onchain Summer Awards</h3>
                <p className="text-sm text-gray-500">📍 Online | 🗓 Jul 9 – Aug 26</p>
                <span className="absolute top-5 right-5 px-3 py-1 text-white text-xs font-semibold rounded-full bg-blue-500">
                  In Progress
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Past Participation</h2>
            <div className="flex flex-col gap-5">
              <div className="relative p-5 border border-gray-200 rounded-xl bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Web3 Weekend Jam</h3>
                <p className="text-sm text-gray-500">📍 Mumbai | 🗓 May 1 – May 5</p>
                <span className="absolute top-5 right-5 px-3 py-1 text-white text-xs font-semibold rounded-full bg-gray-500">
                  Completed
                </span>
              </div>
              <div className="relative p-5 border border-gray-200 rounded-xl bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">React Sprint</h3>
                <p className="text-sm text-gray-500">📍 Online | 🗓 Mar 10 – Mar 20</p>
                <span className="absolute top-5 right-5 px-3 py-1 text-white text-xs font-semibold rounded-full bg-gray-500">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>




        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-500">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Calendar className="text-blue-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Upcoming Hackathons</h2>
            </div>

            <div className="space-y-5">
              <div className="relative p-5 border border-gray-200 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 transition duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">MumbaiHacks 2025</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <MapPin className="h-4" />
                  Online |
                  <Calendar className="h-4" />
                  Aug 12 – Aug 31
                </p>
                <span className="absolute top-5 right-5 px-3 py-1 text-white text-xs font-semibold rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-sm">
                  Registration Open
                </span>
              </div>

              <div className="relative p-5 border border-gray-200 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 transition duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">AI Builders Fest</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <MapPin className="h-4" />
                  Pune |
                  <Calendar className="h-4" />
                  Sep 5 – Sep 10
                </p>
                <span className="absolute top-5 right-5 px-3 py-1 text-white text-xs font-semibold rounded-full bg-gradient-to-r from-red-400 to-red-600 shadow-sm">
                  Registration Closed
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-purple-500">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <CircleCheck className="h-8 text-purple-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Currently Participating</h2>
            </div>

            <div className="space-y-5">
              <div className="relative p-5 border border-gray-200 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-purple-50 transition duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Onchain Summer Awards</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <MapPin className="h-4" />
                  Online |
                  <Calendar className="h-4" />
                  Jul 9 – Aug 26
                </p>
                <span className="absolute top-5 right-5 px-3 py-1 text-white text-xs font-semibold rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-sm">
                  In Progress
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-indigo-500">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                <Check className="h-8 text-indigo-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Past Participation</h2>
            </div>

            <div className="space-y-5">
              <div className="relative p-5 border border-gray-200 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-indigo-50 transition duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Web3 Weekend Jam</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <MapPin className="h-4" />
                  Mumbai |
                  <Calendar className="h-4" />
                  May 1 – May 5
                </p>
                <span className="absolute top-5 right-5 px-3 py-1 text-white text-xs font-semibold rounded-full bg-gradient-to-r from-gray-400 to-gray-600 shadow-sm">
                  Completed
                </span>
              </div>

              <div className="relative p-5 border border-gray-200 rounded-xl bg-gradient-to-r from-gray-50 to-white hover:from-indigo-50 transition duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">React Sprint</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <MapPin className="h-4" />
                  Online |
                  <Calendar className="h-4" />
                  Mar 10 – Mar 20
                </p>
                <span className="absolute top-5 right-5 px-3 py-1 text-white text-xs font-semibold rounded-full bg-gradient-to-r from-gray-400 to-gray-600 shadow-sm">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
