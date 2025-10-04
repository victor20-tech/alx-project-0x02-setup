import React from 'react';
import Header from '@/components/layout/Header'; 
import Button from '@/components/common/Button'; 

const About: React.FC = () => {
  // Dummy onClick handler defined in Task 5
  const handleButtonClick = (name: string) => {
    alert(`The ${name} button was clicked!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Implement the Header component */}
      <Header />

      <main className="container mx-auto p-8">
        <h1 className="text-5xl font-extrabold text-green-700 text-center mb-6">
          About This Project
        </h1>
        <p className="text-xl text-gray-700 text-center mb-12">
          This page demonstrates the usage of the reusable Button component, showcasing different sizes and shapes.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Button Component Examples
        </h2>

        <div className="flex flex-col space-y-4 items-center">
          
          {/* Button implementations from Task 5 */}
          <Button 
            onClick={() => handleButtonClick('Small/Rounded-sm')} 
            size="small" 
            shape="rounded-sm"
          >
            Small Button (SM)
          </Button>

          <Button 
            onClick={() => handleButtonClick('Medium/Rounded-md')} 
            size="medium" 
            shape="rounded-md"
            color="secondary"
          >
            Medium Button (MD)
          </Button>
          
          <Button 
            onClick={() => handleButtonClick('Large/Rounded-full')} 
            size="large" 
            shape="rounded-full"
            color="danger"
          >
            Large Button (Full)
          </Button>

        </div>
        
      </main>
    </div>
  );
};

export default About;