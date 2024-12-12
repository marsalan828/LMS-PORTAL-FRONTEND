import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-black shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40" // Replace with your logo image link
            alt="Logo"
            className="h-10 w-10 rounded-full mr-3"
          />
          <span className="text-xl font-bold"></span>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex md:flex space-x-6">
          <li className="hover:text-gray-300">
            <a href="/home">Home</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="/my-courses">My Courses</a>
          </li>
        </ul>

        {/* Right: Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 focus:outline-none hover:text-gray-300"
          >
            <span>Menu</span>
            <svg
              className={`w-5 h-5 transform ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="/profile">Profile</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="/grades">Grades</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <a href="/logout">Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
