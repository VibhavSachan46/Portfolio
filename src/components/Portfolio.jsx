import React from "react";
import google from "../assets/projects/googleBanner.jpg"
import blog from "../assets/projects/blogBanner.jpg"
import todo from "../assets/projects/todoBanner.jpg"
import sn from "../assets/projects/SN.jpg"
import file from "../assets/projects/file.jpeg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: google,
    },
    {
      id: 2,
      src: blog,
    },
    {
      id: 3,
      src: todo,
    },
    {
      id: 4,
      src: sn,
    },
    {
      id: 5,
      src: file,
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-richblack-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="grayscale-[50%] shadow-md shadow-gray-600 rounded-lg hover:scale-105 hover:filter-none transform transition-transform duration-330 ease-in-out"

>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
