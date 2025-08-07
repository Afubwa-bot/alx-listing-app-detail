import React from "react";
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">
          AlxListingApp
        </Link>

        {/* Search Bar */}
        <div className="flex-grow mx-4 w-full md:w-auto mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search by location, property type..."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Accommodation Types */}
      </div>
      <nav className="container mx-auto mt-4 md:mt-0">
        <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-gray-700 text-sm">
          <li><Link href="#" className="hover:text-blue-600">Rooms</Link></li>
          <li><Link href="#" className="hover:text-blue-600">Mansion</Link></li>
          <li><Link href="#" className="hover:text-blue-600">Countryside</Link></li>
          <li><Link href="#" className="hover:text-blue-600">Apartments</Link></li>
          <li><Link href="#" className="hover:text-blue-600">Villas</Link></li>
          <li><Link href="#" className="hover:text-blue-600">Cabins</Link></li>
          <li><Link href="#" className="hover:text-blue-600">Lofts</Link></li>
          <li><Link href="#" className="hover:text-blue-600">Chalets</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;