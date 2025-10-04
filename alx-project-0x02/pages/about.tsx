import React from 'react';

const About: React.FC = () => {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-5xl font-extrabold text-green-700 text-center mb-6">
        About This Project
      </h1>
      <p className="text-lg text-gray-700 text-center">
        This project aims to teach fundamental concepts of Next.js, TypeScript, and Tailwind CSS [4].
      </p>
      <p className="text-md text-gray-500 text-center mt-4">
        We are currently implementing basic routing using the Pages Router [1, 3].
      </p>
    </main>
  );
};

export default About;