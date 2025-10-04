import React from 'react';
import Card from '../components/common/Card'; // Import the new Card component

const Home: React.FC = () => {
  return (
    <main className="container mx-auto p-8">
      
      <h1 className="text-5xl font-extrabold text-blue-700 text-center mb-12">
        Welcome Home!
      </h1>
      
      <p className="text-xl text-gray-700 text-center mb-10">
        Showcasing reusable components and TypeScript interfaces.
      </p>

      {/* Grid to display multiple Card instances */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <Card 
          title="Component Reusability"
          content="This Card component is designed to be highly modular and can be used across any page in the application, demonstrating best practices in component design."
        />
        
        <Card 
          title="TypeScript Props"
          content="The component strictly adheres to the defined CardProps interface, ensuring type safety and predictability when passing data."
        />
        
        <Card 
          title="Styling with Tailwind"
          content="Tailwind CSS utilities are used for rapid, efficient styling, enabling a clean and responsive layout without writing custom CSS files."
        />
        
      </div>
      
    </main>
  );
};

export default Home;