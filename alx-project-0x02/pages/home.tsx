import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import type { NewPostData, CardProps } from '@/interfaces'; 

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const initialCards: CardProps[] = [
    {
      title: "Component Reusability",
      content: "This Card component is designed to be highly modular and can be used across any page in the application, demonstrating best practices in component design."
    },
    {
      title: "TypeScript Props",
      content: "The component strictly adheres to the defined CardProps interface, ensuring type safety and predictability when passing data."
    },
    {
      title: "Styling with Tailwind",
      content: "Tailwind CSS utilities are used for rapid, efficient styling, enabling a clean and responsive layout without writing custom CSS files."
    }
  ];

  const [userPosts, setUserPosts] = useState<NewPostData[]>(initialCards);

  const handleAddPost = (newPost: NewPostData) => {
    setUserPosts((prevPosts) => [
      { ...newPost, title: `[User Post] ${newPost.title}` }, // Prefix for clarity
      ...prevPosts,
    ]);
  };

  return (
    <main className="container mx-auto p-8">
      
      <h1 className="text-5xl font-extrabold text-blue-700 text-center mb-6">
        Welcome Home!
      </h1>
      
      <div className="flex justify-center mb-10">
        {/* Button to open the modal (Required by instructions) */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
        >
          Create New Post
        </button>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
        Dynamic Content ({userPosts.length} Items)
      </h2>

      {/* Grid to display all userPosts using the reusable Card component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {userPosts.map((post, index) => (
          <Card 
            key={index} 
            title={post.title} 
            content={post.content}
          />
        ))}
      </div>

      {/* The Modal Component */}
      <PostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
      
    </main>
  );
};

export default Home;