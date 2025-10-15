import React from "react";
import '.Hero.jsx';
const Hero = () => (
  <section className="flex flex-col md:flex-row justify-between items-center px-8 py-16 bg-teal-50">
    <div className="max-w-lg">
      <h1 className="text-4xl font-semibold mb-4 text-gray-800">
        Empower your <span className="text-teal-600">mind, body</span> and soul with <span className="text-teal-600">Ayurveda</span>
      </h1>
      <p className="text-gray-600 mb-6">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </p>
      <div className="flex gap-4">
        <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600">
          Book a Doctor
        </button>
        <button className="border border-teal-500 text-teal-500 px-6 py-2 rounded-lg hover:bg-teal-50">
          Login & Signup
        </button>
      </div>
    </div>
    <img src="https://i.ibb.co/QpjZVZB/ayurveda.png" alt="Ayurveda" className="w-80 mt-10 md:mt-0" />
  </section>
);

export default Hero;
