import dynamic from "next/dynamic";
const Projects = () => {
return (
    
    <div class="grid grid-cols-1 md:grid-flow-col w-11/12 md:grid-cols-2 lg:grid-cols-3 gap-8 mt- mb-2 rounded-20 mx-auto my-auto md:flex justify-center  item-center tracking-tighter content-start">    
    
    <div class="rounded-2xl shadow-lg bg-white md:w-full w-full  flex justify-center ">
      <div class="p-4 flex flex-col">
    
          <img src="./img/Loli.png" class="h-64 rounded-xl overflow-hidden w-full" alt="Business Image" ></img>
     
      <div class="flex justify-center items-center">
      <h5 class="text-xl md:text-xl font-Inter text-[#009A9A]  items-center mt-4">Loli Creations</h5>
      </div>
      <p class="text-black font-roboto text-2xl xl-text-l md:text-2xl font-bold lg:text-base mt-3">Loli began out of a love for creating beautiful pieces of handmade accessories. 
We offer tote bags, toiletry bags, backpacks, purses, travel bags and laptop sleeves.


      </p>
      <div class='flex justify-center mt-3'>
<a href ="https://ab-africanprojects.com/loli-creations_demo/"   class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3">View Business</a>
</div> 

</div>
</div>


<div class="rounded-2xl w-full md:w-full shadow-lg bg-white  ">
      <div class="p-4 flex flex-col">
       
          <img src="./img/Irrifarm.jpg" class="rounded-2xl overflow-hidden h-64 w-full" alt="Business Image" ></img>
      
      <div class="flex justify-center items-center">
      <h5 class="text-xl md:text-xl font-Inter text-[#009A9A]  text-center mt-4">IrriFarm</h5>
      </div>
      <p class="text-black lg:text-base xl-text-l md:text-base w-fit font-extrabold font-roboto mt-3">We are an organization that was established with an aim of helping farmers in Arid and Semi-Arid areas and other areas that lack enough water to favor farming. 
      </p>
      <div class='flex justify-center mt-6'>
<a href ="https://ab-africanprojects.com/irrifarm_demo/"  class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3" >View Business</a>
</div>

</div>
</div>

<div class="rounded-2xl w-full md:w-full shadow-lg bg-white  ">
      <div class="p-4 flex flex-col">
       
          <img src="./img/Usafi.png" class="h-64 w-full rounded-xl overflow-hidden" alt="Business Image" ></img>
   
      <div class="flex justify-center items-center">
      <h5 class="text-xl md:text-xl  font-Inter  text-[#009A9A] text-center items-center mt-4">Usafi Sanitation</h5>
      </div>
      <p class="text-black md:text-m lg:text-base xl-text-l font-extrabold font-roboto mt-3 whitespace-normal flex-wrap"> Our vision is to improve sanitation, enhance lives and improve human dignity and eliminate sanitation challenges by ensuring people  access  proper sanitation by providing Eco Friendly sanitation solutions.
      </p>
      <div class='flex justify-center mt-3'>
<a href ="https://ab-africanprojects.com/usafi-sanitation_demo/"  class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3">View Business</a>
</div>
</div>
</div>

<div class="rounded-2xl shadow-lg w-full md:w-full bg-white  ">
      <div class="p-4 flex flex-col">
        
          <img src="./img/Scanpay.jpeg" class="h-64 w-full rounded-3xl overflow-hidden" alt="Business Image" ></img>
      
 
      <div class="flex justify-center items-center">
      <h5 class="text-xl md:text-xl font-Inter text-[#009A9A]  text-center mt-4">Auspicious Blockchain</h5>
      </div>
      <p class="text-black lg:text-base xl-text-l md:text-base font-extrabold font-roboto mt-3">Auspicious Blockchain allows you to invest in Africa and Growth Markets using Blockchain platform and infrastructure to allow crowdfunding and enable African Diaspora in funding development.

      </p>
      <div class='flex justify-center mt-3'>
<a href ="https://ab-africanprojects.com/scanpay_demo/"  class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3">View Business</a>
</div>
</div>
</div>



</div>
)

}

export default dynamic (() => Promise.resolve(MyApp), {ssr: false})