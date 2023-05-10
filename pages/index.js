import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Navbar from '../components/navigation';
import Hero from '../components/Hero';
import Steps from '../components/steps';
import Projects from '../components/projects';
import CTA from '../components/CTA';
import Footer from '../components/footer';


export default function Home() {
  return (
    <>
    <head>
          <title>Milala</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;800;900&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
    </head>
  
    <div className="bg-hero-top h-[900px] bg-no-repeat bg-top-4 bg-50% ">
    <div id="navbar" class="rounded-xl p-3  bg-white  mx-8 px-4 py-0">
<Navbar />
</div>
    <Hero />
        
        < Steps />
        <div  className="flex flex-wrap mt-3 bg-black-400  justify-between w-10/12 border-red-400 my-4 mx-auto item-center tracking-tighter"> 
            <div class="text-[#009A9A] font-Inter -mt-10 text-[45px] font-normal">
              <span className="text-[#009A9A] font-extrabold"><p class="text-[#000000] text-[48px] leading-[39.59px] md:leading-[19.59px]  pb-0 mb-0 w-[100%] ">Recent Businesses </p><p>Listed on Milala</p> <div className="flex font-Inter font-normal text-[13px] mt-5">
              
                <div className="">
                <button type="button"  class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-normal rounded-full text-sm px-5 py-2.5">
                    List My Business
                  </button>
                
              </div>
              
            </div></span></div>
        
            <div class="flex flex-col mt-20 my-30 border-gray-400 justify-center text-[#009A9A]">
              <div class="flex justify-end  mx-auto  text-[20px] font-bold">View More <img class="w-[19px] ml-3" src="./img/arrow.svg"/></div>
              
            </div>
      </div>
    

<Projects />
<CTA />

<Footer />
  </div>      
                 
      


    </>
  )
}
