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
                  Fullstack Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Aurora Solution
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  November 2024 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Spearheaded the fullstack development of a comprehensive employee performance and analytics
                platform, integrating PostgreSQL, Node.js, Next.js, TypeScript, TailwindCSS, and Django to deliver
                seamless data flow, robust backend services, and dynamic user interfaces. <br />
                Built and deployed a companion mobile application using React Native, enabling users to access key
                performance metrics and notifications on the go, improving accessibility and team engagement. <br />
                Led the entire UI/UX design lifecycle—from wireframing and prototyping to implementation—ensuring
                intuitive, accessible, and goal-driven interfaces across both web and mobile platforms.
                Designed and implemented modular, reusable components and backend services, streamlining
                development workflows and enabling scalability and consistency throughout the system. <br />
                Developed and optimized RESTful APIs and database schemas to support complex analytics and role-
                based access control, ensuring performance and data integrity across platforms. <br />
                Authored and maintained detailed technical documentation in Confluence, facilitating faster onboarding,
                clearer collaboration across teams, and long-term maintainability of the codebase. <br />
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
                Collaborated with a cross-functional team to develop the Costa Coffee mobile application, designing and implementing multiple screens using React Native.<br />
                Leveraged AWS services to enhance application functionality and scalability.<br />
                Ensured a seamless user experience by integrating UI/UX best practices.<br />
                Participated actively in code reviews to improve code quality and worked closely with team members to meet project deadlines and deliverables.<br />
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
                Contributed to the development of the Pınar Online mobile application, gaining hands-on experience in mobile development processes.<br />
Explored AWS advantages and applied them to the project infrastructure.<br />
Assisted in both manual and unit testing to ensure optimal functionality and performance.<br />
Actively engaged in frontend code reviews, receiving valuable feedback to refine skills.<br />
Collaborated effectively with the team to meet project milestones and deliverables.
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
