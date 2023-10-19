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
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
    </head>
    <div className="bg-hero-top h-[900px] bg-no-repeat bg-top-4 bg-50%  ">
    <header className="pt-9">
      <div  className="flex w-10/12 h-auto border-red-400  justify-end mx-auto ">    
          <div className="font-Inter  text-white text-right ">

            <span className="text-smm font-medium block leading-3">Auspicious Blockchain</span>
            <span className="text-xss font-thin  text-gray-300 block">Auspicious Blockchain Pte Ltd</span>

          </div>
          <div className="flex justify-center items-end"> 
            <img className="w-7 mx-2 my-0" src="./img/auspicious-blockchain-logo.svg" alt="Auspicious Blockchain Logo" />
          </div>
      </div>
      <div  className="flex  w-10/12 sm:flex-col md:flex-row   border-red-400 justify-center mx-auto item-center tracking-tighter"> 
          <div className="flex flex-col w-5/12">
            <div className="flex flex-col  text-[102px] font-Inter font-extrabold  leading-[87.59px]">
              <p className="mt-[149px] mb-0 p-0">Invest</p>
              <p className="text-[#009A9A] text-[68px] leading-[56.59px]">in African Businesses</p>
              <p className="text-[25px] font-extra-bold  leading-[29.59px] ">in Africa & Diaspora</p>
            </div>
            <div className="flex text-[102px] font-roboto font-extra-bold border w-[100%] ">
              <div className="bg-no-repeat bg-top-5 bg-120% w-80 h-48 bg-milala-logo">
                
              </div>
              <div className=" flex flex-col text-[17px] font-bolder my-0  pt-8">
                <div className="flex flex-col border-red-400 border-l-[1px] pl-4 h-24 justify-center tracking-normal "><span className="inline-block">Milala uses the <span className="text-[#009A9A] ">Blockchain technology</span> to
