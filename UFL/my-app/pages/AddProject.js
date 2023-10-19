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

const MyProjects = () => {
  return (
    <>
    <DashBoard class="flex">

    <div class="ml-20 mr-20 py-12 justify-center">
<h1 class="py-1 font-bold text-black text-2xl text-center">Fill In the Details for your Startup</h1>

<div>
  <div className="mb-2 block">
    <Label
      htmlFor="name"
      value="Your Name"
    />
  </div>
  <TextInput
    id="username3"
    placeholder="Bonnie Green"
    required={true}
    addon="@"
  />
</div>

<div>
  <div className="mb-2 mt-3 block">
    <Label
      htmlFor="email4"
      value="Your email"
    />
  </div>
  <TextInput
    id="email4"
    type="email"
   
    placeholder="name@gmail.com"
    required={true}
  />
</div>

<div id="select">
  <div className="mb-2 mt-4 block">
    <Label
      htmlFor="countries"
      value="Select your Startup's Sector"
    />
  </div>
  <Select
    id="countries"
    required={true}
  >
    <option>
    Art and Craft
    </option>
    <option>
    Agriculture
    </option>
    <option>
      Health and Sanitation
    </option>
    <option>
     Education
    </option>
  </Select>
</div>


<fieldset
  className="flex flex-col mt-4 gap-4"
  id="radio"
>
  <legend>
    Choose your Startup Stage
  </legend>
  <div className="flex items-center mt-2 gap-2">
    <Radio
      id="united-state"
      name="countries"
      value="USA"
      defaultChecked={true}
    />
    <Label htmlFor="united-state">
      Prototype Stage
    </Label>
  </div>
  <div className="flex items-center mt-2 gap-2">
    <Radio
      id="germany"
      name="countries"
      value="Germany"
    />
    <Label htmlFor="germany">
      Growth Stage
    </Label>
  </div>
 
</fieldset>


<div id="fileUpload">
  <div className="mb-2 mt-4 block">
    <Label
      htmlFor="file"
      value="Upload Your Startup's Logo"
    />
  </div>
  <FileInput
    id="file"
    helperText="Provide Your startup's Logo for Quick Identification"
  />
</div>




<div id="textarea" class="top-20 mt-4 justify-center">
  <div className="mb-2 block">
    <Label
      htmlFor="comment"
      value="Your Startups' Description"
    />
  </div>
  <Textarea
    id="comment"
    placeholder="Provide a Brief description of your Startup..."
    required={true}
    rows={4}
  />
</div>

  <div class="my-5 flex mr-10 ml-10 items-center justify-center">
    <Link href="/DashBoard">
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

export default dynamic(() => Promise.resolve(MyProjects), { ssr: false });
