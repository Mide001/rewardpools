import React from "react";
import StakingImage from "./assets/staking.png";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 mt-8 animate-fade-in">
          <h2 id="AboutUs" className="text-large text-white font-bold mb-4">
            What is RewardPools.io?
          </h2>
          <p className="text-gray-400 text-medium">
            With RewardPools, you can participate in staking pools and earn
            rewards by staking your favorite cryptocurrencies. We offer a
            user-friendly and intuitive interface that allows you to easily
            stake your tokens and maximize your earnings. Whether you're a
            beginner or an experienced investor, our platform caters to all
            levels of expertise.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src={StakingImage} alt="RewardPools" className="rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
