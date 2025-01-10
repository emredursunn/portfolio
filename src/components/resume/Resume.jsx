import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Frontend Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Aurora Solution
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  November 2024 - Still
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  My responsibilities in this position: As a Frontend Developer,
                  I am responsible for designing and implementing the user interface
                  of a large-scale HR application, collaborating closely with the
                  backend team to ensure seamless integration with Django. My role
                  involves creating user-friendly, responsive, and maintainable
                  features that enhance the overall user experience, while
                  adhering to best practices in frontend development. 
                </p>
              </div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  React Native Developer Intern
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Retter.io
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2024 - August 2024
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  My responsibilities in this position: Collaborated with a
                  cross-functional team to develop the Costa Coffee mobile
                  application. Designed and implemented various screens of the
                  mobile application using React Native. I had the opportunity
                  to use AWS. Ensured a seamless user experience by integrating
                  UI/UX best practices. Participated in code reviews and
                  received feedback to improve code quality. Worked closely with
                  team members to meet project deadlines and deliverables.
                </p>
              </div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Developer Intern
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Retter.io
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  July 2023 - August 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  My responsibilities in this position: Contributed to the
                  development of the Pınar Online mobile application. Observed
                  and learned various aspects of mobile application development.
                  I had the opportunity to learn the advantages of AWS. Assisted
                  in testing to ensure the application's functionality and
                  performance.I had the opportunity to learn unit tests and also
                  did manual testing. Actively participated in code reviews for
                  the frontend, gaining insights and feedback to improve my
                  skills. Collaborated with team members to meet project
                  deadlines and deliverables.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Bachelor's Degree in Computer Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Muğla Sıtkı Koçman University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  2019 - 2024
                </span>
                <span className=" text-[.9rem] font-semibold italic text-yellow-500 sm:text-base">
                  Graduated
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  I have learned Python, Java, Object oriented programming,
                  Android development, Html, Css, Javascript. I have joined lots
                  of seminers and learned from them.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
