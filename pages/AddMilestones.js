import React from 'react';
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
import DashBoard from './DashBoard';

const AddMilestone = () => {
  return (
    <>
    <DashBoard class="h-100vh">
    <div class="ml-20 mr-20 mt-4 justify-center">

<div>
  <div className="mb-2 mt-3 block">
    <Label
      htmlFor="title"
      value="Enter Your Startup's Milestones"
    />
  </div>
  <TextInput
    id="email4"
    type="email"
   
    placeholder="Milestone 1"
    required={true}
  />
</div>

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
  />
</div>


<div>
  <div className="mb-2 mt-3 block">
    <Label
      htmlFor="title"
      value="Enter Your Startup's Milestones"
    />
  </div>
  <TextInput
    id="email4"
    type="email"
   
    placeholder="Milestone 2"
    required={true}
  />
</div>

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
    rows={4}
  />
</div>


<div>
  <div className="mb-2 mt-3 block">
    <Label
      htmlFor="title"
      value="Enter Your Startup's Milestones"
    />
  </div>
  <TextInput
    id="email4"
    type="email"
   
    placeholder="Milestone 3"
    required={true}
  />
</div>

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
    rows={4}
  />
</div>










<div>
    <Button gradientMonochrome="teal">
      Teal
    </Button>
  </div>



  <div class="my-5 flex mr-10 ml-10 items-center justify-center">
    <Link href="/projects">
  <button class=" mt-2 rounded-lg border-2 border-[#009A9A] bg-[#009A9A] px-6 py-2 font-medium text-white justify-center items-center transition hover:translate-y-1">
    
   Submit
  </button>
  </Link>
</div>














    </div>
    </DashBoard>
    </>
  );
};

export default dynamic(() => Promise.resolve(AddMilestone), { ssr: false });
