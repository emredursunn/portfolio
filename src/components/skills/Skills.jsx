import React from "react";
import ProgressBar from "../../chip/ProgressBar";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiFirebase,
  SiKotlin,
  SiRedux,
  SiReactivex,
  SiAndroid,
  SiJquery,
  SiPostman,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar
                  logo={<IoLogoHtml5 />}
                  name={"React Native"}
                  value={100}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={85} />
                <ProgressBar logo={<SiRedux />} name={"Redux"} value={100} />
                <ProgressBar logo={<SiRedux />} name={"Zustand"} value={90} />
                <ProgressBar
                  logo={<SiJquery />}
                  name={"React-query"}
                  value={85}
                />
                <ProgressBar
                  logo={<SiPostman />}
                  name={"Restful APIs"}
                  value={90}
                />
                <ProgressBar
                  logo={<SiReactivex />}
                  name={"Reanimated"}
                  value={100}
                />
                <ProgressBar
                  logo={<SiTypescript />}
                  name={"Typescript"}
                  value={100}
                />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={100}
                />
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={85} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={85} />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Tailwind CSS"}
                  value={85}
                />
                <ProgressBar
                  logo={<SiAndroid />}
                  name={"Android Development"}
                  value={50}
                />
                <ProgressBar logo={<SiKotlin />} name={"Kotlin"} value={50} />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <ProgressBar logo={<SiFirebase />} name={"Firebase"} value={85} />
            </div>
            <div className="last2 flex flex-col gap-10">
              <ProgressBar
                logo={<SiExpress />}
                name={"Express Js"}
                value={40}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <ProgressBar
                logo={<SiMicrosoftsqlserver />}
                name={"MS SQL"}
                value={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
