import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl mb-5">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <a href="#">
          <span className="text-2xl font-extrabold text-gray-800">Books</span>
        </a>
        <div className="flex items-center space-x-1">
          <ul className=" space-x-2 inline-flex">
            <li>
              <Link
                href="/auth/signup"
                className="px-4 py-2 font-semibold text-gray-600 rounded hover:text-gray-700 cursor-pointer"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                href="/auth/signin"
                className="px-4 py-2 font-semibold text-gray-600 rounded hover:text-gray-700 cursor-pointer"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
