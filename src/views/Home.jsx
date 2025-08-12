import React from "react";
import Navbar from "../components/Navbar.jsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Heading from "../components/Heading.jsx";
import Button, { ButtonSecondary } from "../components/Button.jsx";
import RegisterImg from "../../src/assets/HomeImages/Registration.png";
import UpcomingEvent from "../components/UpcomingEvent.jsx";
import JoinUs from "../components/JoinUs.jsx";
import SkillSImg from "../../src/assets/HomeImages/Skills.png";
import CollaborationImg from "../../src/assets/HomeImages/Collaboration.png";
import MentorshipImp from "../../src/assets/HomeImages/Mentorship.png";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer.jsx";

function Home() {
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const errors = {};

    if (!name) {
      errors.name = "Name is required.";
    }
    if (!email) {
      errors.email = "Email is required.";
    } else if (!email.includes("@")) {
      errors.email = "Email is invalid.";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      if (errors.name) toast.error(errors.name);
      if (errors.email) toast.error(errors.email);
    }

    if (Object.keys(errors).length === 0) {
      console.log("Registration data:", { name, email });
      navigate("/login");

    }
  };
  return (
    <div>
      <Navbar openPage={"/"} />
      <div className="relative flex items-center justify-center p-8 my-30 ">
        <div className="relative text-center w-4xl">
          <div className="text-5xl md:text-7xl font-bold leading-tight mb-4 text-black">
            Welcome to <span className="px-2 rounded-xl text-orange-500  font-extrabold ">Hacknity</span>
          </div>
          <p className="text-lg md:text-lg text-gray-700 mb-8">
            Join us and unlock your potential and participate in exciting
            hackathon events.
          </p>
          <Link to="/Discover">
            <Button BtnTitle="Get Started" />
          </Link>
        </div>
      </div>

      <div className=" bg-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="md:flex justify-center gap-15 items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold  text-lime-600 mt-10 mb-5">
                We are Hacknity: A Community of Builders.
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our community is the heart of what we do. We believe in open
                communication, mutual support, and celebrating every success,
                big or small. Join a network of passionate creators who are
                building the future together.
              </p>
              <div className="grid grid-cols-1 gap-8 text-left">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-5">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">
                    Events & Workshops
                  </h3>
                  <p className="text-gray-600">
                    Participate in exclusive events, workshops, and hackathons
                    designed to help you grow.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Community"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center max-w-5xl my-25 ">
        <Heading headingTitle="Upcoming Hackathon Events" />
        <div className="flex  flex-wrap justify-center mx-4 mt-15">
          <div className="sm:w-1/2 lg:w-1/4 px-4 mb-8 transform transition duration-300 hover:scale-105 ">
            <UpcomingEvent
              SubHeading="NextGen Hack"
              Description="Get ready! Innovators collaborate on tech solutions at hackathon."
              Btn={<Button BtnTitle={<Link to="./Discover">View More</Link>} />}
             />
          </div>
          <div className="sm:w-1/2 lg:w-1/4 px-4 mb-8 transform transition duration-300 hover:scale-105" >
            <UpcomingEvent
              SubHeading="Quick Start Sprint"
              Description="Short hackathon, big ideas! From idea to innovation, fast."
              Btn={<Button BtnTitle={<Link to="./Discover">View More</Link>} />}
            />
          </div>

          <div className=" sm:w-1/2 lg:w-1/4 px-4 mb-8 transform transition duration-300 hover:scale-105">
            <UpcomingEvent
              SubHeading="Onchain Summer Awards"
              Description="Build. Launch. Scale. Earn. This summer's top web3 hackathon!"
              Btn={<Button BtnTitle={<Link to="./Discover">View More</Link>} />}
            />
          </div>

          <div className=" sm:w-1/2 lg:w-1/4 px-4 mb-8 transform transition duration-300 hover:scale-105">
            <UpcomingEvent
              SubHeading="AI Innovation Challenge"
              Description=" Team up and create a fully functional app in 48 hours. "
              Btn={<Button BtnTitle={<Link to="./Discover">View More</Link>} />}
            />
          </div>
        </div>
      </div>

      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <Heading headingTitle="Why Join Us?" />
          <div className="flex flex-wrap justify-center mx-4 mt-15">
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <JoinUs
                Alt="SkillsIcon"
                Heading="Learn New Skills"
                Description="Learn new skills, expand your knowledge, and enhance your professional journey."
                Img={SkillSImg}
              />
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <JoinUs
                Alt="CollaborationIcon"
                Heading=" Collaborate on Projects"
                Description="Connect with like-minded individuals to build innovative
                  projects and solve real-world problems."
                Img={CollaborationImg}
              />
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <JoinUs
                Alt="ExpertIcon"
                Heading="Expert Mentorship"
                Description="Get guidance from  experts and seasoned developers who
                  are ready to help."
                Img={MentorshipImp}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-7  mt-20 sm:px-6 lg:px-8">
        <div className="container mx-auto px-6 text-center">
          <Heading headingTitle="How It Works" />
          <div className="flex flex-col mx-4 my-15 lg:flex-row ">
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center shadow-lg py-5 px-2 transform transition duration-300 hover:scale-105">
                <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center border-4 border-lime-500 mb-4">
                  <span className="text-3xl font-bold text-lime-500">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Sign Up
                </h3>
                <p className="text-gray-600">
                  Create your free account <br />
                  in just a few clicks.
                </p>
              </div>
            </div>
            
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center  shadow-lg py-5 px-2 transform transition duration-300 hover:scale-105">
                <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center border-4 border-lime-500 mb-4">
                  <span className="text-3xl font-bold text-lime-500">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Explore
                </h3>
                <p className="text-gray-600">
                  Browse tutorials, quizzes, and <br />
                  projects to find what you need.
                </p>
              </div>
            </div>
            
            <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="flex flex-col items-center  shadow-lg py-5 px-2 transform transition duration-300 hover:scale-105">
                <div className="bg-white p-6 rounded-full w-20 h-20 flex items-center justify-center border-4 border-lime-500 mb-4">
                  <span className="text-3xl font-bold text-lime-500">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Start Building
                </h3>
                <p className="text-gray-600">
                  Join a community project or <br />
                  start your own and get to work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="registration" className="py-10 bg-gray-100 ">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="md:flex items-center gap-30">
            <div className="md:w-1/2">
              <img src={RegisterImg} alt="Registration" className="h-100" />
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6 text-lime-600 text-center">
                Register and Start Your Journey
              </h2>
              <form
                onSubmit={validateForm}
                className="bg-white p-8 rounded-lg shadow-xl border border-gray-200"
              >
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 ${
                      formErrors.name
                        ? "border-red-500"
                        : "bg-gray-200 border-gray-300 focus:ring-lime-500"
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className={`w-full p-4 rounded-lg border focus:outline-none focus:ring-2 ${
                      formErrors.email
                        ? "border-red-500"
                        : "bg-gray-200 border-gray-300 focus:ring-lime-500"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div className="mx-30">
                  <ButtonSecondary BtnTitle={<img src="https://cdn-icons-png.flaticon.com/128/724/724816.png" className="h-7"/>} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
