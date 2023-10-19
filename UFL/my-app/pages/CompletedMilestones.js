// import React from 'react';
// import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';
// import Image from 'next/image';
// import Link from 'next/link';
// import DashBoard from './DashBoard';
// import { useAccount,useContractRead } from 'wagmi'
// import { contractABI,contractAddress } from "../components/abi/utils/constant";


 
// const MyProjects = () => {


//   const { data: NumberOfMilestone, error: numberError } = useContractRead({
//     address: contractAddress,
//     abi: contractABI,
//     functionName: "getNumberOfMilestones",
//     watch: true,
//   });
//   let totalMilestoneData = [];
//   // const numberOfMilestones = Number(NumberOfMilestone);
//   // console.log("number:",numberOfMilestones)
//   if (!numberError) {
    
//     const numberOfMilestones = Number(NumberOfMilestone); // Convert the result to a number
  
//     // Loop through the milestone indices and make contract calls for each
//     for (let i = 0; i < numberOfMilestones; i++) {
//       const { data: milestone, error } = useContractRead({
//         address: contractAddress,
//         abi: contractABI,
//         functionName: "milestones",
//         args: [i], // Use the current index as the milestone index
//         watch: true,
//       });
  
//       if (error) {
//         console.error(`Error reading data for milestone index ${i}`);
//       } else {
//         totalMilestoneData.push(milestone);
//       }
//     }
  
//     console.log("Milestone Data:", totalMilestoneData);
//   } else {
//     console.error("Error reading the number of milestones.");
//   }
//    // Define a function to convert a UNIX timestamp to a formatted date and time string
//     const formatUnixTimestamp = (timestamp) => {
//     const date = new Date(Number(timestamp) * 1000); // Convert to milliseconds
//     return date.toLocaleDateString(); // Display only the date
//   };

// return (
//   <DashBoard class="h-screen">
//     <section class="text-gray-600 font-inter  font-bold overflow-hidden">
//       <h1 class="font-bold text-2xl items-center text-center text-black justify-center py-12 mt-3"> Milestones Status</h1>
//       <div class="container px-5 mx-auto">
//         <div class="-my-8 divide-y-2 divide-gray-100">
//         {totalMilestoneData.map((milestone, index) => (
//             <div class="py-8 flex flex-wrap md:flex-nowrap" key={index}>
//               <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//                 <span class="font-semibold title-font text-gray-950">Milestone {index + 1}</span>
//                 <span class="mt-1 text-gray-650 text-sm">{formatUnixTimestamp(milestone?milestone[3]:0)} {/* Display the date from the data */}</span>
//               </div>
//               <div class="md:flex-grow">
//                 <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{milestone?milestone[1]:0} {/* Display the description from the data */} ( {milestone?(milestone[2].toString()):0} USD)</h2>
//                 <div class="flex">
//                   <div class={`mt-35 w-22 rounded-md ${milestone[6] ? 'bg-teal-100' : 'bg-red-100'} px-2 py-1 text-sm font-medium text-teal-700 mr-2`}>
//                     {milestone[6]? 'Completed' : 'In Progress'}
//                   </div>
//                   <div class={`mt-35 w-22 rounded-md ${milestone[7] ? 'bg-teal-100' : 'bg-red-100'} px-2 py-1 text-sm font-medium text-teal-700`}>
//                     {milestone[7]? 'Funded' : 'Not Funded'}
//                   </div>
//                 </div>

//                 <Link href="https://www.tally.xyz/gov/Milala-DAO-3/proposal/create" class="text-teal-600 inline-flex items-center mt-4">
//                   Request Funding
//                   <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                     <path d="M5 12h14"></path>
//                     <path d="M12 5l7 7-7 7"></path>
//                   </svg>
//                 </Link>

//                 <Link href="#" class="m-2 inline-flex items-center ml-3 justify-center rounded-xl border bg-white px-5 py-3 font-medium text-teal-700 shadow hover:bg-blue-50">
//                   Update Progress
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   </DashBoard>
// );
// };

