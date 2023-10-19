import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Dboard from '../components/sidebar';



export default function Home() {
  return (
    <>
    <head>
          <title>Milala</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;800;900&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
    </head>

    <section id="Navbar" class="   w-full">
    <nav class="rounded-xl bg-white fixed w- -mt-3 top-4 right-0 left-0 ">
      <div class="max-w-screen-xl flex flex-wrap items-center  -pb-3 justify-between mx-auto p-2">
      <a href="/" class="flex items-center">
          <Image src="./img/milala-logo.svg" class="h-12 w-20 mt-3 mr-3" alt="Milala Logo" height={20} width={20}></Image>
          <span class="self-center text-[#009A9A] -ml-7 font-inter text-2xl font-semibold whitespace-nowrap ">Milala</span>
      </a>
      <div class="flex md:order-2">
          <button type="button" class="text-gray  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "> <ConnectButton >  </ConnectButton> </button>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
      </div>
      <div class="items-center justify-between hidden w-full  md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent ">
          <li>
            <a href="/" class="block py-2 pl-3 pr-4 text-gray bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
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
    <div className="bg-hero-top h-[900px] bg-no-repeat top-10 bg-top-4 bg-50%  ">
    < Dboard />
   
  
        
    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </div>
   
    </>
  )
}
