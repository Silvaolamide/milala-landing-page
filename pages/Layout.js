import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import DashBoard from './DashBoard';
import Image from 'next/image';

const CommonLayout = ({ children }) => {
  return (
    <>
 
      <div>
        {/* Your Navbar component */}
        <section id="Navbar" class="rounded-xl  w-full">
    <nav class="rounded-xl bg-white fixed w- -mt-3 top-4 right-3 left-3 ">
      <div class="max-w-screen-xl flex flex-wrap items-center  -pb-3 justify-between mx-auto p-2">
      <a href="/" class="flex items-center">
        
          <span class="self-center text-[#009A9A] ml-14 font-inter text-2xl font-semibold whitespace-nowrap ">Milala</span>
      </a>
      <div class="flex md:order-2">
          <div class="text-gray text-sm px-4 py-2 text-center mr-3 md:mr-0 "> <ConnectButton >  </ConnectButton> </div>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
      </div>
      <div class="items-center justify-between hidden w-full  md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent ">
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
            <a href="/projects" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent md:hover:bg-transparent md:p-0 md:dark:hover:text-blue-500 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-transparent md:hover:bg-transparent md:p-0 ">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    
    </section>
    <DashBoard class="top-10">
      </DashBoard>
      </div>
 
    </>
  );
};

export default CommonLayout;