// export default dynamic(() => Promise.resolve(MyProjects), { ssr: false });

import React, { useState,useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import DashBoard from './DashBoard';
import { useContractRead } from 'wagmi';
import { contractABI, contractAddress } from "../components/abi/utils/constant";

// const MyProjects = () => {
//   const { data: NumberOfMilestone, isFetched, error: numberError } = useContractRead({
//     address: contractAddress,
//     abi: contractABI,
//     functionName: "getNumberOfMilestones",
//     watch: true,
//   });
// console.log("number:",NumberOfMilestone)
//   const [totalMilestoneData, setTotalMilestoneData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const formatUnixTimestamp = (timestamp) => {
//     const date = new Date(Number(timestamp) * 1000);
//     return date.toLocaleDateString();
//   };

//   if (isFetched) {
//     // Data is available, update the state
//     const numberOfMilestones = Number(NumberOfMilestone);
//     const milestoneData = [];

//     for (let i = 0; i < numberOfMilestones; i++) {
//       const { data: milestone, error } = useContractRead({
//         address: contractAddress,
//         abi: contractABI,
//         functionName: "milestones",
//         args: [i],
//         watch: true,
//       });

//       if (error) {
//         console.error(`Error reading data for milestone index ${i}`);
//       } else {
//         milestoneData.push(milestone);
//       }
//     }
// console.log("Data:",milestoneData)
//     setTotalMilestoneData(milestoneData);
//     setLoading(false);
//    } else if (numberError) {
//      console.error("Error reading the number of milestones.");
//    }

//   return (
      // <DashBoard class="h-screen">
      //   <section class="text-gray-600 font-inter  font-bold overflow-hidden">
      //     <h1 class="font-bold text-2xl items-center text-center text-black justify-center py-12 mt-3"> Milestones Status</h1>
      //     <div class="container px-5 mx-auto">
      //       <div class="-my-8 divide-y-2 divide-gray-100">
      //       {totalMilestoneData.map((milestone, index) => (
      //           <div class="py-8 flex flex-wrap md:flex-nowrap" key={index}>
      //             <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      //               <span class="font-semibold title-font text-gray-950">Milestone {index + 1}</span>
      //               <span class="mt-1 text-gray-650 text-sm">{formatUnixTimestamp(milestone?milestone[3]:0)} {/* Display the date from the data */}</span>
      //             </div>
      //             <div class="md:flex-grow">
      //               <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{milestone?milestone[1]:0} {/* Display the description from the data */} ( {milestone?(milestone[2].toString()):0} USD)</h2>
      //               <div class="flex">
      //                 <div class={`mt-35 w-22 rounded-md ${milestone[6] ? 'bg-teal-100' : 'bg-red-100'} px-2 py-1 text-sm font-medium text-teal-700 mr-2`}>
      //                   {milestone[6]? 'Completed' : 'In Progress'}
      //                 </div>
      //                 <div class={`mt-35 w-22 rounded-md ${milestone[7] ? 'bg-teal-100' : 'bg-red-100'} px-2 py-1 text-sm font-medium text-teal-700`}>
      //                   {milestone[7]? 'Funded' : 'Not Funded'}
      //                 </div>
      //               </div>
    
      //               <Link href="https://www.tally.xyz/gov/Milala-DAO-3/proposal/create" class="text-teal-600 inline-flex items-center mt-4">
      //                 Request Funding
      //                 <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      //                   <path d="M5 12h14"></path>
      //                   <path d="M12 5l7 7-7 7"></path>
      //                 </svg>
      //               </Link>
    
      //               <Link href="#" class="m-2 inline-flex items-center ml-3 justify-center rounded-xl border bg-white px-5 py-3 font-medium text-teal-700 shadow hover:bg-blue-50">
      //                 Update Progress
      //               </Link>
      //             </div>
      //           </div>
      //         ))}
      //       </div>
      //     </div>
      //   </section>
      // </DashBoard>
//       <div>gggkgjk</div>
//     );
// };

// export default dynamic(() => Promise.resolve(MyProjects), { ssr: false });



const MyProjects = () => {


  // const [numberOfMilestone, setNumberOfMilestone] = useState([]);
  const [milestoneData, setMilestoneData] = useState([])


  const { data: NumberOfMilestone, error: numberError } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: "getNumberOfMilestones",
    watch: true,
  });
 
  const formatUnixTimestamp = (timestamp) => {
    const date = new Date(Number(timestamp) * 1000);
    return date.toLocaleDateString();
  };


 
 

  // useEffect(() => {
  //   if (NumberOfMilestone) {
     

  //     setNumberOfMilestone(milestoneIndices);
  //   }
  // }, [NumberOfMilestone]);
  const numberOfMilestones = Number(NumberOfMilestone); // Convert the result to a number
  const milestoneIndices = Array.from({ length: numberOfMilestones }, (_, index) => index);
  
