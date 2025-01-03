import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      data: "home",
    },
    {
      id: 2,
      data: "about",
    },
    {
      id: 3,
      data: "portfolio",
    },

    {
      id: 4,
      data: "skills",
    },

    {
      id: 5,
      data: "services",
    },
    {
      id: 6,
      data: "experience",
    },
    {
      id: 7,
      data: "testimonials",
    },
    {
      id: 8,
      data: "contact",
    },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="flex justify-between items-center h-16 px-4">
        <div className="text-2xl font-bold cursor-pointer text-white hover:text-rose-500 hover:scale-105 duration-200">
          SURESH BEEKHANI
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-1.5xl px-4 capitalize cursor-pointer text-white hover:text-rose-500 hover:scale-105 duration-200"
            >
              <Link to={link.data} smooth duration={500} className="hover:text-rose-500">{link.data}</Link>
            </li>
          ))}
        </ul>

        {/* Contact Information */}
        <ul className="hidden md:flex text-white items-center space-x-4">
          <li>
            <a href="mailto:suresh@example.com" className="flex items-center hover:text-rose-500">
              <FaEnvelope className="mr-2 hover:text-rose-500" />
              sureshbeekhani26@gmail.com
            </a>
          </li>
          <li>
            <a href="https://wa.me/923401213187" className="flex items-center hover:text-rose-500">
              <FaWhatsapp className="mr-2 hover:text-rose-500" />
              +92 340 1213187
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden cursor-pointer pr-4 z-10 text-white"
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="w-full h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex flex-col items-center justify-center">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-2xl py-4 capitalize cursor-pointer text-white hover:text-rose-500 hover:scale-105 duration-200"
            >
              <Link onClick={() => setNav(!nav)} to={link.data} smooth duration={500} className="hover:text-rose-500">{link.data}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
