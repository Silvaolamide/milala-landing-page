import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import dynamic from "next/dynamic";
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";

const Nav = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          <span className="text-black">Home</span>
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          <span className="text-black">About</span>
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          <span className="text-black">Services</span>
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          <span className="text-black">Pricing</span>
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          <span className="text-black">Contact</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default dynamic(() => Promise.resolve(Nav), { ssr: false });
