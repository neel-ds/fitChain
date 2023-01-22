import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { ConnectKitButton } from "connectkit";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <>
      <nav className="fixed z-10 w-full mx-auto bg-green-50 bg-opacity-20 border-gray-200 px-2 sm:px-4 py-3.5 rounded drop-shadow-lg">
        <div className="max-w-[1080px] container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center flex-1">
            <span className="flex flex-row items-center self-center text-2xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#00bdff] to-[#008dff]">
              <Image className="mr-2" src="/fitchain.png" width="60" height="80" alt="FitChain" />
              FitChain
            </span>
          </Link>
          <div className="flex md:order-2" style={{ marginLeft: "2rem" }}>
          <ConnectKitButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
