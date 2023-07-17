import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import DashBoard from './DashBoard';


const MyProjects = () => {
  return (
    <>
<DashBoard class="" >
    <section class="text-gray-600 body-font h-screen overflow-hidden">
    <h1 class="font-bold text-2xl items-center text-black text-center justify-center mt-3 py-12">Request For Funding</h1>
  <div class="container px-5  mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-950">Milestone 1</span>
          <span class="mt-1 text-gray-700 text-sm">12 Jun 2023</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Furniture & Leather(USD300)</h2>
          <p class="leading-relaxed">This amount is needed to help procure some of furniture’s needed in your office and to purchase more leather needed in producing more bags.</p>
          <Link href="https://www.tally.xyz/gov/Milala-DAO-3/proposal/create" class="text-teal-900 inline-flex items-center font-bold mt-4">Request Funding
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-950">Milestone 2</span>
          <span class="mt-1 text-gray-700 text-sm">13 Dec 2023</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Hiring/Human Resources (USD 420.81)</h2>
          <p class="leading-relaxed">This is an estimated amount we would use to support the payment of workers</p>
          <Link href="https://www.tally.xyz/gov/Milala-DAO-3/proposal/create" class="text-teal-900 inline-flex items-center font-bold mt-4">Request Funding
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-950">Milestone 3</span>
          <span class="text-sm text-gray-700">12 Jan 2024</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">20 Sewing Machines(USD1000)</h2>
          <p class="leading-relaxed">Currently, we need to expand production and we would like to buy more sewing machines</p>
          <Link href="https://www.tally.xyz/gov/Milala-DAO-3/proposal/create" class="text-teal-900 inline-flex items-center font-bold mt-4">Request Funding
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
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
