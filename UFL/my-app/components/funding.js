import React, { useState } from 'react';

const RequestForFundingPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [milestone, setMilestone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform submission logic here
    console.log('Form submitted:', { title, description, milestone });

    // Clear form fields
    setTitle('');
    setDescription('');
    setMilestone('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Request for Funding</h1>
      <p className="text-lg text-gray-600">
        Welcome to the Request for Funding page. Here, you can submit your funding requests for review.
      </p>
      <form className="mt-6 w-1/2 max-w-lg" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            id="title"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            id="description"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mt-4">
          <label htmlFor="milestone" className="block text-gray-700 font-semibold mb-2">Milestone</label>
          <input
            type="text"
            id="milestone"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
            value={milestone}
            onChange={(e) => setMilestone(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestForFundingPage;
