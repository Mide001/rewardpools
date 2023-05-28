import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const StakeListing = () => {
  const [projectName, setProjectName] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [stakingDetails, setStakingDetails] = useState("");
  const [projectWebsite, setProjectWebsite] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (projectName.trim() === "") {
      errors.projectName = "Project name is required.";
    }

    if (teamMembers.trim() === "") {
      errors.teamMembers = "Team members are required.";
    }

    if (projectDescription.trim() === "") {
      errors.projectDescription = "Project description is required.";
    }

    if (stakingDetails.trim() === "") {
      errors.stakingDetails = "Staking details are required.";
    }

    if (projectWebsite.trim() === "") {
      errors.projectWebsite = "Project website is required.";
    } else if (!projectWebsite.startsWith("https://www.")) {
      errors.projectWebsite =
        "Project website should start with 'https://www.'.";
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
        teamMembers,
        projectDescription,
        stakingDetails,
        projectWebsite,
      });

      try {
        const response = await axios.post("/submit-form", {
          projectName,
          teamMembers,
          projectDescription,
          stakingDetails,
          projectWebsite,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }

      setProjectName("");
      setTeamMembers("");
      setProjectDescription("");
      setStakingDetails("");
      setProjectWebsite("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-16">
        <h2 className="text-mid mb-4 font-bold text-gray-800 text-center">
          Stake Pool Listing Form
        </h2>

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
              htmlFor="teamMembers"
              className="block mb-2 text-black font-bold"
            >
              Team Members:
            </label>
            <input
              type="text"
              id="teamMembers"
              placeholder="Enter Name Of Team Members"
              value={teamMembers}
              onChange={(event) => setTeamMembers(event.target.value)}
              className="w-full p-2 border rounded font-semibold text-gray-600"
            />
            {formErrors.teamMembers && (
              <span className="text-red-500">{formErrors.teamMembers}</span>
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
          <div className="mb-4">
            <label
              htmlFor="stakingDetails"
              className="block mb-2 text-black font-bold"
            >
              Staking Details:
            </label>
            <textarea
              id="stakingDetails"
              placeholder="Enter Staking Details like stake duration, reward structure (APY)"
              value={stakingDetails}
              onChange={(event) => setStakingDetails(event.target.value)}
              className="w-full p-4 border rounded font-semibold text-gray-600"
            ></textarea>
            {formErrors.stakingDetails && (
              <span className="text-red-500">{formErrors.stakingDetails}</span>
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
          <button
            type="submit"
            className="bg-[#22647b] hover:bg-[#22647b]-300 text-white font-bold py-2 px-4 rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default StakeListing;
