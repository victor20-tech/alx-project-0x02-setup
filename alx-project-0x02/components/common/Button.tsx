import React from 'react';
import { type ButtonProps, ButtonSize, ButtonShape } from '@/interfaces'; 

const sizeClasses: Record<ButtonSize, string> = {
  small: 'py-1 px-3 text-sm',
  medium: 'py-2 px-4 text-base',
  large: 'py-3 px-6 text-lg',
};

const shapeClasses: Record<ButtonShape, string> = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};

const colorClasses: Record<NonNullable<ButtonProps['color']>, string> = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    danger: 'bg-red-600 hover:bg-red-700',
};


const Button: React.FC<ButtonProps> = ({ 
    onClick, 
    children, 
    size, 
    shape, 
    color = 'primary' // Default to primary color
}) => {
  
  const combinedClasses = `
    ${colorClasses[color]} 
    ${sizeClasses[size]} 
    ${shapeClasses[shape]}
    text-white 
    font-semibold 
    shadow-md 
    transition 
    duration-300 
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-blue-500 
    disabled:opacity-50
  `;

  const handleClick = () => {
    console.log(`Button clicked: Size=${size}, Shape=${shape}`);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={combinedClasses.trim()}
      type="button" 
    >
      {children}
    </button>
  );
};

export default Button;