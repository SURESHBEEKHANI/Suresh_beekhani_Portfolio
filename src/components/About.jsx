import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen md:min-h-screen lg:min-h-[80vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex flex-col items-center justify-center"
    >
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto flex flex-col justify-center items-center text-white md:items-start">
        <div className="py-6 sm:text-center">
          <h2 className="text-4xl sm:text-5xl font-bold hover:text-rose-500 hover:scale-105 duration-200">
            About
          </h2>
        </div>

        <p className="text-xl sm:text-2xl mt-4 text-white">
        I'm Suresh Beekhani, a dedicated educator and technology enthusiast 
          passionate about sharing my knowledge as a Data Scientist and AI/ML
          Engineer. I specialize in Artificial Intelligence, Generative AI,
          Machine Learning, Deep Learning, and Natural Language Processing
          (NLP). With a solid background in computer science from Sir 
          Syed University of Engineering and Technology in Karachi, Pakistan,
          I strive to bridge the gap between theoretical concepts and practical 
          applications. My mission is to empower individuals to leverage AI and data science to address real-world challenges. Join me on this exciting journey as we delve into the fascinating world of AI together.
        </p>
      </div>
    </div>
  );
};
