import React from "react";
import BackgroundStake from "./assets/background-ake.png";

const AboutUs = () => {
  return (
    <div
      className="container mx-auto px-4 py-8"
      style={{
        backgroundImage: `url(${BackgroundStake})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 mt-4 md:mt-4 animate-fade-in">
          <h2 id="AboutUs" className="text-large text-white font-bold mb-4">
            Earn Rewards On Digital Currencies.
          </h2>
          <p className="mt-4 text-gray-200">
            A Decentralized Blockchain-Based Staking Platform Alternative To
            IEOs & ICOs
          </p>
          <p className="mt-8 text-medium text-gray-200">
            The Unique Staking Platform that offers superior high-yield earnings
            in the latest project. Staking is one of the most popular ways to
            earn passive cryptocurrency income. Stake $HELP tokens and receive
            rewards in the Staking Pool native token. NO shills! No Frills! Just
            High Yields!
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col md:mt-24 animate-fade-in">
          <p className="text-medium text-gray-200 mb-2">Developers -</p>
          <p className="text-medium text-gray-200 mb-2">
            Earn investment and referral rewards to help fund project
            development while sharing in the RewardPools economy & ecology. To
            qualify for free listing and get seen by 1000s of prospective
            investors -
            <p className="text-medium text-gray-200">
              Submit Our Listing Application
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
