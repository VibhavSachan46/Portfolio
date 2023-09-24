import React from "react";
import HeroImage from "../assets/heroImage.png";
import bg from "../assets/bg.jpg";
import about from "../assets/about.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "./Home.css"
import home from "../assets/home.gif"
import TypeAnimation from "react-type-animation"
import Type from "./Type"
import Highlight from "./Highlight";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-richblack-900">
      <div className="max-w-screen-lg w-full mx-auto flex flex-col items-center justify-center h-full w-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full gap-8">
          <h1 className=" text-white flex text-5xl">
            Hi There!{" "}
            <span>
              👋🏻
            </span>
          </h1>

          <h1 className="text-white flex text-5xl gap-3">
            <span className="mr-2">I am</span>
            <Highlight text={"Vibhav Sachan"} />
          </h1>

          <div className="text-white text-5xl">
          <Highlight text={<Type />} />
            
          </div>


          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-richblue-100 cursor-pointer mt-10	"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="lg:w-[30]">
          <img
            src={about}
            alt="my profile"
            className="ml-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
