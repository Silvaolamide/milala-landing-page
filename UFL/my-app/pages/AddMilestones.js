import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Label } from 'flowbite-react';
import { Textarea } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import { Select } from 'flowbite-react';
import { Radio } from 'flowbite-react';
import { FileInput } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { ethers } from "ethers";
import DashBoard from './DashBoard';

import { useContractWrite, usePrepareContractWrite,useWaitForTransaction } from 'wagmi'
import { contractABI,contractAddress } from "../components/abi/utils/constant";
import Loading from "@/components/global/Loading";

import { useDebounce } from 'use-debounce';

function weiValue(ethValue){
  if((ethValue != undefined) && (ethValue != "")){
    return(
      ethers.utils.parseUnits(ethValue.toString(), 'ether').toString()
    )
  }
};







const AddMilestone = () => {



  const [fundingAmount, setFundingAmount] = useState('0');
  const [milestoneDescription, setMilestoneDescription] = useState('');
  



   const { config:Milestone } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
   functionName: 'createMilestone',
    args:[milestoneDescription,(fundingAmount)]
  })
  const { data:allowanceData, isLoading, write:writeMilestone } = useContractWrite(Milestone)
  
console.log("data:",allowanceData)

const { isLoading:botLoading} = useWaitForTransaction({
  confirmations: 1,
   hash: allowanceData?.hash,
 })
  return (
    <>
    <DashBoard class="">
    <div class="ml-20 mr-20 mt-4 py-12 justify-center">
    <h1 class="py-1 font-bold text-black text-2xl text-center">Fill In the Details For Your Startup's Milestones</h1>


<div id="textarea" class="top-20 mt-4 justify-center">
  <div className="mb-2 block">
    <Label
      htmlFor="comment"
      value="Milestone Description"
    />
  </div>
  <Textarea
    id="comment"
    placeholder="Provide a Brief description of this Milestone..."
    required={true}
    rows={3}
    onChange={(e) => setMilestoneDescription(e.target.value)}
    value={milestoneDescription}
  />
</div>

<div>
  <div className="mb-2 mt-3 block">
    <Label
      htmlFor="title"
      value="Funding Required"
    />
  </div>
  <TextInput
  id="amountInput"     // Change the id to something more appropriate for amount input
  type="number"        // Change the type to 'number' for amount input
  placeholder="Funding Amount 1"  // Change the placeholder text to something suitable for amounts
  required={true}       // Keep the 'required' attribute if you want to make it mandatory
  
  onChange={(e) => setFundingAmount(e.target.value)}
      value={fundingAmount}
/>

</div>





  <div class="my-5 flex mr-10 ml-10 items-center justify-center">
  {(isLoading||botLoading)?<Loading/>:(
  <button class=" mt-2 rounded-lg border-2 border-[#009A9A] bg-[#009A9A] px-6 py-2 font-medium text-white justify-center items-center transition hover:translate-y-1"
  
  onClick={()=>{
                          try{
                            writeMilestone?.();
                            
                      
                          }
                          catch(err){
                            console.log(err);
                          }
                        }}

                        disabled={fundingAmount <= 0}
  >
    
   Submit
  </button>
 ) }
</div>














    </div>
    </DashBoard>
    </>
  );
};

export default dynamic(() => Promise.resolve(AddMilestone), { ssr: false });
