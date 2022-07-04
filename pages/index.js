import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
  return (
    <>
    <head>
          <title>Milala</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;800;900&display=swap" rel="stylesheet"/>

    </head>
    <div className="bg-hero-top h-[900px] bg-no-repeat bg-top-4 bg-50% ">
    <header className=" pt-9">
      <div  className="flex w-11/12 h-auto border-red-400  justify-end mx-auto ">    
          <div className="font-Inter text-white text-right ">

            <span className="text-smm font-medium block leading-3">Auspicious Blockchain</span>
            <span className="text-xss font-thin  text-gray-300 block">Auspicious Blockchain Pte Ltd</span>

          </div>
          <div className="flex justify-center items-end"> 
            <img className="w-7 mx-2 my-0" src="./img/auspicious-blockchain-logo.svg" alt="Auspicious Blockchain Logo" />
          </div>
      </div>
      <div  className="flex w-11/12 h-[600px] pl-14  border-red-400 justify-center mx-auto item-center tracking-tighter"> 
          <div className="flex flex-col w-5/12">
            <div className="flex flex-col  text-[102px] font-Inter font-extrabold  leading-[87.59px]">
              <p className="mt-[149px] mb-0 p-0">Invest</p>
              <p className="text-[#009A9A] text-[68px] leading-[56.59px]">in Good Businesses</p>
              <p className="text-[25px] font-extra-bold  leading-[29.59px] ">in Africa & Diaspora</p>
            </div>
            <div className="flex text-[102px] font-Inter font-extra-bold ">
              <div className="bg-no-repeat bg-top-5 bg-120% w-80 h-48 bg-milala-logo">
                
              </div>
              <div className="flex flex-col text-[13px] font-normal my-0  pt-8">
                <div className="flex flex-col border-red-400 border-l-[1px] pl-4 h-24 justify-center leading-tight"><span className="inline-block">Milala uses the <span className="text-[#009A9A] ">Blockchain technology</span> to
help you invest in businesses with massive ROI</span>
                </div>
                
              </div>
            </div>
          </div>   
          <div className="flex flex-col   w-8/12 font-Inter  text-[90px] justify-center">
            <div className="border-0 justify-center text-center">
            <img className="w-[1500px]  mx-0 my-0" src="./img/hero2.png" alt="Milala-Hero" />
            
            </div>
          </div>   
      </div>
      
    </header>
    <main>



    </main>
    </div>
    <footer>

    </footer>

    </>
  )
}
