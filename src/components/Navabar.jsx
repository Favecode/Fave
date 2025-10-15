import React from "react";
import './Navbar.jsx';
const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
    <div className="text-teal-600 font-bold text-xl">Tradition Cure</div>
    <ul className="flex gap-6 text-gray-600">
      <li><a href="#home" className="hover:text-teal-500">Home</a></li>
      <li><a href="#services" className="hover:text-teal-500">Our Services</a></li>
      <li><a href="#departments" className="hover:text-teal-500">Departments</a></li>
      <li><a href="#about" className="hover:text-teal-500">About</a></li>
      <li><a href="#contact" className="hover:text-teal-500">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
