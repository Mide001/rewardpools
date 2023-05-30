import React from "react";
import RewardPool from "./assets/RewardPools-blue.png";
import HelpToken from "./assets/help-reward.png";

const AboutSection = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4">
          <img className="w-full h-auto" src={RewardPool} alt="rewardpools" />
          <p className="mt-4 text-black">
            RewardPools.io is a decentralized Blockchain-Based Staking Platform
            where investors earn rewards by staking for free in a variety of
            staking pools with superior rates of return.
          </p>
          <p className="mt-4 text-black">
            In addition, RewardPools.io is a platform alternative to IEOs and
            ICOs, that allows projects to bootstrap and help fund development.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 mt-12">
          <img className="w-12 h-12 mx-auto" src={HelpToken} alt="help-token" />
          <p className="mt-4 text-black">
            The HELP Reward Token ($HELP) is a BEP-20 Standard Passive Income
            Producing Utility Token operating on the Binance Smart Chain (BSC)
            and the flagship utility token of the RewardPools.io platform
            providing: staking options in a wide variety of exciting crypto
            projects, friendly project support and transparent and secure
            blockchain trading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
