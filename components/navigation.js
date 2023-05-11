import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <div  class="text-slate-700 container mx-auto rounded-xl  flex flex-row overflow-hidden px-2 py-2 lg:flex-row lg:items-center">    
    <div id =" logo" className="flex justify-center items-start m-3 px-4"> 
    <Link href="/">
          <img className="w-7 mx-1 my-0" src="./img/auspicious-blockchain-logo.svg" alt="Auspicious Blockchain Logo" />
          </Link>
        </div>
        <div className="font-Inter flex-start items-start px-3 text-xl font-extra-bold text-[#009A9A] text-right ">
          <Link href="/">
           Milala
        </Link>
        </div>
                     
        <nav aria-label="Header Navigation" font-Inter font-extra-bold class="peer-checked:pt-4  peer-checked:max-h-60 flex max-h-0 w-10/12 flex-col  overflow-hidden transition-all ">
  <ul class="flex w-10/12 bg-transparent   mx-8 flex-row gap-5 justify-center items-center space-y-2">
    <li class=""><a class="rounded text-gray transition " href="#">Investments</a></li>
    <li class=""><a class="rounded text-gray-700 transition " href="/milestone">Milestones</a></li>
  </ul>

  <div class=" flex items-center justify-end space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
    <a href="#" title="" class="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"> Log in </a>
    <a href="#" title="" class="whitespace-nowrap px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none">     <ConnectButton /></a>
  </div>
</nav>
    </div>
     
  )
}

export default Navbar;

