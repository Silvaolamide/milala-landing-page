import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Navbar from '../components/navigation';

export default function Home() {
  return (
    <>
       <head>
          <title>Milestones</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;800;900&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
    </head>

   
      <div className="bg-hero-top h-[900px] bg-no-repeat bg-top-4 bg-50% ">
      <div id="navbar" class="rounded-xl p-3  bg-white  mx-8 px-4 py-0">
<Navbar />
</div>




        </div>
      <footer>
        {/* Add your footer content here */}
      </footer>
    </>
  );
}
