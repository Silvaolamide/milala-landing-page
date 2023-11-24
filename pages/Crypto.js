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
                  What is Crypto currency?
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-teal-600 hover:text-teal-600"
                  href="/#section-one"
                >
                  Different types of popular Cryptocurrencies
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-gray-600 hover:text-teal-600"
                  href="#"
                >
                  How to store & secure your crypto
                </a>
              </div>
              <div class="mb-3">
                <a
                  class="mb-1 text-sm font-medium text-gray-600 hover:text-teal-600"
                  href="#"
                >
                  What crypto storage really means
                </a>
              </div>
            </div>
          </div>
          <article class="text-gray-800">
            <h2 class="mb-10 -mt-6 text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
              <span class="text-[#009A9A] ">
                Introduction to (Crypto Currencies)
              </span>
            </h2>
            <h2 id="section-one" class="mb-4 text-3xl font-bold">
              What is Crypto currency?
            </h2>
            <p class="mb-10 text-gray-600">
              Cryptocurrency is a new form of internet money which you can spend
              and exchange like the money you are used to. It is also popular
              simply as an investment, which you can think of as holding shares
              in a company, though with certain key differences.
            </p>
            <p class="mb-10 text-gray-600">
              You’ll be reassured to know that using cryptocurrency is in many
              ways like using Euros or Dollars, or a payment service like
              Paypal. There are, however, some unique concepts and terms which
              you’ll need to become familiar with, which will help you navigate
              the different options for using cryptocurrency
            </p>
            <h2 id="section-one" class="mb-4 text-3xl font-bold">
              Different types of popular Cryptocurrencies
            </h2>
            <ol class="list-disc">
              <li>Bitcoin</li>
              <li>Ethereum</li>
              <li> Ripple (XRP)</li>
            </ol>
            <h2 id="section-two" class="mb-4 mt-7 text-3xl font-bold">
              What are Alt Coins
            </h2>
            <p class="mb-10 text-gray-600">
              Alternative digital currency to Bitcoin. While some altcoins are
              essentially just clones of Bitcoin, many others differentiate
              themselves through their technology and/or purpose. For example,
              Litecoin uses a more efficient hashing algorithm (called Scrypt)
              that allows blocks to be mined in one fourth the time that it
              takes to mine Bitcoin blocks. By utilizing modern technology,
              Litecoin has created a faster and more energy-efficient
              alternative to Bitcoin. Altcoins can make you more money than
              Bitcoin, only that it’s just a lot riskier, and you could lose
              everything in an instant.
            </p>
            <h2 id="section-two" class="mb-4 text-3xl font-bold">
              What are Stable Coins
            </h2>
            <p class="mb-10 text-gray-600">
              Cryptocurrency designed to minimize volatility and can be backed
              by fiat currency (US Dollar) or gold.They include
              <ol class="mt-3 list-disc">
                <li>Tether</li>
                <li>True USD</li>
                <li> USDC</li>
              </ol>
            </p>
            <h2 id="section-two" class="mb-4 text-3xl font-bold">
              Popular Cryptocurrency Exchanges
            </h2>

            <ol class="mt-3 list-disc">
              <li>Coinbase</li>
              <li>Blockchain.com</li>
              <li> MEW Wallet</li>
              <li> Gemini</li>
              <li> Voyager</li>
              <li> Crypto.com</li>
            </ol>
            <h3 id="section-two" class="mb-4 mt-6 text-3xl font-bold">
              How to Store & Secure Cryptocurrency
            </h3>
            <p class="mb-10 text-gray-600">
              As already described, cryptocurrency is a new type of money, and
              like any other money, your top priority is keeping it safe. With
              the money you are familiar with there are a couple of ways of
              looking after it.
              <p class="mb-10 text-gray-600">
                <ol class="list-disc">
                  <li>Look after it yourself</li>
                  <p class="mb-10 text-gray-600">
                    might mean a safe or vault, with a key or code that only you
                    hold.
                  </p>
                  <li>
                    Trust someone else to look after your crypto - Use a
                    custodial service, crypto version of a bank
                  </li>
                  <p class="mb-10 text-gray-600">
                    allowing someone else to look after it - most likely means
                    using a bank, who you trust to store it, but gives you
                    convenient access via an account, and maybe an App
                  </p>
                </ol>
              </p>
            </p>
            <h2 id="section-two" class="mb-4 text-3xl font-bold">
              What Crypto Storage Really Means
            </h2>
            <p class="mb-10 text-gray-600">
              To understand what cryptocurrency storage really means, let’s look
              at what you are used to and draw some useful comparisons:
            </p>
            <p class="mb-10 text-gray-600">
              <ol class="list-disc">
                <li>Digital banking</li>
                <p class="mb-10 text-gray-600">
                  Your banking App/online account are tools to access your
                  money. They don’t actually store any money, but are a
                  representation of the amount of money your bank holds on your
                  behalf. <br></br>
                  You prove ownership of the funds held by your bank with
                  credentials (such as personal details, biometrics, identity
                  documentation, passwords, pins etc). This allows you to move
                  or spend the money.<br></br>
                  Your bank balance is tied to an account with unique criteria -
                  sort code, account, IBAN - that enable you to spend and
                  receive funds. Cryptocurrency operates in a similar way,
                  except there is no bank.
                </p>
                <h3 id="section-two" class="mb-4 text-3xl font-bold">
                  How is crypto different from the traditional banking
                </h3>
                <li>
                  Trust someone else to look after your crypto - Use a custodial
                  service, crypto version of a bank
                </li>
                <p class="mb-10 text-gray-600">
                  The equivalent of your banking App or online account is a
                  crypto wallet, that you can access on your laptop or
                  smartphone.
                  <br></br>
                  The credential that proves ownership of crypto funds
                  associated with an address is called a Private Key, which can
                  be stored in a wallet. It is a long alphanumeric string as
                  crypto operates with no personal details. Safely storing
                  crypto boils down to keeping your Private Keys safe. <br></br>
                  Clever cryptography generates a version of your Private Key
                  called a Public Key. The Public Key provides one way access
                  only; someone can send you funds or view your address balance
                  in a compressed version called a Public Address. The public
                  address is the equivalent of your sort code/account number.
                  Your wallet will hold your Public Addresses which can be
                  generated as QR codes.
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
