import { FaGithub, FaLinkedin } from "react-icons/fa";
import Cv from "../assets/cv.pdf";

import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
  return (
    <div className="grid lg:grid-cols-2  md:h-[90vh]">
      {/* Right Side */}
      <div className="flex flex-col justify-center items-center bg-green-500">
        {/* Image */}
        <div className="animate__animated animate__fadeInLeft ">
          <img
            src="/brandonsnow.png"
            alt=""
            className="rounded-full object-cover w-[200px] h-[250px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[500px]"
          />
        </div>
      </div>
      {/* End Right side */}
      {/* Left Side */}
      <div className="flex flex-col justify-between bg-home lg:bg-no-repeat lg:bg-right-top">
        <div className="mx-auto   px-[40px] lg:px-[70px] w-full animate__animated animate__fadeInRight">
          {/* Big Title */}
          <div className="mt-[40px]  md:mt-[0px]">
            <h1 className="h1 md:text-8xl text-6xl font-bold md:mt-[90px]">
              I Am
            </h1>
            <h1 className="h1 md:text-8xl text-6xl font-bold">Brandon Arce</h1>
          </div>
          {/* sub title */}
          <p className="mt-[40px] md:mt-[40px] font-semibold md:max-w-[580px] lg:max-w-[680px] lg:text-xl">
            Software developer, passionate about technology and web development.
            I am from Costa Rica and I have a flair for crafting visually
            appealing and user-friendly web experiences. I also have experience
            working as Azure Developer Support Engineer and I currently work in
            this role in which I have aquired a lot of knowledge about Azure
            Cloud and its services.
          </p>
          {/* Button bottom */}
          <div className="md:mt-[20px] flex items-center ">
            {/* Contact Me */}
            <div className="mt-[25px] bg-white w-[200px]   py-4 text-black font-bold border-2 border-black hover:border-white rounded-none hover:bg-green-500 hover:text-white transition  ">
              <a
                href={Cv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center"
              >
                <p>Resume</p>
                <AiOutlineDownload className="cursor-pointer   text-3xl ml-[10px]" />
              </a>
            </div>
          </div>
          {/* Little Stats */}
          <div className="md:mt-[50px] mt-[40px] ">
            {/* Contacts */}
            <div className="md:mt-[40px] mt-[40px] ">
              <h3 className="font-bold text-3xl">Contact</h3>
              <h3 className="font-semibold md:mt-[5px]">
                brandonarce2712@gmail.com
              </h3>
            </div>
          </div>
        </div>

        {/* left Footer */}
        <div className=" bg-black w-full  py-[40px] mt-[50px] ">
          <div className="flex md:justify-center items-center flex-col lg:flex-row gap-x-[100px] w-full  px-[40px] md:px-[50px]">
            {/* Social Network */}
            <div className="flex justify-spaceAround  my-2 gap-x-5 ">
              {/* Github */}
              <a
                href="https://github.com/BrandonArce27"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="cursor-pointer hover:text-green-500 transition ease-in-out duration-500 text-white text-4xl" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/brandon-arce27/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="cursor-pointer hover:text-green-500 transition ease-in-out duration-500 text-white text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
