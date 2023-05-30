import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How does Rewardpools.io work?",
      answer:
        "Rewardpools.io provides a user-friendly interface for creating and managing staking pools. Users can create their own pools, set the staking parameters, and invite others to join. The platform handles the distribution of rewards based on the pools performance.",
    },
    {
      question:
        "Can I participate in existing staking pools on Rewardpools.io?",
      answer:
        "Yes, Rewardpools.io allows users to participate in existing staking pools created by the developer. You can browse through the available pools, review their performance and rewards, and choose the ones you want to join.",
    },
    {
      question: "Is my staked cryptocurrency safe on Rewardpools.io?",
      answer:
        "Rewardpools.io takes security seriously and implements various measures to safeguard user funds. The platform utilizes industry-standard security practices, including secure wallet integrations and multi-factor authentication, to protect your staked cryptocurrency.",
    },
    {
      question: "Are there any fees associated with using Rewardpools.io?",
      answer:
        "Rewardpools.io may charge a small fee for certain actions, such as creating a pool or withdrawing rewards. The specific fee structure may vary depending on the cryptocurrency and network conditions. Detailed fee information is available on the platform.",
    },
    // Add more FAQ items as needed
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto px-4 mt-8 FAQ">
      <h2 id="FAQ" className="text-large text-black font-bold mb-8 text-center">
        FAQs
      </h2>
      <div className="flex justify-center">
        <div className="max-w-lg">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg p-4 mb-4 border border-gray-800 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h3 className="font-bold text-gray-900 text-medium">
                {item.question}
              </h3>
              {activeIndex === index && (
                <p className="mt-2 text-gray-700">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
