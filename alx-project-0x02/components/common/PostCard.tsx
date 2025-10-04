import React from 'react';
import type { PostProps } from '@/interfaces'; 

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 
                    flex flex-col h-full transition duration-300 hover:shadow-xl">
      <h3 className="text-xl font-bold text-gray-800 mb-2 leading-snug">
        {title}
      </h3>
      
      <p className="text-gray-600 text-sm flex-grow mb-4 line-clamp-4">
        {content}
      </p>
      <div className="mt-auto pt-3 border-t border-gray-100">
        <span className="text-xs font-semibold text-indigo-500 bg-indigo-50 
                         px-2 py-1 rounded-full">
          User ID: {userId}
        </span>
      </div>
    </div>
  );
};

export default PostCard;