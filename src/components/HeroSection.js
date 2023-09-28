'use client';
import CustomButton from '../components/CustomButton';

function HeroSection() {
  return (
    <div className="container flex flex-col justify-center mt-7 sm:mt-40 sm:mt-10 lg:flex-row justify-between">
      <div className="">
        <h1 className="text-5xl text-center sm:text-5xl sm:text-center base:text-6xl base:text-left lg:text-left lg:text-7xl font-bold">Upgrade your Business through AI-Powered Automation</h1>
        <p className="text-lg text-center text-slate-400 sm:text-3xl sm:text-center base:text-left  lg:text-left mt-2 font-mono">Make your company feels lighter</p>
          <div className="flex justify-center sm:justify-center base:justify-start lg:justify-start">
            <CustomButton 
              onClick={() => window.location.href = "#Five"} 
              buttonText="Contact" 
              backgroundImage="/images/backgroundOne.png"
            />
          </div>
      </div>
      
      <div className="flex justify-center mt-20 lg:justify-end items-center base:mt-20 sm:mt-20 lg:mt-0 w-full">
        <img 
          src="/images/hero-section.png" 
          alt="Artificial Intelligence" 
          className="animate-float w-40 sm:w-48 md:w-64 lg:w-full"
        />
      </div>

    </div>
  );
}

export default HeroSection;