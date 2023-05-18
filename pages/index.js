import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Navbar from '../components/navigation';
import Hero from '../components/Hero';
import Steps from '../components/steps';
import Projects from '../components/projects';
import CTA from '../components/CTA';
import Footer from '../components/footer';
import Headers from '../components/Project-Header';

export default function Home() {
  return (
    <>
    <head>
          <title>Milala</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700;800;900&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
    </head>
    <div className="bg-hero-top h-[900px] bg-no-repeat bg-top-4 bg-50% ">
    <header className="pt-9">
   < Navbar />

    <Hero />
    </header>
<Steps />
<Headers />
<Projects />
<CTA />

<Footer />
  </div>      
                 
      

    </>
  )
}
