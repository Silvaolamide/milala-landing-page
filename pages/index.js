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
    <div className="bg-hero-top h-[900px] bg-no-repeat bg-top-4 bg-50%  ">
    <header className="pt-9">
   
      <div  className="flex w-10/12 h-auto border-red-400  justify-start mx-auto ">    
          <div className="font-Inter  text-white text-right ">

            <span className="text-smm text-#[009A9A] font-extra-bold block leading-3">Auspicious Blockchain</span>
            <span className="text-xss font-extra-bold  text-[#009A9A] block">Auspicious Blockchain Pte Ltd</span>

          </div>
         
          
          <div className="flex justify-center items-end"> 
            <img className="w-7 mx-2 my-0" src="./img/auspicious-blockchain-logo.svg" alt="Auspicious Blockchain Logo" />
          </div>
      </div>
      <div className="justify-end flex flex-end -mt-8 mr-8 bg">
          <ConnectButton />;
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
              
            </div>
          </div>   
          <div className="flex  flex-col  w-12/12 md:w-8/12 font-Inter  text-[90px] justify-center">
            <div className="border-0 justify-center    text-center">
            <img className="w-[1500px]  mx-0 my-0 ml-0 sm:ml-10" src="./img/7herob.png" alt="Milala-Hero" />
            
            </div>
          </div>   
          </div>
     
      
      
        </header>
   
        <main >
        <div className="bg-hero-mid h-[900px] bg-no-repeat bg-50% bg-top">
            <div  className="flex flex-col md:flex-row mt-10 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
                    <div class="text-[#009A9A] font-roboto text-[35px] md:text-[45px] font-normal ">
                      <span className="text-[#009A9A] font-extrabold">Milala</span> | Easy investing from anywhere!
                    </div>
                
                    <div class="flex flex-col border-gray-400 justify-center ">
                      <div class="flex justify-end text-[#009A9A] text-[15px] font-semibold">24hrs Help</div>
                      <div class="flex justify-end text-[#1E242C] text-4xl font-bold text-right "><span class="text-right text-[#009A9A]">+1</span>90-909-0998</div>
                    </div>
            </div>
            <div className="flex flex-col md:flex-row  justify-between w-10/12  border-red-400  mx-auto item-center tracking-tighter  mt-24">
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
                        Support a Business
                          </button>
                          
                        </div>
                        <div className="">
                        <button type="button"  class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-normal rounded-full text-sm px-5 py-2.5">
                            List My Business
                          </button>
                        
                      </div>
                      
                    </div>
              </div>
              
              <div class="h-[290px] md:h-[510px] w-12/12 md:w-8/12 bg-milala-step bg-no-repeat bg-50%">
                
               
                </div>
            </div>
           

            <div className="bg-hero-bottom h-[1500px] bg-no-repeat bg-50%">
                <div  className="flex flex-wrap mt-10 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
                        <div class="text-[#009A9A] font-Inter text-[45px] font-normal">
                          <span className="text-[#009A9A] font-extrabold"><p class="text-[#000000] text-[48px] leading-[39.59px] md:leading-[19.59px]  pb-0 mb-0 w-[100%] ">Recent Businesses </p><p>Listed on Milala</p> <div className="flex font-Inter font-normal text-[13px] mt-5">
                          
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
                  
  <div class="grid grid-cols-1 md:grid-flow-col w-11/12 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mb-2 rounded-20 mx-auto my-auto md:flex justify-center  item-center tracking-tighter content-start">    
    
    <div class="rounded-xl shadow-lg bg-white md:w-max  flex justify-center ">
      <div class="p-4 flex flex-col">
        <div class="rounded-xl overflow-hidden">
          <img src="./img/Loli.png" class="h-64 w-full" alt="Business Image" ></img>
      </div>
      <div class="flex items-center">
      <h5 class="text-2xl md:text-2xl font-Inter text-[#009A9A] font-extrabold text-center mt-4">Loli Creations</h5>
      </div>
      <p class="text-black-500 font-roboto xl-text-l md:text-m font-extrabold lg:text-base mt-3">Loli began out of a love for creating beautiful pieces of handmade accessories. 
We offer tote bags, toiletry bags, backpacks, purses, travel bags and laptop sleeves.


      </p>
      <div class='flex justify-center mt-3'>
<a href ="https://ab-africanprojects.com/loli-creations_demo/"   class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3">View Business</a>
</div> 

</div>
</div>


<div class="rounded-xl shadow-lg bg-white  ">
      <div class="p-4 flex flex-col">
        <div class="rounded-xl overflow-hidden">
          <img src="./img/Irrifarm.jpg" class="h-64 w-full" alt="Business Image" ></img>
      </div>
      <div class="flex items-center">
      <h5 class="text-2xl md:text-2xl font-Inter text-[#009A9A] font-extrabold text-center mt-4">IrriFarm</h5>
      </div>
      <p class="text-black-500 lg:text-base xl-text-l md:text-base w-fit font-extrabold font-roboto mt-3">We are an organization that was established with an aim of helping farmers in Arid and Semi-Arid areas and other areas that lack enough water to favor farming. 
      </p>
      <div class='flex justify-center mt-6'>
