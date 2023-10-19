import React from 'react'

const Homepage = () => {
  return (
    <div class="container">
    <div class="mb-10 ml-4 mt-4 text-center text-3xl font-bold text-teal-600">Welcome to the Project Management Dashboard</div>
    <h2 class="mb-10 ml-14 text-xl font-bold text-teal-600 md:ml-20">Project Stats</h2>
    <div class="m-3 mx-auto mt-4 grid max-w-screen-lg gap-5 sm:grid-cols-3">
      <div class="rounded-xl border-t-teal-600 px-4 py-6 shadow-lg shadow-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 rounded-xl bg-teal-600 p-4 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
        </svg>
        <p class="mt-4 font-medium">Mila Tokens</p>
        <p class="mt-2 text-3xl font-medium">100</p>
      </div>
      <div class="rounded-xl px-4 py-6 shadow-lg shadow-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 rounded-xl bg-teal-600 p-4 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M12.084 2.868c.27-.468.833-.771 1.434-.771s1.164.303 1.434.77c.292.504.373 1.065.228 1.621l.571.477a1.978 1.978 0 00.228 2.777c.27.27.599.471.963.586l.475.687c.505-.144 1.016-.171 1.52-.075a1.97 1.97 0 002.777-1.692 6.145 6.145 0 00-.075-3.84 1.977 1.977 0 00-1.517-1.52c-.63-.09-1.27.045-1.846.378a12.02 12.02 0 00-1.163-1.18l.515-.646a1.97 1.97 0 00-.228-2.777 6.145 6.145 0 00-3.84-.075 1.97 1.97 0 00-1.52 1.517 12.024 12.024 0 00-1.18 1.163L4.916.646a1.97 1.97 0 00-2.777-.228 6.145 6.145 0 00-.075 3.84 1.977 1.977 0 001.517 1.52c.576.333 1.216.468 1.846.378.34.095.683.14 1.016.14a1.978 1.978 0 001.12-.361l.593.656a12.02 12.02 0 001.163 1.18 1.97 1.97 0 002.777.228c.135-.275.274-.548.42-.813.22-.41.463-.808.728-1.191.387-.562.802-1.11 1.241-1.644l.32-.378c.544.44 1.082.855 1.644 1.242.383.265.781.507 1.19.729.266.146.54.285.814.42zm-2.04 1.959a3.007 3.007 0 01-.807 2.61 5.985 5.985 0 000 3.602 3.007 3.007 0 01.807 2.61 5.985 5.985 0 003.603 0 3.007 3.007 0 012.61-.807 5.985 5.985 0 003.602 0 3.007 3.007 0 012.61.807 5.985 5.985 0 000 3.602 3.007 3.007 0 01-.807 2.61 5.985 5.985 0 000 3.602 3.007 3.007 0 01-.807 2.61 5.985 5.985 0 00-3.603 0 3.007 3.007 0 01-2.61.807 5.985 5.985 0 00-3.602 0 3.007 3.007 0 01-2.61-.807 5.985 5.985 0 00-3.602 0 3.007 3.007 0 01-2.61-.807 5.985 5.985 0 00-3.602 0 3.007 3.007 0 01-.807-2.61 5.985 5.985 0 000-3.602 3.007 3.007 0 01.807-2.61 5.985 5.985 0 000-3.602 3.007 3.007 0 01-.807-2.61 5.985 5.985 0 000-3.602 3.007 3.007 0 01.807-2.61 5.985 5.985 0 000-3.602 3.007 3.007 0 01.807-2.61 5.985 5.985 0 003.602 0 3.007 3.007 0 012.61-.807 5.985 5.985 0 003.602 0 3.007 3.007 0 012.61.807 5.985 5.985 0 003.602 0 3.007 3.007 0 012.61-.807 5.985 5.985 0 003.602 0 3.007 3.007 0 012.61.807 5.985 5.985 0 003.602 0 3.007 3.007 0 012.61-.807 5.985 5.985 0 000-3.602 3.007 3.007 0 01-.807-2.61z" />
        </svg>
  
        <p class="mt-4 font-medium">Projects</p>
        <p class="mt-2 text-3xl font-medium">2</p>
      </div>
      <div class="rounded-xl px-4 py-6 shadow-lg shadow-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 rounded-xl bg-teal-600 p-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="mt-4 font-medium">Funding Received</p>
        <p class="mt-2 text-3xl font-medium">$1500</p>
      </div>
    </div>
    <div class="m-10 mx-auto grid max-w-screen-lg gap-5 sm:grid-cols-3">
      <div class="rounded-xl px-4 py-6 shadow-lg shadow-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 rounded-xl bg-teal-600 p-4 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
        </svg>
        <p class="mt-4 font-medium">Proposals Submitted</p>
        <p class="mt-2 text-3xl font-medium">4</p>
      </div>
      <div class="rounded-xl px-4 py-6 shadow-lg shadow-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 rounded-xl bg-teal-600 p-4 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
        <p class="mt-4 font-medium">Milestones</p>
        <p class="mt-2 text-3xl font-medium">4</p>
      </div>
      <div class="rounded-xl px-4 py-6 shadow-lg shadow-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 rounded-xl bg-teal-600 p-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="mt-4 font-medium">Generated Revenue</p>
        <p class="mt-2 text-3xl font-medium">$2000</p>
      </div>
    </div>
  
    <h1 class="ml-14 text-xl font-bold text-teal-600 md:ml-20">Quick Overview</h1>
  
    <div class="flex w-full flex-col">
    
      <div class="ml-3 grid grid-cols-3 gap-5 p-2 sm:grid-cols-2 sm:p-10 md:grid-cols-1 lg:grid-cols-3">
        <div class="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p class="text-lg font-medium">Completed Milestones</p>
          <div class="mt-4 flex items-center rounded-lg bg-gray-100 px-2 py-1 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6 shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-sm">Milestone 1: Furniture</p>
          </div>
          <div class="mt-4 flex items-center rounded-lg bg-gray-100 px-2 py-1 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6 shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-sm">Milestone 2: MVP development</p>
          </div>
          <div class="mt-4 flex items-center rounded-lg bg-gray-100 px-2 py-1 text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6 shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="text-sm">Milestone 3: Hiring of a software development team</p>
          </div>
        </div>
  
        <div class="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p class="text-lg font-medium">Latest Proposals</p>
          <div class="flex items-center py-2">
            <p class="ml-4 w-56">
              <strong class="block font-medium text-teal-600">Proposal 3</strong>
              <span class="text-xs text-black"> Furniture and Staff <a class="text-md truncate whitespace-normal font-medium text-gray-700" href="#">The Money will be used to buy Furniture for the existing office space and hire additional staff</a> </span>
            </p>
          </div>
          <div class="flex items-center py-2">
            <p class="ml-4 w-56">
              <strong class="block font-medium text-teal-600">Proposal 3</strong>
              <span class="text-xs text-black"> Furniture and Staff <a class="text-md truncate whitespace-normal font-medium text-gray-700" href="#">The Money will be used to buy Furniture for the existing office space and hire additional staff</a> </span>
            </p>
          </div>
          <div class="flex items-center py-2">
            <p class="ml-4 w-56">
              <strong class="block font-medium text-teal-600">Proposal 3</strong>
              <span class="text-xs text-black"> Furniture and Staff <a class="text-md truncate whitespace-normal font-medium text-gray-700" href="#">The Money will be used to buy Furniture for the existing office space and hire additional staff</a> </span>
            </p>
          </div>
        </div>
  
        <div class="max-w-md rounded-xl border bg-white p-6 pb-10 text-gray-900">
          <p class="text-lg font-medium">Repaid Milestones</p>
          <div class="flex items-center py-2">
            <p class="ml-4 w-56">
              <strong class="block font-medium">Milestone 1</strong>
              <span class="text-xs text-gray-400"> Furniture and Staff </span>
            </p>
          </div>
          <div class="flex items-center py-2">
            <p class="ml-4 w-56">
              <strong class="block font-medium">Milestone 2</strong>
              <span class="text-xs text-gray-400"> Tech Team Hiring </span>
            </p>
          </div>
          <div class="flex items-center py-2">
            <p class="ml-4 w-56">
              <strong class="block font-medium">Milestone 3</strong>
              <span class="text-xs text-gray-400"> New Product's Prromotional Campaign </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Homepage