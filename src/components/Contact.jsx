import React, { useRef } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export const Contact = () => {
  const form = useRef();

  const sendToGoogleSheets = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    console.log('Form data:', data); // Debugging log

    try {
      const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.log('Data saved successfully');
      } else {
        console.error('Error saving data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen md:min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
    >
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto text-white flex flex-col justify-center items-center md:items-start">
        <div className="pb-6 sm:text-center">
          <p className="text-3xl sm:text-4xl font-bold text-white hover:text-rose-500 duration-200">Contact</p>
        </div>
        <div className="flex justify-center items-center w-full">
          <form ref={form} onSubmit={sendToGoogleSheets} className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full"
            />

            <textarea 
              name="message" 
              rows="10"  
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full"
            ></textarea>
          
            <button 
              type="submit"
              className="text-white bg-gradient-to-r from-rose-500 to-black-200 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-90 duration-200"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="https://www.facebook.com/sureshbeekhani143" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose-500">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.linkedin.com/in/suresh-beekhani" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose-500">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose-500">
            <FaTwitter size={30} />
          </a>
          <a href="https://github.com/SURESHBEEKHANI?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white hover:text-rose-500">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};
