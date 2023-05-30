import React from "react";

const NewsletterSubscription = () => {
  return (
    <div className="bg-[#021f40] container mx-auto px-4 mt-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
          <h2 className="text-large text-center md:text-3xl lg:text-large font-bold mb-2 mt-4 subscribe">
            Stay up to date
            <p className="text-[green] text-mid text-center md:text-center">
            & filter through the noise
          </p>
          </h2>
        </div>
        <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
          <p className="text-gray-200 mb-2 mt-4 text-center">
            Subscribe to our newsletter and receive the latest news and updates
            straight to your inbox.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#FF8C00] text-white font-bold py-2 px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
