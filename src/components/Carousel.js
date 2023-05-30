import React from "react";

const Carousel = ({ pools }) => {
  return (
    <div className="container mx-auto relative mt-4">
      <h2 className="text-mid text-gray-900 text-center font-bold mb-4">
        Featured Staking Pools
      </h2>
      <div className="flex items-center justify-center">
        <div className="flex overflow-x-scroll">
          {pools.map((pool, index) => (
            <div
              key={pool.id}
              className={`w-full sm:w-1/1 md:w-1/1 lg:w-1/1 xl:w-1/1 h-40 flex-shrink-0 mx-4`}
            >
              {/* Render pool content here */}
              <div className="bg-[#021f40] w-full h-full flex flex-col items-center justify-center">
                <span className="text-gray-200 text-lg font-bold">
                  {pool.name}
                </span>
                <span className="text-gray-200 text-lg font-bold mt-2">
                  {pool.APY}% APY
                </span>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                  Join Pool
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
