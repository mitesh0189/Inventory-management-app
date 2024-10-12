import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-fuchsia-600 bg-opacity-950 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">ItemTracker</h3>
            <p className="text-sm mt-1">"Track, Manage, Succeed!"</p>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <p className="text-sm">&copy; 2024 ItemTracker. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-gray-300 mr-4">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;