import React, { useState } from 'react';
import axios from 'axios';

const Advisory = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:5000/api/advisory', { question });
      setResponse(result.data.answer);
      setQuestion(''); // Reset the question input after submission
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-10">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
          Legal and Marketing Advisory
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Ask any legal or marketing question, and we’ll get back to you with advice tailored to your needs.
        </p>
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Ask any legal or marketing question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows="5"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        {response && (
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Response:</h2>
            <p className="text-gray-700">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Advisory;

