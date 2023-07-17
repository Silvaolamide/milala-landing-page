import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import DashBoard from './DashBoard';

const MyProjects = () => {
  return (
    <>
    <DashBoard>

    <div class="h-screen">
      <h1 class="font-inter text-2xl font-bold text-center py-16 ">Repay Milestone</h1>
      {/* Add your content here */}
    </div>
    
    </DashBoard>
    </>
  );
};

export default dynamic(() => Promise.resolve(MyProjects), { ssr: false });
