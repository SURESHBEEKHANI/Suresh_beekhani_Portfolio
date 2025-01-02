import React from "react";

export const Experience = () => {
  const experiences = [
 
    {
      id: 1,
      role: "Generative AI Engineer",
      company: "Fiverr",
      duration: "Dec 2023 – Present",
      description: "Specialize in machine learning applications, including predictive modeling, NLP, computer vision, and deep learning. Skilled in Python, LLMOps, vector databases, and frameworks like LangChain. Focus on delivering tailored AI solutions to meet client needs with high standards. Committed to creating innovative, impactful applications that solve complex challenges.",
    },
    {
      id: 2,
      role: "Machine Learning Engineer",
      company: "Upwork",
      duration: "Dec 2022 – Present",
      description: "Worked with clients worldwide on a diverse range of machine learning projects. Expertise in predictive modeling, NLP, computer vision, and deep learning. Deliver customized solutions, ensuring high-quality results and client satisfaction. Driven to solve complex challenges and achieve success in every project.",
    },
    {
      id: 2,
      role: "Associate Machine Learning Engineer",
      company: "Avanza Solutions",
      duration: "Dec 2022 – Dec 2023",
      description: "Led advanced machine learning projects, refining expertise in AI and ML technologies. Contributed to cutting-edge solutions enhancing operational efficiencies and providing valuable insights. Eager to continue applying skills in solving future challenges and advancing in machine learning.",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full h-screen md:min-h-screen lg:min-h-[80vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex flex-col items-center justify-center"
    >
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto text-white flex flex-col justify-center items-center md:items-start">
        <div className="pb-8">
          <p className="text-5xl sm:text-6xl font-bold text-white hover:text-rose-500 transition-colors duration-300">
            Experience
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 text-center py-8 px-4 sm:px-0">
          {experiences.map(({ id, role, company, duration, description }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-gray-600 transform transition-transform bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] hover:bg-[#1a1a1a] text-white"
            >
              <h3 className="text-2xl font-bold">{role}</h3>
              <p className="mt-2 text-lg">{company} - {duration}</p>
              <p className="mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
