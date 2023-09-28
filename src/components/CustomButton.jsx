'use client';
import React from 'react';

function CustomButton({ onClick, buttonText, backgroundImage }) {
  return (
    <a href="#_" onClick={onClick} className="relative inline-block px-4 py-1 font-medium group mt-2">
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-transparent"></span>
      <span className="relative font-mono text-black group-hover:text-white" style={{ zIndex: 1 }}>{buttonText}</span>
      <span className="absolute inset-0 w-full h-full transition-opacity duration-200 ease-in opacity-0 group-hover:opacity-100"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></span>
    </a>
  );
}

export default CustomButton;
