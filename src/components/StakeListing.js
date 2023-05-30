import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const StakeListing = () => {
  const [projectName, setProjectName] = useState("");
  const [projectEmail, setProjectEmail] = useState("");
  const [tokenContractAddress, setTokenContractAddress] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [projectWebsite, setProjectWebsite] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [socialLinks, setSocialLinks] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (projectName.trim() === "") {
      errors.projectName = "Project name is required.";
    }

    if (projectEmail.trim() === "") {
      errors.projectEmail = "Project email is required";
    } else if (!/\S+@\S+\.\S+/.test(projectEmail)) {
      errors.projectEmail = "Invalid email format, must contain @ and .com";
    }

    if (tokenContractAddress.trim() === "") {
      errors.tokenContractAddress = "Token Contract Address is required";
    }

    if (walletAddress.trim() === "") {
      errors.walletAddress = "Wallet Address is required";
    }

    if (projectWebsite.trim() === "") {
      errors.projectWebsite = "Project website is required.";
    } else if (!projectWebsite.startsWith("https://www.")) {
      errors.projectWebsite =
        "Project website should start with 'https://www.'.";
    }

    if (socialLinks.trim() === "") {
      errors.socialLinks = "Social Links is required";
    }

    if (projectDescription.trim() === "") {
      errors.projectDescription = "Project description is required.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    // You can access the form input values from the component state variables

    if (validateForm()) {
      console.log({
        projectName,
        projectEmail,
        tokenContractAddress,
        walletAddress,
        projectWebsite,
        socialLinks,
        projectDescription,
      });

      try {
        const response = await axios.post("/submit-form", {
          projectName,
          projectEmail,
          tokenContractAddress,
          walletAddress,
          projectWebsite,
          socialLinks,
          projectDescription,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }

      setProjectName("");
      setProjectEmail("");
      setTokenContractAddress("");
      setWalletAddress("");
      setProjectWebsite("");
      setSocialLinks("");
      setProjectDescription("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-6 bg-gray-100 rounded shadow mt-16">
        <h2 className="text-mid mb-4 font-bold text-gray-800 text-center">
          Stake Pool Listing Form
        </h2>
        <p className="text-center text-gray-500 mb-4">
          Listing is free of charge. Please fill out the form and wait for our
          feedback.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-8">
            <label
              htmlFor="projectName"
              className="block mb-2 text-black font-bold"
            >
              Project Name:
            </label>
            <input
              type="text"
              id="projectName"
              placeholder="Enter Project Name"
              value={projectName}
              onChange={(event) => setProjectName(event.target.value)}
              className="w-full p-2 border rounded font-semibold text-gray-600"
            />
            {formErrors.projectName && (
              <span className="text-red-500">{formErrors.projectName}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="projectEmail"
              className="block mb-2 text-black font-bold"
            >
              Project Email:
            </label>
            <input
              type="text"
              id="projectEmail"
              placeholder="Enter The Project Email"
              value={projectEmail}
              onChange={(event) => setProjectEmail(event.target.value)}
              className="w-full p-2 border rounded font-semibold text-gray-600"
            />
            {formErrors.projectEmail && (
              <span className="text-red-500">{formErrors.projectEmail}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="tokenContractAddress"
              className="block mb-2 text-black font-bold"
            >
              Token Contract Address:
            </label>
            <input
              id="tokenContractAddress"
              placeholder="Enter Token Contract Address"
              value={tokenContractAddress}
              onChange={(event) => setTokenContractAddress(event.target.value)}
              className="w-full p-4 border rounded font-semibold text-gray-600"
            />
            {formErrors.tokenContractAddress && (
              <span className="text-red-500">
                {formErrors.tokenContractAddress}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="walletAddress"
              className="block mb-2 text-black font-bold"
            >
              Reward Wallet Address:
            </label>
            <input
              id="walletAddress"
              placeholder="Enter Reward Wallet Address"
              value={walletAddress}
              onChange={(event) => setWalletAddress(event.target.value)}
              className="w-full p-4 border rounded font-semibold text-gray-600"
            />
            {formErrors.tokenContractAddress && (
              <span className="text-red-500">
                {formErrors.tokenContractAddress}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="projectWebsite"
              className="block mb-2 text-black font-bold"
            >
              Project Website:
            </label>
            <input
              type="text"
              id="projectWebsite"
              placeholder="Enter Project Website (https://www.)"
              value={projectWebsite}
              onChange={(event) => setProjectWebsite(event.target.value)}
              className="w-full p-2 border rounded font-semibold text-gray-600"
            />
            {formErrors.projectWebsite && (
              <span className="text-red-500">{formErrors.projectWebsite}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="socialLinks"
              className="block mb-2 text-black font-bold"
            >
              Social Media Links
            </label>
            <textarea
              id="socialLinks"
              placeholder={`https://twitter.com/\nhttps://t.me/joinchat/{group_username}\nlogo link`}
              value={socialLinks}
              onChange={(event) => setSocialLinks(event.target.value)}
              className="w-full p-4 border rounded font-semibold text-gray-600"
            ></textarea>
            {formErrors.socialLinks && (
              <span className="text-red-500">{formErrors.socialLinks}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="projectDescription"
              className="block mb-2 text-black font-bold"
            >
              Project Description:
            </label>
            <textarea
              id="projectDescription"
              placeholder="A Brief Description Of The Project"
              value={projectDescription}
              onChange={(event) => setProjectDescription(event.target.value)}
              className="w-full p-4 border rounded font-semibold text-gray-600"
            ></textarea>
            {formErrors.projectDescription && (
              <span className="text-red-500">
                {formErrors.projectDescription}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#22647b] hover:bg-[#22647b]-300 text-white font-bold py-2 px-4 rounded w-full"
          >
            Submit
          </button>

          <p className="text-center text-black mt-6">
            For general inquiries please reach us on our channels or by{" "}
            <a href="mailto:info@rewardpools.io" className="text-[red]">
              email
            </a>
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="https://t.me/rewardpoolscommunity"
              className="mr-4 text-[#22647b] hover:text-blue-700"
            >
              Official Telegram
            </a>
            <a
              href="https://twitter.com/RewardPools"
              className="text-[#22647b] hover:text-blue-700"
            >
              Official Twitter
            </a>
          </div>
        </form>
      </div>

      <div className="bg-gray-100 rounded p-4 mt-8 flex justify-center">
        <div className="max-w-md">
          <h2 className="text-midxl text-gray-900 font-bold mb-4">LISTING REQUIREMENTS</h2>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Your project must be listed on PancakeSwap or other DEX.</li>
            <li>
              Add liquidity in RewardPools.io to fix the price of your token.
            </li>
            <li>Fill out the form on the side.</li>
          </ul>
          <h2 className="text-midxl text-gray-900 font-bold mt-8">DEVELOPERS WILL RECEIVE:</h2>
          <ul className="list-disc text-gray-600 ml-6">
            <li>Permanent Default Listing of your token on RewardPools.io</li>
            <li>
              Full Staking Pool Program (required amount in tokens to be agreed
              on the project needs*)
            </li>
          </ul>
          <h2 className="text-midxl text-gray-900 font-bold mt-8">
            PROMO INCLUDED FOR STAKING POOLS:
          </h2>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Dedicated banners on RewardPools.io</li>
            <li>
              Official posts on the social channels of the RewardPools
              ecosystem.
            </li>
          </ul>
          <p className="text-sm mt-4 text-gray-600">
            Ask about Featured Banner and Whitepaper Promotional Marketing
            Listings
          </p>
          <p className="text-sm text-gray-600">*subject to limitations</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StakeListing;
