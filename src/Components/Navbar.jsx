import React, { useState } from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";

export default function Navbar({ darkMode, setDarkMode }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-400 font-bold text-xl">
            <span className="p-1.5 bg-emerald-800 text-white rounded-md">
              <HiOutlineAcademicCap className="w-5 h-5" />
            </span>
            <span>EduBlog</span>
          </div>

          <div className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-300 font-medium">
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">Articles</a>
            <a href="#">Resources</a>
          </div>

          <div className="flex items-center space-x-4">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-white"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => {
                setShowLogin(true);
                setShowSignup(false);
              }}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 dark:text-white rounded-lg"
            >
              Login
            </button>

            <button
              onClick={() => {
                setShowSignup(true);
                setShowLogin(false);
              }}
              className="px-4 py-2 bg-emerald-800 text-white rounded-lg"
            >
              Sign Up
            </button>

          </div>
        </div>
      </nav>

      {showLogin && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-[400px]">

            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Login
            </h2>

            <input
              type="email"
              placeholder="Email"
              className="w-full border dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 mb-3 rounded"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 mb-3 rounded"
            />

            <button className="w-full bg-emerald-800 text-white py-3 rounded">
              Login
            </button>

            <button
              onClick={() => setShowLogin(false)}
              className="mt-3 w-full border dark:border-gray-600 dark:text-white py-3 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}

      {showSignup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-[400px]">

            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Sign Up
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 mb-3 rounded"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 mb-3 rounded"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 mb-3 rounded"
            />

            <button className="w-full bg-emerald-800 text-white py-3 rounded">
              Create Account
            </button>

            <button
              onClick={() => setShowSignup(false)}
              className="mt-3 w-full border dark:border-gray-600 dark:text-white py-3 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
}