import dynamic from "next/dynamic";

const CTA = () => {
    return(
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
    )
} 

export default dynamic (() => Promise.resolve(CTA), {ssr: false})