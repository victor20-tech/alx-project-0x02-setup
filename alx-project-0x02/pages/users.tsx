import React from 'react';
import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import type { UserProps } from '@/interfaces';

interface UsersPageProps {
    users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto p-8">
        <h1 className="text-5xl font-extrabold text-pink-700 text-center mb-6">
          Community Members
        </h1>
        <p className="text-xl text-gray-600 text-center mb-10">
          Displaying user data fetched from an external API, showcasing component reusability.
        </p>

        {/* Grid to display the list of UserCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard 
              key={user.id} 
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    const users: UserProps[] = await response.json();
    
    return {
      props: {
        users,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [], 
      },
    };
  }
};

export default Users;