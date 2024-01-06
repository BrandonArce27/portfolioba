import React from "react";
import {
  SiVisualstudiocode,
  SiTailwindcss,
  SiMicrosoftazure,
  SiTypescript,
  SiNotion,
  SiTerraform,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillGithub, AiOutlineConsoleSql } from "react-icons/ai";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { FaReact, FaHtml5, FaCss3, FaTrello } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center pb-[200px] lg:px-[200px]">
      {/* Main div */}
      <div className="h-screen mb-[400px] ">
        {/* Some Text About this section */}
        <div className="max-w-[300px] md:max-w-[550px] lg:max-w-[1024px] mx-auto mb-[100px] lg:mt-0 animate__animated animate__fadeInDown">
          <h2 className="text-5xl md:text-7xl font-bold  text-center mt-[170px]">
            Skills
          </h2>
          <p className="lg:mb-[170px] lg:mt-[15px] text-2xl  lg:text-3xl text-center px-[20px] lg:px-0">
            Discover the technologies , frameworks and tools that I use.
          </p>
        </div>

        {/* Section thinks */}
        <div className="grid lg:grid-cols-1 lg:w-full">
          {/* Technologies /Coding tools */}
          <div className="px-[50px] p-[30px] hover:bg-green-500 hover:shadow-lg   hover:text-white transition duration-600 text-black  animate__animated animate__fadeInDown">
            <h3 className="text-center font-bold text-3xl">TECHNOLOGIES</h3>
            <hr className="mt-[15px]" />
            {/* Elements */}
            <div className="w-full grid lg:grid-cols-3  gap-x-[60px]">
              {/* One Item */}
              {/* Html*/}
              <div className="flex flex-col items-center mt-[30px]">
                <FaHtml5 className=" transition ease-in-out duration-500 text-orange-500 text-6xl my-[15px]" />
                <p className="text-left">HTML </p>
              </div>
              {/*Css */}
              <div className="flex flex-col items-center mt-[30px]">
                <FaCss3 className=" transition ease-in-out duration-500 text-blue-900 text-6xl my-[15px]" />
                <p className="text-left">CSS</p>
              </div>
              {/* Javascript */}
              <div className="flex flex-col items-center mt-[30px] ">
                <IoLogoJavascript className=" transition ease-in-out duration-500 text-yellow-300 text-6xl my-[15px] " />
                <p className="text-left">Javascript</p>
              </div>
              {/* React */}
              <div className="flex flex-col items-center mt-[30px] ">
                <FaReact className=" transition ease-in-out duration-500 text-blue-300 text-6xl my-[15px] " />
                <p className="text-left">React</p>
              </div>
              {/* Typescript */}
              <div className="flex flex-col items-center mt-[30px] ">
                <SiTypescript className=" transition ease-in-out duration-500 text-blue-300 text-6xl my-[15px] " />
                <p className="text-left">Typescript</p>
              </div>
              {/* Next JS */}
              <div className="flex flex-col items-center mt-[30px] ">
                <TbBrandNextjs className=" transition ease-in-out duration-500 text-black text-6xl my-[15px] " />
                <p className="text-left">Next.js</p>
              </div>
              {/* Tailwind */}
              <div className="flex flex-col items-center mt-[30px] ">
                <SiTailwindcss className=" transition ease-in-out duration-500 text-green-400 text-6xl my-[15px] " />
                <p className="text-left">Tailwindcss</p>
              </div>
              {/* SQL */}
              <div className="flex flex-col items-center mt-[30px] ">
                <AiOutlineConsoleSql className=" transition ease-in-out duration-500 text-red-500 text-6xl my-[15px]" />
                <p className="text-left">SQL</p>
              </div>
              {/* Terraform */}
              <div className="flex flex-col items-center mt-[30px] ">
                <SiTerraform className=" transition ease-in-out duration-500 text-purple-400 text-6xl my-[15px] " />
                <p className="text-left">Terraform</p>
              </div>
            </div>
          </div>
          {/* Other tools I use.  */}
          <div className="px-[50px] p-[30px] hover:bg-green-500 hover:shadow-lg   hover:text-white transition duration-600 text-black  animate__animated animate__fadeInDown">
            <h3 className="text-center font-bold text-3xl  text-blue-500">
              OTHER TOOLS/TECHNOLOGIES
            </h3>
            <hr className="mt-[15px]" />
            {/* Elements */}
            <div className="w-full grid lg:grid-cols-3  gap-x-[60px]">
              {/* One Item */}
              {/* Azure*/}
              <div className="flex flex-col items-center mt-[30px]">
                <SiMicrosoftazure className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-left">Azure</p>
              </div>
              {/* Firebase */}
              <div className="flex flex-col items-center mt-[30px]">
                <IoLogoFirebase className=" transition ease-in-out duration-500 text-yellow-300 text-6xl my-[15px]" />
                <p className="text-left">Firebase</p>
              </div>
              {/* Github */}
              <div className="flex flex-col items-center mt-[30px] ">
                <AiFillGithub className=" transition ease-in-out duration-500 text-black text-6xl my-[15px]" />
                <p className="text-left">Github</p>
              </div>
              {/* VS Code */}
              <div className="flex flex-col items-center mt-[30px] ">
                <SiVisualstudiocode className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-left">Visual Studio Code</p>
              </div>
              {/* Trello */}
              <div className="flex flex-col items-center mt-[30px] ">
                <FaTrello className=" transition ease-in-out duration-500 text-blue-500 text-6xl my-[15px]" />
                <p className="text-left">Trello</p>
              </div>
              {/* Notion */}
              <div className="flex flex-col items-center mt-[30px] ">
                <SiNotion className=" transition ease-in-out duration-500 text-black text-6xl my-[15px]" />
                <p className="text-left">Notion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