<a href ="https://ab-africanprojects.com/irrifarm_demo/"  class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3" >View Business</a>
</div>

</div>
</div>

<div class="rounded-xl shadow-lg bg-white  ">
      <div class="p-4 flex flex-col">
        <div class="rounded-xl overflow-hidden">
          <img src="./img/Usafi.png" class="h-64 w-full" alt="Business Image" ></img>
      </div>
      <div class="flex items-center">
      <h5 class="text-2xl md:text-2xl font-Inter font-extrabold text-[#009A9A] text-center mt-4">Usafi Sanitation</h5>
      </div>
      <p class="text-black-700 md:text-m lg:text-base xl-text-l font-extrabold font-roboto mt-3 whitespace-normal flex-wrap"> Our vision is to improve sanitation, enhance lives and improve human dignity and eliminate sanitation challenges by ensuring people  access  proper sanitation by providing Eco Friendly sanitation solutions.
      </p>
      <div class='flex justify-center mt-3'>
<a href ="https://ab-africanprojects.com/usafi-sanitation_demo/"  class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3">View Business</a>
</div>
</div>
</div>

<div class="rounded-xl shadow-lg bg-white  ">
      <div class="p-4 flex flex-col">
        <div class="rounded-xl overflow-hidden">
          <img src="./img/Scanpay.jpeg" class="h-64 w-full" alt="Business Image" ></img>
      </div>
 
      <h5 class="text-2xl md:text-2xl text-[#009A9A] font-Inter font-extrabold mt-4">Auspicious Blockchain </h5>
    
      <p class="text-black-500 lg:text-base xl-text-l md:text-base font-extrabold font-roboto mt-3">Auspicious Blockchain allows you to invest in Africa and Growth Markets using Blockchain platform and infrastructure to allow crowdfunding and enable African Diaspora in funding development.

      </p>
      <div class='flex justify-center mt-3'>
<a href ="https://ab-africanprojects.com/scanpay_demo/"  class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3">View Business</a>
</div>
</div>
</div>



</div>




                    <div  className="flex flex-col md:flex-row  mt-40 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
                        <div class="flex  flex-col border-gray-400 justify-center text-[#009A9A]">
                          <div class="flex  text-[20px] font-bold "> <img class="w-[650px]" src="./img/bottom-left.png"/></div>
                          
                        </div>
                        <div class=" flex items-center justify-center text-[#009A9A]  font-Inter text-[45px] font-normal">
                          <div className="text-[#009A9A] font-extrabold  ">
                    <p class=" text-[#000000] text-[42px] md:text-[48px] leading-[49.59px] pb-0 mb-0 w-[100%] ">Support  an African </p>
                    <p>Business</p>
                    <div className="flex font-Inter font-normal text-[13px] mt-5">
                          
                            <div className=" ">
                            <button class="bg-gradient-to-r from-cyan-500 bg-[#1E242C] mr-2 hover:bg-[#009A9A] text-white py-3 px-4 rounded-full">
              Support a Business 
                  </button>
                            
                          </div>
                          
                        </div></div></div>
                    
                        
              </div>
              
                    <div  className="flex   mt-24 bg-black-400 bg-black  justify-between  border-red-400  mx-auto item-center tracking-tighter"> 
                    <div class="flex flex-col md:flex-row  mt-10 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
                
               
                
                
                <div className="mb-10 bg-milala-footer bg-50% bg-no-repeat pt-40 md:pt-1 mr-10 h-[210px] w-[100%] rounded-3xl border-[#f1fafa] drop-shadow-xl text-[#009A9A] space-y-5">
                    
                  
                    <p>Milala uses the Blockchain technology to
help you Support businesses and startups with massive ROI </p>
                </div>
                <div className="flex ">
                <div className="h-[210px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl text-[#009A9A] space-y-5">
                    <p className="font-bold mb-7">Account </p>
                    <span className="text-sm space-y-5"><p>My Portfolio </p>
                    <p>Sign Up </p>
                    <p>Login </p></span>
                </div>
                
                <div className="h-[210px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl text-[#009A9A] space-y-5">
                    <p className="font-bold mb-7">Legal </p>
                    <span className="text-sm space-y-5"><p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </span>
                </div>
                
                <div className="h-[210px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl text-[#009A9A] space-y-5">
                    <p className="font-bold mb-7">More </p>
                    <span className="text-sm space-y-5"><p>FAQ</p>
                    <p>About Us </p>
                    <p>Contact Us</p></span>
                </div>
                
                
            </div>  
            </div>
                        
                  </div>
              
            
            
              <div className="flex bg-black-400 border-t-zinc-600 bg-black  justify-between  border-red-400  mx-auto item-center tracking-tighter"> 
                    <div class="flex border-t-[0.5px] border-t-[#054d4d] mt-10 bg-black-400 justify-center  w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
                
               
                
                
                <div className="flex  flex-col h-[100px] items-center text-[#7da7a7] pt-10  text-sm">
                    
                  
                    <p className="">(c) Milala 2023. All Rights  Reserved</p>
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
