import { SiJavascript } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";

import {
  SiVisualstudiocode,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const Project = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center bg-about lg:bg-no-repeat lg:bg-right-top">
      {/* Main div */}
      <div className="mb-[400px] ">
        {/* Some Text About this section */}
        <div className="max-w-[300px] md:max-w-[550px] lg:max-w-[1024px] mx-auto mb-[100px] lg:mt-0 animate__animated animate__fadeInDown">
          <h2 className="text-5xl md:text-7xl font-bold  text-center mt-[170px]">
            Projects
          </h2>
          <p className="lg:mb-[170px] lg:mt-[15px] text-2xl  lg:text-3xl text-center px-[20px] lg:px-0">
            Here are some of my projects, that I have worked on recently.And
            ongoing projects.
          </p>
        </div>

        {/* One */}
        {/* Element img right - text left */}
        <div className="flex  flex-col items-center lg:flex-row gap-x-[90px] mb-[40px] lg:mt-[170px] px-[20px] lg:px-0">
          {/* image */}
          <div className=" ">
            <img
              src="movieapp.png"
              alt=""
              className="rounded-lg object-cover w-[350px] h-[250px] md:w-[550px] md:h-[450px] lg:w-[850px] lg:h-[650px] "
            />
          </div>
          {/* Text and others */}
          <div className="flex flex-col justify-center mt-[30px] lg:mt-0 ">
            {/* small title */}
            <h3 className="text-green-500 font-bold uppercase text-[17px]">
              Movie App
            </h3>
            {/* Big title explaination */}
            <div className="max-w-[350px] md:max-w-[550px] lg:max-w-[400px]">
              <h1 className="font-semibold mb-5 text-left lg:text-xl">
                Web application built using ReactJS, Typescript and TailwindCSS.
                The application retrieves movies from an API and displays them
                in a list. The user can search for a movie by title, rate it,add
                it to his favorites and see the details of the movie. It uses a
                BaaS (Firebase) to handle general data with firestore and
                authentication by email and google.
              </h1>
              {/* Techno use to do this one */}
              <div className="flex justify-spaceAround  my-2 gap-x-5 mb-5">
                <FaReact className="cursor-pointer transition ease-in-out duration-500 text-blue-500 text-4xl" />
                <SiTypescript className="cursor-pointer transition ease-in-out duration-500 text-blue-500 text-4xl" />
                <SiJavascript className="cursor-pointer transition ease-in-out duration-500 text-yellow-500 text-4xl" />
                <IoLogoFirebase className="cursor-pointer transition ease-in-out duration-500 text-yellow-500 text-4xl" />
                <SiTailwindcss className="cursor-pointer transition ease-in-out duration-500 text-green-500 text-4xl" />
                <AiFillGithub className="cursor-pointer transition ease-in-out duration-500 text-black text-4xl" />
              </div>
              {/* See */}
              <a
                href="https://movieproject-wheat.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:border-b transition hover:border-b-black duration-75 text-md "
              >
                Go to the website
              </a>
            </div>
          </div>
        </div>
        {/* End One */}

        {/* Two */}
        {/* Element img right - text left */}
        <div className="flex  flex-col items-center lg:flex-row gap-x-[90px] mb-[40px] lg:mt-[170px] px-[20px] lg:px-0">
          {/* Text and others */}
          <div className="flex flex-col justify-center mt-[30px]  mb-5 lg:mt-0  ">
            {/* small title */}
            <h3 className="text-red-500 font-bold uppercase text-[17px]">
              Cafe Don Luis Website
            </h3>
            {/* Big title explaination */}
            <div className="max-w-[350px] md:max-w-[550px] lg:max-w-[400px]">
              <h1 className="font-semibold mb-5 text-left lg:text-xl">
                This is an ongoing project/webpage, to present ou family coffee
                business. Its being built using Next.js framework, Typescript,
                Tailwindcss. With the website we are trying to reach more
                customers and make our business more visible. Also our intention
                is to show where our coffee comes from, how we produce and our
                clients.
              </h1>
              {/* Techno use to do this one */}
              <div className="flex justify-spaceAround  my-2 gap-x-5 mb-5">
                <FaReact className="cursor-pointer transition ease-in-out duration-500 text-blue-500 text-4xl" />
                <TbBrandNextjs className="cursor-pointer transition ease-in-out duration-500 text-black text-4xl" />
                <SiTypescript className="cursor-pointer transition ease-in-out duration-500 text-blue-400 text-4xl" />
                <SiTailwindcss className="cursor-pointer transition ease-in-out duration-500 text-green-500 text-4xl" />
                <AiFillGithub className="cursor-pointer transition ease-in-out duration-500 text-black text-4xl" />
              </div>
              {/* See */}
              {/* <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:border-b transition hover:border-b-black duration-75 text-md "
              >
                See more
              </a> */}
              <p>
                Web page not available yet (Currently in development process)
              </p>
            </div>
          </div>
          {/* image */}
          <div className="">
            <img
              src="/coffee.JPG"
              alt=""
              className="rounded-lg object-cover w-[350px] h-[250px] md:w-[550px] md:h-[450px] lg:w-[850px] lg:h-[650px]"
            />
          </div>
        </div>
        {/* End Two */}
      </div>
    </div>
  );
};

export default Project;
