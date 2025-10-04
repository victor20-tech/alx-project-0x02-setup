import React from 'react';
import type { CardProps } from '@/interfaces'; 

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border-l-4 border-blue-500 
                    transition duration-300 hover:shadow-2xl transform hover:scale-[1.01]">
      
      {/* Title */}
      <h2 className="text-2xl font-bold mb-3 text-gray-800 border-b pb-2">
        {title}
      </h2>
      
      {/* Content */}
      <p className="text-gray-600 leading-relaxed mt-2">
        {content}
      </p>
    </div>
  );
};

export default Card;