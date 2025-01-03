import React from "react";
import python from "../assets/python.png"; // Ensure this file exists
import TensorFl from "../assets/tensorflow.png";
import Langchain from "../assets/langchain.png";
import Sklearn from "../assets/sklearn.png";
import seaborn from "../assets/seaborn.png";
import NumPy from "../assets/numpy.png";
import HuggingFace from "../assets/huggingface.png";
import Pandas from "../assets/pandas.png";
import OpenAI from "../assets/openai.png"; // Re-add this line
import Gemini from "../assets/gemini.jpg";
import Llama from "../assets/llama.png";
import PhiData from "../assets/phidata.png";

export const Skills = () => {
  const technologies = [
    {
      id: 1,
      icon: python,
      title: "Python",
    },
    {
      id: 2,
      icon: TensorFl,
      title: "TensorFlow",
    },
    {
      id: 3,
      icon: Sklearn,
      title: "Sklearn",
    },
    {
      id: 4,
      icon: NumPy,
      title: "NumPy",
    },
    {
      id: 5,
      icon: Pandas,
      title: "Pandas",
    },
    {
      id: 6,
      icon: seaborn,
      title: "Seaborn",
    },
    {
      id: 7,
      icon: HuggingFace,
      title: "HuggingFace",
    },
    {
      id: 8,
      icon: Langchain,
      title: "LangChain",
    },
    {
      id: 9,
      icon: OpenAI,
      title: "OpenAI",
    },
    {
      id: 10,
      icon: Gemini,
      title: "Gemini",
    },

    {
      id: 11,
      icon:Llama,
      title: "Llama",
    },
    {
      id: 12,
      icon:PhiData,
      title: "PhiData",
    },
  ];
  return (
    <div>
      {/* Skills Section */}
      <div
        name="skills"
        className="w-full h-screen md:min-h-screen lg:min-h-[90vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex flex-col items-center justify-center" // Increased lg:min-h to 90vh
      >
        <div className="max-w-screen-lg p-4 h-full w-full mx-auto text-white flex flex-col justify-center items-center md:items-start">
          {/* Frameworks Section */}
          <div className="pb-8">
            <p className="text-3xl sm:text-4xl font-bold text-white hover:text-rose-500 transition-colors duration-300">
            Skills
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0"> {/* Changed grid to show 4 cards in one line */}
            {technologies.map(({ id, icon, title }) => (
              <div
                key={id}
                className="shadow-md hover:scale-105 duration-500 py-1 rounded-lg shadow-gray-600 transform transition-transform bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] hover:bg-[#1a1a1a] text-white" // Removed rose colors
              >
                <img src={icon} alt={title} className="mx-auto w-10 h-10 sm:w-14 sm:h-14" />
                <p className="text-xl mt-1 text-white font-semibold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

