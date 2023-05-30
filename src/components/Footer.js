import React from "react";
import Logo from "./assets/RewardPools.png";
import WhitepaperPDF from "./assets/whitepaper.pdf";

const Footer = () => {
  const handleScrollBehaviour = (event) => {
    event.preventDefault();
    document.getElementById("FAQ").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#22647b]">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-20 py-12 px-6 min-h-[10vh]">
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 lg:h-full">
          <div className="w-[70%] mx-auto">
            <img
              src={Logo}
              alt="Logo"
              className="w-50 h-30 object-cover object-center"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start w-full lg:w-1/2 lg:h-full gap-8 lg:gap-0">
          <div className="flex flex-col items-start w-full lg:w-1/2 lg:h-full">
            <h1 className="lg:text-lg font-medium text-center lg:text-left text-white">
              Docs
            </h1>
            <ul className="flex flex-col gap-3 items-start mt-6 text-gray-300 font-normal">
              <li className="text-center lg:text-left hover:underline cursor-pointer">
                <a
                  href={WhitepaperPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200"
                >
                  Whitepaper
                </a>
              </li>
              <li className="text-center lg:text-left hover:underline cursor-pointer">
                <a href="/StakeListing" className="text-gray-200">
                  Apply For Listing
                </a>
              </li>

              <li className="text-center lg:text-left hover:underline cursor-pointer">
                <a
                  href="#FAQ"
                  className="text-gray-200"
                  onClick={handleScrollBehaviour}
                >
                  FAQs
                </a>
              </li>
              <li className="text-center lg:text-left hover:underline cursor-pointer">
                <a href="/" className="text-gray-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start w-full lg:w-1/2 lg:h-full">
            <h1 className="lg:text-lg font-medium text-center lg:text-left text-white">
              Community
            </h1>
            <ul className="flex flex-col gap-3 items-start mt-6 text-gray-300 font-normal">
              <li className="text-center lg:text-left hover:underline cursor-pointer">
                Discord
              </li>
              <li className="text-center lg:text-left hover:underline cursor-pointer">
                Twitter
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <hr />
        <div className="w-full flex items-center justify-center text-gray-300 font-light py-12">
          Copyright © 2023 RewardPools.io
        </div>
      </div>
    </div>
  );
};

export default Footer;
