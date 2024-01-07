import { MdOutlineNavigateNext } from "react-icons/md";

const AboutMe = () => {
  return (
    <div className=" lg:h-[80vh] mx-auto bg-about lg:bg-no-repeat lg:bg-right-top">
      <div className="flex flex-col lg:flex-row h-full items-center justify-center ">
        {/* image */}
        <div className="mb-[30px] mt-[30px] lg:mt-0">
          <img
            src="/brandonimage.png"
            alt=""
            className="h-[220px] md:h-[400px] lg:h-[400px] rounded-full"
          />
        </div>
        {/* left side about me */}
        <div className="lg:ml-[50px] text-semibold px-[40px] font-semibold">
          <h1 className="h1 text-4xl lg:text-7xl font-bold mb-5 lg:mb-[50px]">
            About Me
          </h1>
          <p className=" lg:max-w-[800px] lg:mb-[25px] mb-5 lg:text-xl">
            I am an industrious professional based in Costa Rica, driven by a
            relentless pursuit of excellence. Armed with a Bachelor's degree in
            Systems Engineering, I immersed myself in the world of web
            development during my academic journey. Recently, I fortified my
            skills by achieving a React certification, a testament to my
            unwavering ambition and dedication. My proactive approach, coupled
            with a robust work ethic, positions me as a dynamic candidate ready
            to excel in collaborative environments.
          </p>
          <p className="max-w-[600px] md:mb-[50px] lg:text-xl">
            Contact me for more information, I would be honored to read you very
            soon.
          </p>
          <div className="mt-[35px] mb-[40px] lg:mt-0 bg-white w-[200px] py-4 text-black font-bold border-2 border-black rounded-none hover:bg-blue-500 hover:text-white transition">
            <a
              href="https://www.linkedin.com/in/brandon-arce27/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
            >
              <p>LinkedIn</p>
              <MdOutlineNavigateNext className="cursor-pointer  text-2xl " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
