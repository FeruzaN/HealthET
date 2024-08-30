import React from 'react';

function HeroSection() {
  return (
    <div className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Service</h1>
        <p className="text-xl mb-6">We provide the best solutions for you.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
