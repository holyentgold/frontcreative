import React from 'react';

const Financing = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-10">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
          Financing Matchmaker
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          We connect you with investors who are passionate about supporting creative professionals. Submit your project details, and let us match you with potential financiers.
        </p>

        <form className="mb-6">
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="projectName">
              Project Name:
            </label>
            <input
              type="text"
              id="projectName"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your project name"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="projectDetails">
              Project Details:
            </label>
            <textarea
              id="projectDetails"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Provide a detailed description of your project"
              rows="6"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="fundingAmount">
              Funding Amount Needed:
            </label>
            <input
              type="number"
              id="fundingAmount"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the amount of funding you need"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Submit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Financing;
