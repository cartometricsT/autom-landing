import React from "react";
import Link from 'next/link';


function Footer() {
    return (
      <footer className="bg-gray-100 rounded-lg shadow mt-40">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center sm:text-left">
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <img src="/images/logo.png" className="h-8 mr-3" alt="CompanyName Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Company Name</span>
            </a>
            <ul className="flex flex-col items-center sm:flex-row sm:items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto" />
          <span className="block text-center text-sm text-gray-500">© 2023 <a href="#" className="hover:underline">CompanyName</a>. All Rights Reserved.</span>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
