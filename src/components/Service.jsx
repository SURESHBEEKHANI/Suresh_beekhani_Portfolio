import React from "react";
import { FaCode, FaBrain, FaChartLine, FaMobileAlt, FaCloud, FaDatabase, FaPaintBrush, FaShieldAlt, FaNetworkWired, FaServer, FaRobot, FaCogs, FaUserSecret, FaProjectDiagram, FaCloudUploadAlt } from "react-icons/fa"; // Added FaServer, FaRobot, FaCogs, FaUserSecret, FaProjectDiagram, FaCloudUploadAlt

export const Service = () => {
  const services = [
    {
      id: 1,
      title: "Deep Learning ",
      description: "Providing state-of-the-art deep learning infrastructure and support for AI research and deployment.",
      icon: <FaServer className="text-4xl text-rose-500 mb-4 mx-auto" />, // Icon representing server services
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "Creating intelligent systems using machine learning algorithms.",
      icon: <FaBrain className="text-4xl text-rose-500 mb-4 mx-auto" />, // Add icon
    },
    {
      id: 3,
      title: "Data Analysis",
      description: "Analyzing data to extract meaningful insights.",
      icon: <FaChartLine className="text-4xl text-rose-500 mb-4 mx-auto" />, // Add icon
    },
    {
      id: 4,
      title: "NLP",
      description: "Developing natural language processing solutions.",
      icon: <FaMobileAlt className="text-4xl text-rose-500 mb-4 mx-auto" />, // Add icon
    },
    {
      id: 5,
      title: "AI Chatbot Development",
      description: "Creating intelligent chatbots using AI technologies.",
      icon: <FaRobot className="text-4xl text-rose-500 mb-4 mx-auto" />, // Add icon
    },
    {
      id: 6,
      title: "LLM Fine-tuning",
      description: "Fine-tuning large language models for specific tasks.",
      icon: <FaCogs className="text-4xl text-rose-500 mb-4 mx-auto" />, // Updated icon
    },
    {
      id: 7,
      title: "AI Agent Systems",
      description: "Developing autonomous AI agent systems.",
      icon: <FaUserSecret className="text-4xl text-rose-500 mb-4 mx-auto" />, // Updated icon
    },
    {
      id: 8,
      title: "AI RAG Systems",
      description: "Developing AI-based retrieval-augmented generation systems.",
      icon: <FaProjectDiagram className="text-4xl text-rose-500 mb-4 mx-auto" />, // Updated icon
    },
    {
      id: 9,
      title: "AI System Deployment in Cloud",
      description: "Deploying AI systems in cloud environments.",
      icon: <FaCloudUploadAlt className="text-4xl text-rose-500 mb-4 mx-auto" />, // Updated icon
    },
  ];

  return (
    <div
      name="services"
      className="w-full h-screen md:min-h-screen lg:min-h-[80vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex flex-col items-center justify-center"
    >
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto text-white flex flex-col justify-center items-center md:items-start">
        <div className="pb-8">
          <p className="text-4xl sm:text-5xl font-bold text-white hover:text-rose-500 transition-colors duration-300">
            Services
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {services.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg shadow-gray-600 transform transition-transform bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] hover:bg-[#1a1a1a] text-white"
            >
              {icon}
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
