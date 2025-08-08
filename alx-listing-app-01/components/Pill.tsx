import React from 'react';

interface PillProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
        transition-colors duration-200 ease-in-out
      `}
    >
      {label}
    </button>
  );
};

export default Pill;