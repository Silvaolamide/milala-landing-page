import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';




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
</header>

     






    
   
        <main >
       
              
            
        </main>
        
    <footer>
 

          </footer>
      
    </div>

    </>
  )
}