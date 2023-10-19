import Link from "next/link";
import Image from "next/image";

const Hero = () =>{
return (
<section id="Hero" className="pt-2">
             
             <div  className="flex  w-10/12 flex-col sm:flex-row   border-red-400 justify-center mx-auto item-center tracking-tighter"> 
                 <div className="flex flex-col w-12/12 lg:w-5/12">
                   <div className="flex flex-col  text-[102px] font-Inter font-extrabold  leading-[87.59px]">
                     <p className="mt-[90px] mb-0 p-0">Support</p>
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
                
             
               </section>
               
          












)


}
export default dynamic (() => Promise.resolve(Hero), {ssr: false});