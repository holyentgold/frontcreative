import React from 'react';
import { Link } from 'react-router-dom';
import legal from '../images/legal.jpg';
import workspace from '../images/workspace.jpg';
import portshow from '../images/portshow.jpg';
import matching from '../images/matching.jpg';

const Home = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-600">
        Welcome to Creative Hub
      </h1>
      <p className="text-center text-lg md:text-xl mb-8 text-gray-700">
        Empowering creatives with legal advice, financial resources, and collaborative workspaces.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Advisory & Legal */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img src={legal} alt="Advisory" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Advisory & Legal</h2>
          <p className="text-gray-600 mb-4">Get the legal help you need to protect your intellectual property.</p>
          <Link to="/advisory" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">
            Learn More
          </Link>
        </div>

        {/* Financing Matchmaker */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img src={matching} alt="Financing" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Financing Matchmaker</h2>
          <p className="text-gray-600 mb-4">Connect with investors who understand your creative work.</p>
          <Link to="/financing" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">
            Learn More
          </Link>
        </div>

        {/* Creative Workspaces */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img src={workspace} alt="Workspaces" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Creative Workspaces</h2>
          <p className="text-gray-600 mb-4">Find shared workspaces and essential equipment.</p>
          <Link to="/workspace" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">
            Explore
          </Link>
        </div>

        {/* Portfolio Showcase */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img src={portshow} alt="Portfolio" className="w-full h-40 object-cover rounded-md mb-4" />
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Portfolio Showcase</h2>
          <p className="text-gray-600 mb-4">Display your projects and attract investors or collaborators.</p>
          <Link to="/portfolio" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">
            Showcase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

