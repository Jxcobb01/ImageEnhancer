import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">AI Image Enhancer</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 