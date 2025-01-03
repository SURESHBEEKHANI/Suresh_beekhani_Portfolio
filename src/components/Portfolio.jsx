import React from "react";
import p1 from "../assets/p1.png";
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import p9 from '../assets/p9.png'
import { FaGithub, FaYoutube } from "react-icons/fa";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "Personal-AI-Assistan-Chatbot",
      github: "https://github.com/SURESHBEEKHANI/Chatbot-Suresh-Beekhani.git",
    },
    {
      id: 2,
      image: p2,
      title: "Financial-Multi-AI-Agent",
      github: "https://github.com/SURESHBEEKHANI/Financial-Analyst-AI-Multi-Agent-System",
    },
    {
      id: 3,
      image: p3,
      title: "Medical-Chatbot-RAG-System",
      github: "https://github.com/SURESHBEEKHANI/Medical-Chatbot-RAG-System.git",
    },
    {
      id: 4,
      image: p4,
      title: "Heart-Attack-Prediction",
      github: "https://github.com/SURESHBEEKHANI/Heart-Attack-Prediction",
    },
    {
      id: 5,
      image: p5,
      title: "WhatsApp-Conversations-Analysis",
      github: "https://github.com/SURESHBEEKHANI/WhatsApp-Conversations-Analysis.git",
    },

    {
      id: 7,
      image: p7,
      title: "Loan-Eligibility-Prediction",
      github: "https://github.com/SURESHBEEKHANI/Loan-Eligibility-Prediction",
    },
    {
      id: 8,
      image: p8,
      title: "SQL AI Assistant",
      github: "https://github.com/SURESHBEEKHANI/Chat-with-Postgres-SQL",
    },
    {
      id: 9,
      image: p9,
      title: "Movie-Recommender-System",
      github: "https://github.com/SURESHBEEKHANI/Movie-Recommender-System",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] p-8 pt-16"
    >
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto text-white flex flex-col justify-center items-center md:items-start">
        <div className="pb-4 mb-4 mt-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white hover:text-rose-500 transition-colors duration-300">
            Portfolio
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, title, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-500 transform transition-transform w-64 h-72 m-4 p-4 mt-4">
              <img src={image} alt={title} className="rounded-t-lg w-full h-36 object-cover" />
              <h3 className="text-xl font-bold text-center mt-2">{title}</h3>
              <div className="flex items-center justify-evenly p-2">
                <a href={github} className="hover:scale-110 duration-200"><FaGithub size={30} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
