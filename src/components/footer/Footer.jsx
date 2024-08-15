import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 data-aos="zoom-out" className=" font-bold text-5xl sm:text-3xl">
          Contact
        </h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="https://github.com/emredursunn"
            target="_blank"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <IoLogoGithub className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Github</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="https://www.linkedin.com/in/emredursunn"
            target="_blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoLinkedin className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Linkedin</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="mailto:emredursun908@gmail.com"
            target="_top"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <SiGmail className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Mail</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