help you invest in businesses with massive ROI</span>
                </div>
                
              </div>
            </div>
            <div className="flex font-Inter font-normal text-[13px]">
              <div className="">
              <button class="bg-gradient-to-r from-cyan-500 bg-[#1E242C] mr-2 hover:bg-[#009A9A] text-white py-3 px-4 rounded-full">
                Start Investing
                  </button>
                  
                </div>
                <div className="">
                <button type="button"  class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-normal rounded-full text-sm px-5 py-2.5">
                    List My Business
                  </button>
                
              </div>
              
            </div>
          </div>   
          <div className="flex flex-col border sm:w-12/12  w-8/12 font-Inter  text-[90px] justify-center">
            <div className="border-0 justify-center text-center">
            <img className="w-[1500px]  mx-0 my-0 ml-10" src="./img/hero2.png" alt="Milala-Hero" />
            
            </div>
          </div>   
          </div>
     
      
      
        </header>
   
        <main >
        <div className="bg-hero-mid h-[900px] bg-no-repeat bg-50% bg-top">
            <div  className="flex  mt-10 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
                    <div class="text-[#009A9A] font-roboto text-[45px] font-normal">
                      <span className="text-[#009A9A] font-extrabold">Milala</span> | Easy investing from anywhere!</div>
                
                    <div class="flex flex-col border-gray-400 justify-center ">
                      <div class="flex justify-end text-[#009A9A] text-[15px] font-semibold">24hrs Help</div>
                      <div class="text-[#1E242C] text-4xl font-bold"><span class="text-[#009A9A]">+1</span>90-909-0998</div>
                    </div>
            </div>
            <div className="flex flex-row  justify-between w-10/12  border-red-400  mx-auto item-center tracking-tighter  mt-24">
              <div class="flex flex-col text-[#009A9A] font-Inter text-[20px]   h-[300px] w-[300px]">
                <p class="w-[100%]">1 - 4 Steps</p>
                <p class="text-[#000000] text-[48px] leading-[39.59px] pb-0 mb-0 w-[100%]  mt-10" >
                  Step 
                </p>
                <p class="text-[#000000] text-[48px] leading-[46.59px] font-extrabold w-[100%]"  p-0>
                   by Step 
                </p>
                <p class="text-[45px] font-extra-bold  leading-[29.59px] w-[100%] mt-2">
                  Investing
                </p>
                    <div className="flex font-Inter font-normal text-[13px] mt-5">
                      <div className="">
                      <button class="bg-gradient-to-r from-cyan-500 bg-[#1E242C] mr-2 hover:bg-[#009A9A] text-white py-3 px-4 rounded-full">
                        Start Investing
                          </button>
                          
                        </div>
                        <div className="">
                        <button type="button"  class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-normal rounded-full text-sm px-5 py-2.5">
                            List My Business
                          </button>
                        
                      </div>
                      
                    </div>
              </div>
              
              <div class="h-[510px]   w-8/12 bg-milala-step bg-no-repeat bg-50%">
                
               
                </div>
            </div>
           

            <div className="bg-hero-bottom h-[1500px] bg-no-repeat bg-50%">
                <div  className="flex  mt-10 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
                        <div class="text-[#009A9A] font-Inter text-[45px] font-normal">
                          <span className="text-[#009A9A] font-extrabold"><p class="text-[#000000] text-[48px] leading-[19.59px] pb-0 mb-0 w-[100%] ">Recent Businesses </p><p>Listed on Milala</p> <div className="flex font-Inter font-normal text-[13px] mt-5">
                          
                            <div className="">
                            <button type="button"  class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-normal rounded-full text-sm px-5 py-2.5">
                                List My Business
                              </button>
                            
                          </div>
                          
                        </div></span></div>
                    
                        <div class="flex flex-col border-gray-400 justify-center text-[#009A9A]">
                          <div class="flex justify-end  text-[20px] font-bold">View More <img class="w-[19px] ml-3" src="./img/arrow.svg"/></div>
                          
                        </div>
                  </div>
                    <div class="flex  mt-10 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
                
                      <div className="border h-[350px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl bg-white">
                  
                      </div>
                      <div className="border h-[350px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl bg-white">
                  
                      </div>
                      <div className="border h-[350px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl bg-white">
                  
                      </div>
                      <div className="border h-[350px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl bg-white">
                  
                      </div>
                  </div>
                    <div  className="flex  mt-20 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
                        <div class="flex  flex-col border-gray-400 justify-center text-[#009A9A]">
                          <div class="flex justify-end  text-[20px] font-bold"> <img class="w-[650px]" src="./img/bottom-left.png"/></div>
                          
                        </div>
                        <div class=" flex items-center justify-center text-[#009A9A]  h-[600px] font-Inter text-[45px] font-normal">
                          <div className="text-[#009A9A] font-extrabold  ">
                    <p class="text-[#000000] text-[48px] leading-[19.59px] pb-0 mb-0 w-[100%] ">Invest in a Business </p>
                    <p>with as low as $100</p>
                    <div className="flex font-Inter font-normal text-[13px] mt-5">
                          
                            <div className=" ">
                            <button class="bg-gradient-to-r from-cyan-500 bg-[#1E242C] mr-2 hover:bg-[#009A9A] text-white py-3 px-4 rounded-full">
                Start Investing
                  </button>
                            
                          </div>
                          
                        </div></div></div>
                    
                        
              </div>
              
                    <div  className="flex  mt-24 bg-black-400 bg-black  justify-between  border-red-400  mx-auto item-center tracking-tighter"> 
                    <div class="flex  mt-10 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
                
               
                
                
                <div className="bg-milala-footer bg-50% bg-no-repeat pt-40 mr-40 h-[280px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl text-[#009A9A] space-y-5">
                    
                  
                    <p>Milala uses the Blockchain technology to
help you invest in businesses with massive ROI </p>
                </div>
                
                <div className="h-[280px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl text-[#009A9A] space-y-5">
                    <p className="font-bold mb-7">Account </p>
                    <span className="text-sm space-y-5"><p>My Portfolio </p>
                    <p>Sign Up </p>
                    <p>Login </p></span>
                </div>
                
                <div className="h-[280px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl text-[#009A9A] space-y-5">
                    <p className="font-bold mb-7">Legal </p>
                    <span className="text-sm space-y-5"><p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </span>
                </div>
                
                <div className="h-[280px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl text-[#009A9A] space-y-5">
                    <p className="font-bold mb-7">More </p>
                    <span className="text-sm space-y-5"><p>FAQ</p>
                    <p>About Us </p>
                    <p>Contact Us</p></span>
                </div>
                
                
            </div>
                        
                  </div>
              
            
            
              <div className="flex bg-black-400 border-t-zinc-600 bg-black  justify-between  border-red-400  mx-auto item-center tracking-tighter"> 
                    <div class="flex border-t-[0.5px] border-t-[#054d4d] mt-10 bg-black-400 justify-center  w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
                
               
                
                
                <div className="flex  flex-col h-[100px] items-center text-[#7da7a7] pt-10  text-sm">
                    
                  
                    <p className="">(c) Milala 2022. All Rights  Reserved</p>
                    <p>Powered by: <span className=" text-lg font-semibold">Auspicious Blockchain</span></p>
                </div>
                
                
                
                
            </div>
                        
                  </div>
            </div>
          </div>
       
        </main>
        
    <footer>
 

          </footer>
      
    </div>

    </>
  )
}
