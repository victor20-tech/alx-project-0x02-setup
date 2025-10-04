import React from 'react';
import  { type UserProps } from '@/interfaces'; 

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    const fullAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;

    return (
        <div className="bg-white border border-yellow-300 rounded-xl shadow-lg p-6 
                        transition duration-300 hover:shadow-2xl hover:border-yellow-500 flex flex-col h-full">
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {name}
            </h3>
            
            <p className="text-sm text-gray-500 italic mb-4">
                User ID: {address.zipcode.split('-')} 
            </p>
            <div className="space-y-2 mt-auto">
                <p className="text-gray-700 text-sm flex items-center">
                    <span className="font-semibold w-20 text-gray-600">Email:</span> 
                    <a href={`mailto:${email}`} className="text-blue-500 hover:underline truncate">
                        {email}
                    </a>
                </p>
                <p className="text-gray-700 text-sm flex items-start">
                    <span className="font-semibold w-20 text-gray-600">Address:</span> 
                    <span className="ml-1 leading-snug">
                        {fullAddress}
                    </span>
                </p>
                
            </div>
        </div>
    );
};

export default UserCard;