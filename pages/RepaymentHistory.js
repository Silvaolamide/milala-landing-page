import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const MyProjects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      {/* Add your content here */}
    </div>
  );
};

export default dynamic(() => Promise.resolve(MyProjects), { ssr: false });
