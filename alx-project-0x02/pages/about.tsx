import React from 'react';
import Button from '@/components/common/Button';

const About: React.FC = () => {
  const handleButtonClick = (name: string) => {
    alert(`The ${name} button was clicked!`);
  };

  return (
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
        
        {/* Example 3: Large Size, Pill Shape (rounded-full) */}
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
  );
};

export default About;
