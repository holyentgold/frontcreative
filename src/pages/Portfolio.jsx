import React, { useState } from 'react';

const Portfolio = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [portfolioList, setPortfolioList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = { projectName, description };
    setPortfolioList([...portfolioList, newProject]);
    setProjectName('');
    setDescription('');
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-10">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
          Portfolio Showcase
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Showcase your latest creative projects here. Share your work with investors, collaborators, or clients.
        </p>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="projectName">
              Project Name:
            </label>
            <input
              type="text"
              id="projectName"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="description">
              Project Description:
            </label>
            <textarea
              id="description"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your project"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
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

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">Your Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioList.map((project, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-blue-600">{project.projectName}</h3>
                <p className="mt-2 text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
