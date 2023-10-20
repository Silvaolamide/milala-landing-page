
import React, { useState,useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import DashBoard from './DashBoard';
import { useContractRead,useAccount } from 'wagmi';
import { contractABI, contractAddress } from "../components/abi/utils/constant";
import {ethers} from "ethers";


const MyProjects = () => {


  // const [numberOfMilestone, setNumberOfMilestone] = useState([]);
  const [milestoneData1, setMilestoneData] = useState([])
  const { address,  isConnected } = useAccount()
  const [numberError, setNumberError] = useState(false);
  const [loading, setLoading] = useState(true);
//   const { data: NumberOfMilestone, error: numberError } = useContractRead({
//     address: contractAddress,
//     abi: contractABI,
//     functionName: "getNumberOfMilestones",
//     watch: true,
//     cacheTime: 2000,
//   });
 
//   const formatUnixTimestamp = (timestamp) => {
//     const date = new Date(Number(timestamp) * 1000);
//     return date.toLocaleDateString();
//   };


 
 

//   const numberOfMilestones = Number(NumberOfMilestone); // Convert the result to a number
//   const milestoneIndices = Array.from({ length: numberOfMilestones }, (_, index) => index);
 
// const mile= milestoneIndices

// const milestonesToFetch =mile; // Milestone indices to fetch
// const milestoneDataPromises = milestonesToFetch.map((index) => {
//   return useContractRead({
//     address: contractAddress,
//     abi: contractABI,
//     functionName: "milestones",
//     args: [index],
//     watch: true,
//     cacheTime: 2000,
//   });
// });






// useEffect(() => {
//   Promise.all(milestoneDataPromises)
    
//     .then((results) => {
//       // 'results' is an array of the data for each milestone
//       const dataForMilestones = results.map((result) => result.data);
//       setMilestoneData(dataForMilestones); // Store the data in state
//     })
//     .catch((error) => {
//       console.error("Error fetching milestone data:", error);
//     });
// }, [isConnected]);

// console.log("data3:",milestoneData)


const rpcUrl = "https://polygon-mumbai.g.alchemy.com/v2/vn61eXIkpvUX5dPgfdirJyhHzm93wQNW";
const numberOfMilestonesFunctionName = "getNumberOfMilestones";
const milestonesFunctionName = "milestones";
//   // Create a provider using the JsonRpcProvider class
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
//   // Create a contract instance
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

 

  const formatUnixTimestamp = (timestamp) => {
        const date = new Date(Number(timestamp) * 1000);
        return date.toLocaleDateString();
      };
  
  async function getNumberOfMilestones() {
    try {
      const numberOfMilestones = await contract.functions[numberOfMilestonesFunctionName]();
      console.log(numberOfMilestones.toString())
      return numberOfMilestones.toString();
    } catch (error) {
      setNumberError(true);
      console.error("Error fetching the number of milestones:", error);
      return 0;
    }
  }

  async function getMilestoneData(index) {
    try {
      const milestoneData = await contract.functions[milestonesFunctionName](index);
      console.log(milestoneData)
      return milestoneData;
      
    } catch (error) {
      console.error("Error fetching milestone data at index", index, ":", error);
      return null;
    }
  }
 
  async function updateMilestonesData() {
    try {
      const numberOfMilestones = await getNumberOfMilestones();
      const milestones = [];

      for (let i = 0; i < numberOfMilestones; i++) {
        const milestoneData = await getMilestoneData(i);
        milestones.push(milestoneData);
      }

      setMilestoneData(milestones.reverse());
      setLoading(false);
    } catch (error) {
      console.error("Error updating milestones data:", error);
    }
  }

  useEffect(() => {
    updateMilestonesData();
    // Call the update function periodically or set up an event listener to update when the number of milestones changes
    const intervalId = setInterval(updateMilestonesData, 60000); // Update every 60 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

 
  return (
    <DashBoard class="h-screen">
      <section class="text-gray-600 font-inter  font-bold overflow-hidden">
        <h1 class="font-bold text-2xl items-center text-center text-black justify-center py-12 mt-3"> Milestones Status</h1>
       <div class="container px-5 mx-auto">
       {loading ? ( // Render a loading message when data is loading
          <div class="flex justify-center items-center">Loading milestones data...</div>
        ) : (
          <div class="-my-8 divide-y-2 divide-gray-100">
          {milestoneData1.slice().map((milestone, index) => (
             <div class="py-8 flex flex-wrap md:flex-nowrap" key={index}>
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-950">Milestone {index + 1}</span>
                 <span class="mt-1 text-gray-650 text-sm">{formatUnixTimestamp(milestone?milestone[3]:0)} {/* Display the date from the data */}</span>
                </div>
            <div class="md:flex-grow">
               <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{milestone?milestone[1]:0} {/* Display the description from the data */} ( {milestone?(milestone[2].toString()):0} USD)</h2>
                <div class="flex">
                  <div class={`mt-35 w-22 rounded-md ${ milestone && milestone[6] ? 'bg-teal-100' : 'bg-red-100'} px-2 py-1 text-sm font-medium text-teal-700 mr-2`}>
                    {milestone && milestone[6]? 'Completed' : 'In Progress'}
                  </div>
                 <div class={`mt-35 w-22 rounded-md ${ milestone && milestone[7] ? 'bg-teal-100' : 'bg-red-100'} px-2 py-1 text-sm font-medium text-teal-700`}>
                     {milestone && milestone[7]? 'Funded' : 'Not Funded'}
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
        </div>)}
       </div>
    </section>
  </DashBoard>
  );
};

export default dynamic(() => Promise.resolve(MyProjects), { ssr: false });