const mile= milestoneIndices

const milestonesToFetch =mile; // Milestone indices to fetch
const milestoneDataPromises = milestonesToFetch.map((index) => {
  return useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: "milestones",
    args: [index],
    watch: true,
  });
});

useEffect(() => {
  Promise.all(milestoneDataPromises)
    // .then((results) => {
    //   // 'results' is an array of the data for each milestone
    //   for (let i = 0; i < milestonesToFetch.length; i++) {
    //     const milestone = results[i].data;
        
    //     console.log(`Data for milestone ${milestonesToFetch[i]}:`, milestone);
    //   }
    
    // })

    .then((results) => {
      // 'results' is an array of the data for each milestone
      const dataForMilestones = results.map((result) => result.data);
      setMilestoneData(dataForMilestones); // Store the data in state
    })
    .catch((error) => {
      console.error("Error fetching milestone data:", error);
    });
}, []);

console.log("data3:",milestoneData)

  return (
    <DashBoard class="h-screen">
      <section class="text-gray-600 font-inter  font-bold overflow-hidden">
        <h1 class="font-bold text-2xl items-center text-center text-black justify-center py-12 mt-3"> Milestones Status</h1>
       <div class="container px-5 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
          {milestoneData.slice().reverse().map((milestone, index) => (
             <div class="py-8 flex flex-wrap md:flex-nowrap" key={index}>
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-950">Milestone {index + 1}</span>
                 <span class="mt-1 text-gray-650 text-sm">{formatUnixTimestamp(milestone?milestone[3]:0)} {/* Display the date from the data */}</span>
                </div>
            <div class="md:flex-grow">
               <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{milestone?milestone[1]:0} {/* Display the description from the data */} ( {milestone?(milestone[2].toString()):0} USD)</h2>
                <div class="flex">
                  <div class={`mt-35 w-22 rounded-md ${milestone[6] ? 'bg-teal-100' : 'bg-red-100'} px-2 py-1 text-sm font-medium text-teal-700 mr-2`}>
                    {milestone[6]? 'Completed' : 'In Progress'}
                  </div>
                 <div class={`mt-35 w-22 rounded-md ${milestone[7] ? 'bg-teal-100' : 'bg-red-100'} px-2 py-1 text-sm font-medium text-teal-700`}>
                     {milestone[7]? 'Funded' : 'Not Funded'}
                 </div>
                 </div>
  
                  <Link href="https://www.tally.xyz/gov/Milala-DAO-3/proposal/create" class="text-teal-600 inline-flex items-center mt-4">
                 Request Funding
                 <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M5 12h14"></path>
                 <path d="M12 5l7 7-7 7"></path>
                 </svg>
               </Link>
  
               <Link href="#" class="m-2 inline-flex items-center ml-3 justify-center rounded-xl border bg-white px-5 py-3 font-medium text-teal-700 shadow hover:bg-blue-50">
                 Update Progress
                 </Link>
             </div>
           </div>
          ))}
        </div>
       </div>
    </section>
  </DashBoard>
  );
};

export default dynamic(() => Promise.resolve(MyProjects), { ssr: false });
