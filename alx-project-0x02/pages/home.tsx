import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-5xl font-extrabold text-blue-700 text-center mb-6">
        Welcome to the Home Page
      </h1>
      <p className="text-lg text-gray-700 text-center">
        This is the central landing page for our application. We will display dynamic content here soon.
      </p>
    </main>
  );
};

export default Home;