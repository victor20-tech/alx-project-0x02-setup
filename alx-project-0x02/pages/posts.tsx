import React from 'react';
import Header from '@/components/layout/Header'; // Import Header

const Posts: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto p-8">
        <h1 className="text-5xl font-extrabold text-indigo-700 text-center mb-6">
          Posts List
        </h1>
        <p className="text-lg text-gray-700 text-center">
          This page will display a list of fetched posts using the PostCard component.
        </p>
      </main>
    </div>
  );
};

export default Posts;