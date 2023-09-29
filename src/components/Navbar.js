'use client';
import React, { useState } from "react";
import { Transition } from "@headlessui/react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="container sm:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between h-16">
            {/* Logo and CompanyName */}
            <div className="flex items-center">
              <img
                className="h-5"
                src="/images/logo.svg"
                alt="Workflow"
              />
              <span className="text-1xl ml-2 sm:text-2xl font-bold font-mono text-black">NEURONALS</span>
            </div>

            {/* Laptop version buttons */}
            <div className="hidden md:flex items-baseline space-x-10 ml-auto">
            <a
              href="#Two"
              className="hidden sm:block font-medium text-gray-900  hover:border-b-2 border-gray-400 ">
                <span className="inline-block">Applications</span>
                
            </a>

            <a
              href="#Three"
              className="hidden sm:block font-medium text-gray-900  hover:border-b-2 border-gray-400 ">
                <span className="inline-block">Benefits</span>
                
            </a>

            <a
              href="#Five"
              className="hidden  sm:block font-medium text-gray-900 hover:border-b-2 border-gray-400 ">
                <span className="inline-block">Contact</span>
                
            </a>

          </div>

            {/*mobile version*/}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-300 focus:outline-none    focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden bg-zinc-800" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                <a
                  href="#Two"
                  className="text-white border-b border-white hover:text-gray-100 block px-3 py-2 "
                >
                  Applications
                </a>

                <a
                  href="#Three"
                  className="text-white border-b border-white hover:text-gray-600 block px-3 py-2"
                >
                  Benefits
                </a>

                <a
                  href="#Five"
                  className="text-white  hover:text-gray-600 block px-3 py-2"
                >
                  Contact
                </a>

                
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
    </div>
  );
}

export default Navbar;



