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
    <header className="pt-9">
   
      <div  className="flex ml-10 h-auto border-red-400 items-start flex-start justify-start mx-auto ">    
          <div className="font-Inter  text-white text-right ">

            <span className="text-smm text-#[009A9A] font-extra-bold block leading-3">Auspicious Blockchain</span>
            <span className="text-xss font-extra-bold  text-[#009A9A] block">Auspicious Blockchain Pte Ltd</span>

          </div>
         
          
          <div className="flex justify-center items-end"> 
            <img className="w-7 mx-2 my-0" src="./img/auspicious-blockchain-logo.svg" alt="Auspicious Blockchain Logo" />
          </div>
      </div>

      <div className="justify-end flex flex-end items-end -mt-8 mr-3 sm:mr-10 sm:justify-end  md:justify-end sm:flex-end sm:items-end">
      <ConnectButton />
         </div>

      
      <div  className="flex  w-10/12 flex-col sm:flex-row   border-red-400 justify-center mx-auto item-center tracking-tighter"> 
          <div className="flex flex-col w-12/12 lg:w-5/12">
            <div className="flex flex-col  text-[102px] font-Inter font-extrabold  leading-[87.59px]">
              <p className="mt-[149px] mb-0 p-0">Support</p>
              <p className="text-[#009A9A] text-[68px] leading-[56.59px]">African </p>
              <p className="text-[#009A9A] text-[68px] leading-[56.59px]">Startups </p>
              <p className="text-[20px] font-extra-bold  leading-[29.59px] ">in Africa & Diaspora</p>
            </div>
            <div className="flex text-[102px] font-roboto font-extra-bold  w-[100%] ">
              <div className="bg-no-repeat bg-top-5 bg-120% w-80 h-48 bg-milala-logo">
                
              </div>
             

              <div className=" flex flex-col text-[17px] font-bolder my-0  pt-8">
                <div className="flex flex-col border-red-400 border-l-[1px] pl-4 h-24 justify-center tracking-normal "><span className="inline-block">Milala uses the <span className="text-[#009A9A] ">Blockchain technology</span> to
help you Support businesses with massive ROI</span>
                </div>
                
              </div>
            </div>
            <div className="flex font-Inter font-normal text-[13px]">
              <div className="">
              <button class="bg-gradient-to-r from-cyan-500 bg-[#1E242C] mr-2 hover:bg-[#009A9A] text-white py-3 px-4 rounded-full">
                Support a Business
                  </button>
                  
                </div>
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
