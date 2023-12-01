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
              Course Outline
            </div>
            <hr class="h-1 w-10 bg-teal-800" />
            <div class="mt-4">
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-teal-600 hover:text-teal-600"
                  href="/#section-one"
                >
                  What is Defi?
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-gray-600 hover:text-teal-600"
                  href="#"
                >
                  What can you do with Defi?
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-gray-600 hover:text-teal-600"
                  href="#"
                >
                  How can you take advantage of Defi?
                </a>
              </div>
            </div>
          </div>
          <article class="text-gray-800">
            <h2 class="mb-10 -mt-6 text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
              <span class="text-[#009A9A] ">Introduction to   DeFI (Decentralized Finance)</span>
            </h2>
            <h2 id="section-one" class="mb-4 text-3xl font-bold">
              What is Defi?
            </h2>
            <p class="mb-10 text-gray-600">
              Decentralized finance, or Defi, is a system for providing open
              access to financial services. This is achieved by recreating the
              tools of traditional finance in a cryptocurrency context, using
              blockchain as the means of distributing, recording and storing
              value.
            </p>
            <p class="mb-10 text-gray-600">
              From anywhere with an internet connection, you can lend, trade,
              and borrow using software that records and verifies financial
              actions in distributed financial databases. A distributed database
              is accessible across various locations; it collects and aggregates
              data from all users and uses a consensus mechanism to verify it.
            </p>
            <p class="mb-10 text-gray-600">
              Why is it permissionless? Well, in order to obtain credit from
              your bank – or to even obtain a bank account in the first place –
              you need to produce him certain documents and pass a background
              check to determine your creditworthiness. With Defi, no one cares
              who you are, where you are, or how rich you are. If you have an
              internet-connected device and a basic knowledge of how crypto
              works, you can interact with Defi and use it to manage your money
              and grow your wealth,
            </p>

            <h3 id="section-two" class="mb-4 text-3xl font-bold">
              What can you do with Defi?
            </h3>
            <p class="mb-10 text-gray-600">
              Defi is a means of managing and growing your money. Virtually
              anything you can do with a digital bank or credit card can be done
              in Defi. Instead of fiat currency (i.e. the money that’s stored in
              your bank), Defi uses stablecoins, usually pegged to the US dollar
              or to a national currency such as EUR or GBP. Instead of using
              assets such as property, gold, or savings as collateral, Defi uses
              crypto assets such as ETH or BTC. If you’d like to take out a loan
              in Defi, for example, you don’t need to declare your income,
              submit your tax documents, or prove your creditworthiness: you
              simply need to lock your crypto assets into a smart contract to be
              used as collateral.
            </p>
            <h2 id="section-two" class="mb-4 text-3xl font-bold">
              How can you take advantage of Defi?
            </h2>
            <p class="mb-10 text-gray-600">
              <ol class="list-disc">
                <li>Saving/Staking</li>
                <p class="mb-10 text-gray-600">
                  Defi wallets combine tools for money management into a mobile
                  or desktop app, allowing you to earn interest on your crypto
                  usually by staking crypto assets into a smart contract and to
                  receive an agreed return paid in that same cryptocurrency
                </p>
                <li>Borrowing</li>
                <p class="mb-10 text-gray-600">
                  Using the same platforms, you can borrow Stablecoins and
                  crypto assets, in return for paying interest. Given DEFI is
                  permissionless you can only borrow against existing crypto as
                  collateral, that way credit checks and application forms
                  aren't necessary.
                </p>
                <li>Yield Farming</li>
                <p class="mb-10 text-gray-600">
                  Similar to staking, yield farming enables you to earn interest
                  and secondary tokens by locking tokens such as ETH into smart
                  contracts. Whereas staking is passive - funds are locked up on
                  a one time basis - yield farming is the active pursuit of the
                  best yield so might involve multiple a complex set of steps
                  e.g staking ETH to mint a synthetic ETH, yETH which is then
                  staked elsewhere for a Stablecoin, which in turn is farmed
                  elsewhere.
                </p>
                <li>Liquidity Provision</li>
                <p class="mb-10 text-gray-600">
                  Defi users can ‘pool’ tokens into automated market makers
                  (AMMs) such as Uniswap. Every time someone swaps between the
                  two tokens that are in the pool (e.g. ETH and USDT), you’ll
                  earn a portion of the fee. All of these services – plus many
                  more, pertaining to things like credit, insurance, and
                  derivatives – are provided by smart contracts. These are
                  pieces of code that have been programmed to perform a
                  particular task. In traditional finance, these are processes
                  that are performed by people, such as bank managers and
                  accountants. Smart contracts automate this, creating a system
                  that is more efficient and inclusive.
                </p>
              </ol>
            </p>
            <h3 id="section-two" class="mb-4 text-3xl font-bold">
              Conclusion
            </h3>
            <p class="mb-10 text-gray-600">
              A smart contract can’t discriminate against you based on your
              income, gender, or nationality: it simply checks whether a
              transaction is valid (e.g. do you have enough collateral to
              receive the stablecoin loan you are seeking?) and then processes
              it. For example, when you lend money using a Defi lending
              platform, you don’t have to worry about the borrower running off
              with it and never returning it. The smart contract ensures that
              you retain a claim to your original stake (i.e. the capital you
              loaned), and are able to withdraw it at any time.
              <br></br>
              Similarly, if you’re borrowing money using Defi, the collateral
              you must lock into the smart contract will prevent you from
              defaulting on the debt along with an agreed process for increasing
              collateral if its value falls below a certain level. This results
              in a more transparent financial system in which anyone can
              participate.
            </p>
          </article>
          <div class="my-5 flex mr-10 ml-10 items-center justify-center">
          <Link href="/Courses">
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
