import dynamic from "next/dynamic";
const Footer = () => {
    return(
        <div>
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
                          <span className="text-sm space-y-5"><p>FAQs</p>
                          <p>About Us </p>
                          <p>Register </p></span>
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
    )
}
export default dynamic (() => Promise.resolve(Footer), {ssr: false})