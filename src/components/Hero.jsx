import React, { useEffect, useState } from "react";
import HeroImage from "../assets/Suresh.png";

export const Hero = () => {
  const [heading, setHeading] = useState("ML Engineer");
  const [color, setColor] = useState("text-white");
  const headings = ["ML Engineer", "Data Scientist", "AI Engineer"];
  const colors = ["text-rose-500"];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index = (index + 1) % headings.length;
      setHeading(headings[index]);
      setColor(colors[index % colors.length]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      name="home"
      className="w-full h-screen md:min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex flex-col items-center justify-center"
    >
      <div className="max-w-screen-lg flex flex-col-reverse mx-auto h-full w-full text-white justify-center items-center md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left px-6 mt-8 md:mt-0">
          <h3 className={`text-3xl sm:text-6xl font-bold whitespace-nowrap ${color} hover:text-rose-500`}>
            {heading}
          </h3>
          <p className="text-white text-lg max-w-md py-4 mx-auto md:mx-0">
            I'm Suresh Beekhani, a Data Scientist and AI/ML Engineer dedicated to sharing my passion for artificial intelligence and data science. Through engaging tutorials and content, I aim to help learners master Machine Learning, Deep Learning, Natural Language Processing, and Generative AI, empowering them to explore the exciting world of AI.
          </p>
          <div className="w-fit px-6 py-3 mt-5 rounded-md bg-gradient-to-r from-rose-500 to-black-50 cursor-pointer hover:from-black hover:to-rose-500 hover:scale-105 duration-200">
            <a href="https://drive.google.com/drive/folders/1nenB6s7mXNZllsPHh2-74QziMBLU-U6b?usp=drive_link" download={true}>
              Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center md:mt-0">
          <img
            src={HeroImage}
            className="rounded-2xl mx-auto w-2/3 md:w/full max-w-xs md:max-w-md"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};
