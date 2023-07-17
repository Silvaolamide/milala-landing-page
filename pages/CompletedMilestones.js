import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import DashBoard from './DashBoard';


const MyProjects = () => {
  return (
    <>
    <DashBoard class="h-full">
    <section class="text-gray-600 font-inter h-screen font-bold overflow-hidden">
    <h1 class="font-bold text-2xl items-center text-center text-black justify-center py-12 mt-3"> Milestones Status</h1>
  <div class="container px-5  mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-950">Milestone 1</span>
          <span class="mt-1 text-gray-650 text-sm">12 Jun 2023</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Furniture & Leather(USD300)</h2>
          <div class="flex">
  <div class="mt-35 w-22 rounded-md bg-teal-100 px-2 py-1 text-sm font-medium text-teal-700 mr-2">Completed</div>
  <div class="mt-35 w-22 rounded-md bg-teal-100 px-2 py-1 text-sm font-medium text-teal-700">Funded</div>
</div>

          <Link href="https://www.tally.xyz/gov/Milala-DAO-3/proposal/create" class="text-teal-600 inline-flex items-center mt-4">Request Funding
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          
<Link href="#" class="m-2 inline-flex items-center ml-3 justify-center rounded-xl border bg-white px-5 py-3 font-medium text-teal-700 shadow hover:bg-blue-50"> Update Progress </Link>
 

        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-950">Milestone 2</span>
          <span class="mt-1 text-gray-650 text-sm">13 Dec 2023</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Hiring/Human Resources (USD 420.81)</h2>
          <div class="flex">
  <div class="mt-35 w-22 rounded-md bg-teal-100 px-2 py-1 text-sm font-medium text-teal-700 mr-2">In Progress</div>
  <div class="mt-35 w-22 rounded-md bg-teal-100 px-2 py-1 text-sm font-medium text-teal-700">Funded</div>
</div>

          <Link href="https://www.tally.xyz/gov/Milala-DAO-3/proposal/create" class="text-teal-600 inline-flex items-center mt-4">Request Funding
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>

         

          <Link href="#" class="m-2 inline-flex items-center ml-3 justify-center rounded-xl border bg-white px-5 py-3 font-medium text-teal-700 shadow hover:bg-blue-50"> Update Progress </Link>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-950">Milestone 3</span>
          <span class="text-sm text-gray-650">12 Jan 2024</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">20 Sewing Machines(USD1000)</h2>
          <div class="flex">
  <div class="mt-35 w-26 rounded-md bg-teal-100 px-2 py-1 text-sm font-medium text-teal-700 mr-2">In Progress</div>
  <div class="mt-35 w-26 rounded-md bg-teal-100 px-2 py-1 text-sm font-medium text-teal-700">Request Submitted</div>
</div>
          <Link href="https://www.tally.xyz/gov/Milala-DAO-3/proposal/create" class="text-teal-600 inline-flex items-center mt-4">Request Funding
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
         
          <Link href="#" class="m-2 inline-flex items-center ml-3 justify-center rounded-xl border bg-white px-5 py-3 font-medium text-teal-700 shadow hover:bg-blue-50"> Update Progress </Link>
        </div>
      </div>
    </div>
  </div>
</section>

</DashBoard>
</>
  );
};

export default dynamic(() => Promise.resolve(MyProjects), { ssr: false });
