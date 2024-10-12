import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold transition-transform duration-300 transform hover:scale-105 cursor-pointer">
          ItemTracker
          </h1>
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="transition-transform duration-300 transform hover:scale-110 hover:bg-white hover:text-fuchsia-700 px-3 py-2 rounded-lg shadow-md"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/add-item"
                className="transition-transform duration-300 transform hover:scale-110 hover:bg-white hover:text-fuchsia-700 px-3 py-2 rounded-lg shadow-md"
              >
                Add Item
              </Link>
            </li>
            <li>
              <Link
                to="/suppliers"
                className="transition-transform duration-300 transform hover:scale-110 hover:bg-white hover:text-fuchsia-700 px-3 py-2 rounded-lg shadow-md"
              >
                Suppliers
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
