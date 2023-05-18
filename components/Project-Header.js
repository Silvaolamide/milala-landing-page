const Headers = () => {
    return(

        <div  className="flex -mt-10 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter"> 
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








        )
    }
    
    export default Headers;
    
        