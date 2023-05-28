import React, { useState } from "react";
import Logo from "./assets/RewardPools.png";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const address = useAddress();
  console.log(address);

  return (
    <nav className="bg-[#22647b] border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-5">
            <a href="/">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />
            </a>
          </div>

          <div className="hidden sm:flex sm:space-x-4">
            <a
              className="text-gray-300 hover:bg-[#0f4250] px-3 py-2 rounded-md text-sm font-medium"
              href="/"
            >
              HOME
            </a>
            <a
              className="text-gray-300 hover:bg-[#0f4250] px-3 py-2 rounded-md text-sm font-medium"
              href="#AboutUs"
            >
              ABOUT
            </a>
            <a
              className="text-gray-300 hover:bg-[#0f4250] px-3 py-2 rounded-md text-sm font-medium"
              href="/pools"
            >
              POOLS
            </a>
            <a
              className="text-gray-300 hover:bg-[#0f4250] px-3 py-2 rounded-md text-sm font-medium"
              href="https://pancakeswap.finance/info/tokens/0xb0666c07e65d43958359ad25ae0307a36005b54d"
            >
              BUY $HELP
            </a>
            <ConnectWallet
              style={{
                backgroundColor: "#22647b",
                color: "#D1D5DB",
                borderColor: "#D1D5DB",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            />
          </div>
          <div className="sm:hidden">
            <button
              className="text-gray-300 hover:bg-[#0f4250] px-3 py-2 rounded-md text-sm font-medium flex"
              onClick={toggleMobileMenu}
            >
              {/* Replace MenuIcon with the appropriate icon component */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              className="text-gray-300 hover:bg-[#0f4250] block px-3 py-2 rounded-md text-base font-medium"
              href="/"
            >
              HOME
            </a>
            <a
              className="text-gray-300 hover:bg-[#0f4250] block px-3 py-2 rounded-md text-base font-medium"
              href="#AboutUs"
            >
              ABOUT
            </a>
            <a
              className="text-gray-300 hover:bg-[#0f4250] block px-3 py-2 rounded-md text-base font-medium"
              href="/pools"
            >
              POOLS
            </a>
            <a
              className="text-gray-300 hover:bg-[#0f4250] block px-3 py-2 rounded-md text-base font-medium"
              href="https://pancakeswap.finance/info/tokens/0xb0666c07e65d43958359ad25ae0307a36005b54d"
            >
              BUY $HELP
            </a>
            <ConnectWallet
              style={{
                backgroundColor: "#22647b",
                color: "#D1D5DB",
                borderColor: "#D1D5DB",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
