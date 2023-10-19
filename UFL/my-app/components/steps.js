import dynamic from "next/dynamic";
const Steps = () => {
    return(

<section id='steps'className="bg-hero-mid h-[900px] bg-no-repeat  bg-50% bg-top">
            <div  className="flex flex-col md:flex-row mt-6  bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
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
            </section>  



    )
}

export default dynamic (() => Promise.resolve(Steps), {ssr: false})