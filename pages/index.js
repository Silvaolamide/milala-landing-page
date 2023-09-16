import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "flowbite";

export default function Home() {
  return (
    <>
      <head>
        <title>Milala</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="/path/to/flowbite/dist/flowbite.min.js" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
          rel="stylesheet"
        ></link>
      </head>

      <section id="Navbar" class="rounded-xl fixed top-0 w-full">
        <nav class="rounded-[20px] bg-white fixed w-10/12 -mt-4 top-4 lg:left-28  right-3 left-3">
          <div class="max-w-screen-xl flex flex-wrap items-center  -pb-3 justify-between mx-auto p-2">
            <Link href="/" class="flex sm:items-center items-center">
              <Image
                src="./img/milala-logo.svg"
                class="h-12 w-20 mt-3 mr-3"
                alt="Milala Logo"
                height={20}
                width={20}
              ></Image>
              <span class="self-center text-[#009A9A] -ml-7 font-inter text-2xl  font-semibold whitespace-nowrap ">
                Milala
              </span>
            </Link>
            <div class="flex md:order-2">
              <div class="text-gray text-sm px-4 py-2 text-center mr-3 md:mr-0 ">
                {" "}
                <ConnectButton class="rounded-full"> </ConnectButton>{" "}
              </div>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full  md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border text-center border-gray-100  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent ">
                <li>
                  <Link
                    href="/"
                    class="block py-2 pl-3 pr-4 text-gray-900 bg-transparent rounded-xl  hover:text-teal md:bg-transparent md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-900  hoveroundedr:bg-teal-700 hover:text-teal-700 700 md:p-0 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    For Investors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/DashBoard"
                    class="block py-2 pl-3 pr-4 text-gray-900   hover:text-teal-700  md:p-0 md:dark:hover:text-blue-500 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    For Founders
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-900  hover:text-teal-700 md:p-0 "
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Recents"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded  hover:text-teal-700 md:p-0 "
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <div className="bg-hero-top h-[900px] bg-no-repeat bg-top-4 bg-50%  ">
        <header className="pt-9">
          <div className="flex  w-10/12 flex-col sm:flex-row   border-red-400 justify-center mx-auto item-center tracking-tighter">
            <div className="flex flex-col w-12/12 lg:w-5/12">
              <div className="flex flex-col  text-[102px] font-Inter font-extrabold  leading-[87.59px]">
                <p className="mt-[149px] mb-0 p-0">Support</p>
                <p className="text-[#009A9A] text-[68px] leading-[56.59px]">
                  African{" "}
                </p>
                <p className="text-[#009A9A] text-[68px] leading-[56.59px]">
                  Startups{" "}
                </p>
                <p className="text-[20px] font-extra-bold  leading-[29.59px] ">
                  in Africa & Diaspora
                </p>
              </div>
              <div className="flex text-[102px] font-roboto font-extra-bold  w-[100%] ">
                <div className="bg-no-repeat bg-top-5 bg-120% w-80 h-48 bg-milala-logo"></div>

                <div className=" flex flex-col text-[17px] font-bolder my-0  pt-8">
                  <div className="flex flex-col border-red-400 border-l-[1px] pl-4 h-24 justify-center tracking-normal ">
                    <span className="inline-block">
                      Milala uses the{" "}
                      <span className="text-[#009A9A] ">
                        Blockchain technology
                      </span>{" "}
                      to help you Support Startupes with massive ROI
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex font-Inter font-normal text-[13px]">
                <div className="">
                  <button class="bg-gradient-to-r from-cyan-500 bg-[#1E242C] mr-2 hover:bg-[#009A9A] text-white py-3 px-4 rounded-full">
                    Support a Startup
                  </button>
                </div>
                <div className="">
                  <button
                    type="button"
                    class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-normal rounded-full text-sm px-5 py-2.5"
                  >
                    List My Startup
                  </button>
                </div>
              </div>
            </div>
            <div className="flex  flex-col  w-12/12 md:w-8/12 font-Inter  text-[90px] justify-center">
              <div className="border-0 justify-center    text-center">
                <img
                  className="w-[1500px]  mx-0 my-0 ml-0 sm:ml-10"
                  src="./img/7herob.png"
                  alt="Milala-Hero"
                />
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="bg-hero-mid h-[900px] bg-no-repeat bg-50% bg-top">
            <div className="flex flex-col md:flex-row mt-10 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter">
              <div class="text-[#009A9A] font-roboto text-[35px] md:text-[45px] font-normal ">
                <span className="text-[#009A9A] font-extrabold">Milala</span> |
                Easy investing from anywhere!
              </div>

              <div class="flex flex-col border-gray-400 justify-center ">
                <div class="flex justify-end text-[#009A9A] text-[15px] font-semibold">
                  24hrs Help
                </div>
                <div class="flex justify-end text-[#1E242C] text-4xl font-bold text-right ">
                  <span class="text-right text-[#009A9A]">+1</span>90-909-0998
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  justify-between w-10/12  border-red-400  mx-auto item-center tracking-tighter  mt-24">
              <div class="flex flex-col text-[#009A9A] font-Inter text-[20px]   h-[300px] w-[300px]">
                <p class="w-[100%]">1 - 4 Steps</p>
                <p class="text-[#000000] text-[48px] leading-[39.59px] pb-0 mb-0 w-[100%]  mt-10">
                  Step
                </p>
                <p
                  class="text-[#000000] text-[48px] leading-[46.59px] font-extrabold w-[100%]"
                  p-0
                >
                  by Step
                </p>
                <p class="text-[45px] font-extra-bold  leading-[29.59px] w-[100%] mt-2">
                  Investing
                </p>
                <div className="flex font-Inter font-normal text-[13px] mt-5">
                  <div className="">
                    <button class="bg-gradient-to-r from-cyan-500 bg-[#1E242C] mr-2 hover:bg-[#009A9A] text-white py-3 px-4 rounded-full">
                      Support a Startup
                    </button>
                  </div>
                  <div className="">
                    <button
                      type="button"
                      class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-normal rounded-full text-sm px-5 py-2.5"
                    >
                      List My Startup
                    </button>
                  </div>
                </div>
              </div>

              <div class="h-[290px] md:h-[510px] w-12/12 md:w-8/12 bg-milala-step bg-no-repeat bg-50%"></div>
            </div>

            <div
              id="Recents"
              className="bg-hero-bottom h-[1500px] bg-no-repeat bg-50%"
            >
              <div className="flex  mt-10 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter">
                <div class="text-[#009A9A] font-Inter text-[45px] font-normal">
                  <span className="text-[#009A9A] font-extrabold">
                    <p class="text-[#000000] text-[48px] leading-[39.59px] md:leading-[19.59px]  pb-0 mb-0 w-[100%] ">
                      Recent Startups{" "}
                    </p>
                    <p>Listed on Milala</p>{" "}
                    <div className="flex font-Inter font-normal text-[13px] mt-5">
                      <div className="">
                        <button
                          type="button"
                          class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-normal rounded-full text-sm px-5 py-2.5"
                        >
                          List My Startup
                        </button>
                      </div>
                    </div>
                  </span>
                </div>

                <div class="flex flex-col border-gray-400 justify-center text-[#009A9A]">
                  <div class="flex justify-end  text-[20px] font-bold">
                    View More{" "}
                    <img class="w-[19px] ml-3" src="./img/arrow.svg" />
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 px-14 md:grid-flow-col w-full md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mb-2 rounded-20 md:ml-2  md:flex items-center justify-evenly content-start">
                <div class="rounded-xl max-w-xs shadow-lg bg-white md:w-max  flex justify-center ">
                  <div class="p-4 flex flex-col">
                    <div class="rounded-xl overflow-hidden">
                      <img
                        src="./img/Loli.png"
                        class="h-64 w-full"
                        alt="Startup Image"
                      ></img>
                    </div>
                    <div class="flex items-center">
                      <h5 class="text-2xl md:text-2xl font-Inter text-[#009A9A] font-extrabold text-center mt-4">
                        Loli Creations
                      </h5>
                    </div>
                    <p class="text-black-500 font-roboto xl-text-l md:text-m font-extrabold lg:text-base mt-3">
                      Loli began out of a love for creating beautiful pieces of
                      handmade accessories. We offer tote bags, toiletry bags,
                      backpacks, purses, travel bags and laptop sleeves.
                    </p>
                    <div class="flex justify-center mt-3">
                      <Link
                        href="https://ab-africanprojects.com/loli-creations_demo/"
                        class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3"
                      >
                        View Startup
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="rounded-xl max-w-xs shadow-lg bg-white  ">
                  <div class="p-4 flex flex-col">
                    <div class="rounded-xl overflow-hidden">
                      <img
                        src="./img/Irrifarm.jpg"
                        class="h-64 w-full"
                        alt="Startup Image"
                      ></img>
                    </div>
                    <div class="flex items-center">
                      <h5 class="text-2xl md:text-2xl font-Inter text-[#009A9A] font-extrabold text-center mt-4">
                        IrriFarm
                      </h5>
                    </div>
                    <p class="text-black-500 lg:text-base xl-text-l md:text-base w-fit font-extrabold font-roboto mt-3">
                      We are an organization that was established with an aim of
                      helping farmers in Arid and Semi-Arid areas and other
                      areas that lack enough water to favor farming.
                    </p>
                    <div class="flex justify-center mt-6">
                      <Link
                        href="https://ab-africanprojects.com/irrifarm_demo/"
                        class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3"
                      >
                        View Startup
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="rounded-xl max-w-xs shadow-lg bg-white  ">
                  <div class="p-4 flex flex-col">
                    <div class="rounded-xl overflow-hidden">
                      <img
                        src="./img/Usafi.png"
                        class="h-64 w-full"
                        alt="Startup Image"
                      ></img>
                    </div>
                    <div class="flex items-center">
                      <h5 class="text-2xl md:text-2xl font-Inter font-extrabold text-[#009A9A] text-center mt-4">
                        Usafi Sanitation
                      </h5>
                    </div>
                    <p class="text-black-700 md:text-m lg:text-base xl-text-l font-extrabold font-roboto mt-3">
                      {" "}
                      Our vision is to improve sanitation, enhance lives and
                      improve human dignity and eliminate sanitation challenges
                      by ensuring people access proper sanitation by providing
                      Eco Friendly sanitation solutions.
                    </p>
                    <div class="flex justify-center mt-3">
                      <Link
                        href="https://ab-africanprojects.com/usafi-sanitation_demo/"
                        class="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3"
                      >
                        View Startup
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="container mx-auto">
                  <div className="max-w-xs mx-auto">
                    <div className="rounded-xl shadow-lg bg-white">
                      <div className="p-4 flex flex-col">
                        <div className="rounded-xl overflow-hidden">
                          <img
                            src="./img/Scanpay.jpeg"
                            className="h-64 w-full"
                            alt="Startup Image"
                          />
                        </div>
                        <h5 className="text-2xl md:text-2xl text-[#009A9A] font-Inter font-extrabold mt-4">
                          Auspicious Blockchain
                        </h5>
                        <p className="text-black-500 lg:text-base xl:text-l md:text-base font-extrabold font-roboto mt-3">
                          Auspicious Blockchain allows you to invest in Africa
                          and Growth Markets using a Blockchain platform and
                          infrastructure to enable crowdfunding and funding
                          development by the African Diaspora.
                        </p>
                        <div className="flex justify-center mt-3">
                          <Link
                            href="https://ab-africanprojects.com/scanpay_demo/"
                            className="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3"
                          >
                            View Startup
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                       {/**start of Features 
              <div className="container ">
                <div className="max-w-xs mx-auto">
                  <div className="rounded-xl shadow-lg -ml-10 bg-white">
                    <div className="p-4 flex flex-col">
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src="./img/Uamuzi.png"
                          className="h-64 w-full"
                          alt="Startup Image"
                        />
                      </div>
                      <h5 className="text-2xl md:text-2xl text-[#009A9A] font-Inter font-extrabold mt-4">
                        Uamuzi
                      </h5>
                      <p className="text-black-500 lg:text-base xl:text-l md:text-base font-extrabold font-roboto mt-3">
                        A Social networking platform advocating for youth
                        participation in governance and peacebuilding in Kenya
                        and Africa.
                      </p>
                      <div className="flex justify-center mt-3">
                        <Link
                          href="https://uamuzi.org/"
                          className="border-2 text-[#009A9A] bg-white border-[#009A9A] hover:border-white hover:bg-[#1E242C] hover:text-[#009A9A] focus:ring-4 focus:ring-gray-200 font-bold rounded-full text-sm px-5 py-2.5 mt-3"
                        >
                          View Startup
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              */}
              {/**start of Features */}
              <section class="mx-auto flex max-w-lg flex-col px-14 py-20 -mb-28  lg:max-w-screen-xl lg:flex-row">
              
                <div class="">
                
                  <h2 class="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
                    A <span class="text-indigo-600">revolutionary</span> way to
                    build websites
                  </h2>
                  <div class="grid gap-y-12 gap-x-8 lg:grid-cols-2">
                    <div>
                      <p class="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
                        Launch Websites in minutes
                      </p>
                      <p class="text-lg text-gray-800">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nam nihil reprehenderit laboriosam, exercitationem
                        consectetur deserunt aliquam ab maiores!
                      </p>
                    </div>
                    <div>
                      <p class="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
                        Never miss deadlines
                      </p>
                      <p class="text-lg text-gray-800">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nam nihil reprehenderit laboriosam, exercitationem
                        consectetur deserunt aliquam ab maiores!
                      </p>
                    </div>
                    <div>
                      <p class="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
                        Super Intuitive
                      </p>
                      <p class="text-lg text-gray-800">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nam nihil reprehenderit laboriosam, exercitationem
                        consectetur deserunt aliquam ab maiores!
                      </p>
                    </div>
                    <div>
                      <p class="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
                        Speedy Websites
                      </p>
                      <p class="text-lg text-gray-800">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nam nihil reprehenderit laboriosam, exercitationem
                        consectetur deserunt aliquam ab maiores!
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/**End of Features */}
              <div className="flex flex-col md:flex-row  mt-40 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter">
                <div class="flex  flex-col border-gray-400 justify-center text-[#009A9A]">
                  <div class="flex  text-[20px] font-bold ">
                    {" "}
                    <img class="w-[650px]" src="./img/bottom-left.png" />
                  </div>
                </div>
                <div class=" flex items-center justify-center text-[#009A9A]  font-Inter text-[45px] font-normal">
                  <div className="text-[#009A9A] font-extrabold  ">
                    <p class=" text-[#000000] text-[42px] md:text-[48px] leading-[49.59px] pb-0 mb-0 w-[100%] ">
                      Support an African{" "}
                    </p>
                    <p>Startup</p>
                    <div className="flex font-Inter font-normal text-[13px] mt-5">
                      <div className=" ">
                        <button class="bg-gradient-to-r from-cyan-500 bg-[#1E242C] mr-2 hover:bg-[#009A9A] text-white py-3 px-4 rounded-full">
                          Support a Startup
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#009A9A] font-extrabold  ">
                    <p class=" text-[#000000] ml-10 px-14 text-center mt-20 text-[50px] pb-0 mb-0 w-[11/12] ">
                  Contact us to <span className="text-[#009A9A] ">Support or List Your Business on Milala</span>
                    </p>
                    
                  </div>
              {/**Start of Contact */}
              <div class="sm:p-10 mt-2 mx-20 font-inter my-auto">
                <section class="max-w-screen-xl md:rounded-md  md:shadow-lg">
                  <div class="grid grid-cols-4 text-gray-800 lg:grid-cols-3">
                    <div class="col-span-4 px-8 py-10 text-gray-800 md:col-span-2  md:px-10 md:py-12 lg:col-span-1">
                      <h2 class="mb-8 text-2xl text-center text-[#009A9A] font-black">Our Contact Details</h2>
                      <ul>
                        <li class="mb-6 flex font-body items-start text-left">
                          <svg
                            class="shrink-0 mr-6 text-2xl text-[#009A9A] "
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
                            />
                          </svg>
                          <div>
                            <a
                              class="cursor-pointer font-inter text-base md:text-lg"
                              href="#"
                            >
                             milala@support.com
                            </a>
                            <span class="block text-xs uppercase">email</span>
                          </div>
                        </li>
                        <li class="my-6 flex items-center text-left">
                          <svg
                            class="shrink-0 mr-6 text-2xl text-[#009A9A] "
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 1024 1024"
                          >
                            <path
                              fill="currentColor"
                              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6z"
                            />
                          </svg>
                          <div>
                            <a
                              class="cursor-pointer font-inter text-base md:text-lg"
                              href="#"
                            >
                              milala DAO
                            </a>
                            <span class="block text-xs uppercase">twitter</span>
                          </div>
                        </li>
                        <li class="my-6 flex items-center text-left">
                          <svg
                            class="shrink-0 mr-6 text-2xl text-[#009A9A] "
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <div>
                            <p class="font-inter text-base md:text-lg">
                              milala DAO
                            </p>
                            <span class="block text-xs uppercase">
                              LinkedIn
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="order-first col-span-4 max-w-screen-md px-8 py-10 md:order-last md:col-span-2 md:px-10 md:py-12">
                      <h2 class="mb-8 text-2xl text-center text-[#009A9A]  font-black">Send us a Message</h2>
                    
                      <form action="">
                        <div class="md:col-gap-4 mb-5 grid md:grid-cols-2">
                        <input
                            class="col-span-1 w-full border-none py-3 text-md outline-none "
                            type="name"
                            placeholder="Name"
                            name="Name"
                          />
                          <input
                            class="col-span-1 w-full border-none py-3 text-md outline-none "
                            type="email"
                            placeholder="Email"
                            name="email"
                          />
                        </div>
                        <textarea
                          class="mb-10 w-full resize-y whitespace-pre-wrap border-none py-3 text-md outline-none "
                          id=""
                          rows="6"
                          placeholder="Question"
                          name="question"
                        ></textarea>
                        <button
                          type="submit"
                          class="group flex cursor-pointer items-center rounded-xl bg-teal-600 bg-none px-8 py-4 text-center font-semibold leading-tight text-white"
                        >
                          Send
                          <svg
                            class="group-hover:ml-8 ml-4 transition-all"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12L3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15"
                            />
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                </section>
              </div>
              {/**End of Contact */}

              <div className="flex   mt-24 bg-black-400 bg-black  justify-between  border-red-400  mx-auto item-center tracking-tighter">
                <div class="flex flex-col md:flex-row  mt-10 bg-black-400  justify-between w-10/12 border-red-400  mx-auto item-center tracking-tighter">
                  <div className="mb-10 bg-milala-footer bg-50% bg-no-repeat pt-40 md:pt-1 mr-10 h-[210px] w-[100%] rounded-3xl border-[#f1fafa] drop-shadow-xl text-[#009A9A] space-y-5">
                    <p>
                      Milala uses the Blockchain technology to help you Support
                      Startupes and Startups with massive ROI{" "}
                    </p>
                  </div>
                  <div className="flex ">
                    <div className="h-[210px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl text-[#009A9A] space-y-5">
                      <p className="font-bold mb-7">Account </p>
                      <span className="text-sm space-y-5">
                        <p>My Portfolio </p>
                        <p>Sign Up </p>
                        <p>Login </p>
                      </span>
                    </div>

                    <div className="h-[210px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl text-[#009A9A] space-y-5">
                      <p className="font-bold mb-7">Legal </p>
                      <span className="text-sm space-y-5">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                      </span>
                    </div>

                    <div className="h-[210px] w-[250px] rounded-3xl border-[#f1fafa] drop-shadow-xl text-[#009A9A] space-y-5">
                      <p className="font-bold mb-7">More </p>
                      <span className="text-sm space-y-5">
                        <p>FAQ</p>
                        <p>For Investors Us </p>
                        <p>Contact Us</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex bg-black-400 border-t-zinc-600 bg-black  justify-between  border-red-400  mx-auto item-center tracking-tighter">
                <div class="flex border-t-[0.5px] border-t-[#054d4d] mt-10 bg-black-400 justify-center  w-10/12 border-red-400  mx-auto item-center tracking-tighter">
                  <div className="flex  flex-col h-[100px] items-center text-[#7da7a7] pt-10  text-sm">
                    <p className="">(c) Milala 2023. All Rights Reserved</p>
                    <p>
                      Powered by:{" "}
                      <span className=" text-lg font-semibold">
                        Auspicious Blockchain
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer></footer>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </div>
    </>
  );
}
