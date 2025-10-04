import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-lg sticky top-0 z-10">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        
        <Link href="/" className="text-white text-2xl font-bold tracking-wider hover:text-red-400 transition duration-300">
          ALX Project Setup
        </Link>

        <div className="flex space-x-8">
          
          <Link href="/home" className="text-gray-300 text-lg hover:text-blue-400 transition duration-300 font-medium">
            Home
          </Link>
          
          <Link href="/about" className="text-gray-300 text-lg hover:text-blue-400 transition duration-300 font-medium">
            About
          </Link>

          <Link href="/posts" className="text-gray-300 text-lg hover:text-blue-400 transition duration-300 font-medium">
            Posts
          </Link>
          
          <Link href="/users" className="text-gray-300 text-lg hover:text-blue-400 transition duration-300 font-medium">
            Users
          </Link>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;