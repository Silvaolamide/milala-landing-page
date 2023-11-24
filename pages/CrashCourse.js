import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const MyProjects = () => {
  return (
    <>
      <div class="w-screen bg-white pt-20">
        <main class="relative mx-auto px-10 md:max-w-screen-md">
          <div class="top-20 -left-56 mb-10 w-full max-w-xs rounded-md border bg-white px-6 py-6 shadow-md lg:absolute lg:w-56">
            <div class="pb-2 text-xl font-medium text-teal-600">
              Table of Contents
            </div>
            <hr class="h-1 w-10 bg-teal-800" />
            <div class="mt-4">
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-teal-600 hover:text-teal-600"
                  href="/#section-one"
                >
                 What is Blockchain?
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-gray-600 hover:text-teal-600"
                  href="#"
                >
                What is a Distributed Ledger?
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-gray-600 hover:text-teal-600"
                  href="#"
                >
                 Types of Blockchain
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-gray-600 hover:text-teal-600"
                  href="#"
                >
                 Importance of Blockchain technology today 

                </a>
              </div>
             
             
            </div>
          </div>
          <article class="text-gray-800">
            <h2 class="mb-10 -mt-6 text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
              <span class="text-[#009A9A] "> Blockchain Crash Course</span>
            </h2>
            <h2 id="section-one" class="mb-4 text-3xl font-bold">
              What is Blockchain technology ?
            </h2>
            <p class="mb-10 text-gray-600">
            A blockchain is a database that is shared across a network of
computers. When a record has been added to the network it is called a
chain and is very difficult to change. The records that the network
accepted are added to a block creating a blockchain as each block is
added. It enables the connection of people on an open system with
new trust architecture.
            </p>
            <p class="mb-10 text-gray-600">
            It enables you to be your own bank through a decentralized finance
system. Facilitates trustless transactions from anywhere around the
world, without the need for any intermediary.
 Blockchain is a communication network that supports Bitcoin.
 Bitcoin is the digital asset while blockchain is the technology upon
which bitcoin is built.
 Blockchain provides a secure method of transacting in bitcoin

            </p>
            <h3 id="section-two" class="mb-4 text-3xl font-bold">
            What is Distributed Ledger

            </h3>
            <p class="mb-10 text-gray-600">
            It is a Public database that can be accessed by numerous people. The database can
be shared and synchronized across multiple platforms.

            </p>
            <h2 id="section-two" class="mb-4 text-3xl font-bold">
        History of Blockchain
            </h2>
            <p class="mb-10 text-gray-600">
            In 1991 research scientist like Stuart Haber and W.Scott Stornetta introduced a
computationally practical solution to time stamp documents digitally in a way that
it will be difficult to tamper with or backdate. This was the original idea behind the
blockchain technology. A white paper, Published in 2008 that introduced a
Peer-to-Peer decentralized electronic cash system called bitcoin in 2008 was
posted to a cryptography mailing list by Satoshi Nakamoto.

            </p>
          
           
            <h3 id="section-two" class="mb-4 text-3xl font-bold">
            Types of Blockchain


            </h3>
            <p class="mb-10 text-gray-600 font-md">
          <ol class="list-disc">
            <li>Private</li>
            <li>Public</li>
            <li>Consortium</li>
            <li>Hybrid</li>
          </ol>

            </p>
            <h3 id="section-two" class="mb-4 text-3xl font-bold">
            Importance of Blockchain technology today 

            </h3>
            <p class="mb-10 text-gray-600">
            A Paradigm shift is taking place in today's market and everything is
becoming digitalized.
Blockchain technology will soon be the Fourth Industrial Revolution.
 The entire way we transact financially is changing and will be
changed forever.eg remove fees on financial transactions.
 Blockchain technology would remove physical contracts,
replace voting systems, land registries and passports and also
end the piracy of digital music, films, games, TV and other
products.In addition to that , Blockchain is cheaper because it eliminates middlemen and
hence there's no need to pay processing fees on transactions.


            </p>

          </article>
          <div class="my-5 flex mr-10 ml-10 items-center justify-center">
    <Link href="/DashBoard">
  <button class=" mt-2 rounded-lg border-2 border-[#009A9A] bg-[#009A9A] px-6 py-2 font-medium text-white justify-center items-center transition hover:translate-y-1">
    
   Back to Courses
  </button>
  </Link>
</div>

        </main>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(MyProjects), { ssr: false });
