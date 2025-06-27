import React from 'react';

function Navbar() {
  return (
    <nav className="navbar bg-base-200 shadow-md px-6 py-4">
      {/* Left: Logo */}
      <div className="flex-1">
        <a href="/" className="text-xl font-bold text-green-400 hover:text-green-300 transition-colors">
          Sales Management
        </a>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="text-base text-gray-300 hover:text-white transition-colors">Home</a>
        <a href="/dashboard" className="text-base text-gray-300 hover:text-white transition-colors">Dashboard</a>
        <a href="/analytics" className="text-base text-gray-300 hover:text-white transition-colors">Analytics</a>
        <a href="/about" className="text-base text-gray-300 hover:text-white transition-colors">About</a>
        <a href="/contact" className="text-base text-gray-300 hover:text-white transition-colors">Contact</a>
      </div>

      {/* Right: Theme toggle */}
      <div className="ml-4">
        <label className="swap swap-rotate cursor-pointer">
          <input type="checkbox" className="theme-controller" value="dark" />
          {/* Sun Icon */}
          <svg
            className="swap-off h-6 w-6 fill-current text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71...Z" />
          </svg>

          {/* Moon Icon */}
          <svg
            className="swap-on h-6 w-6 fill-current text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14...Z" />
          </svg>
        </label>
      </div>

      {/* Mobile Menu (Optional) */}
      {/* You can implement a mobile dropdown here if you want more responsiveness */}
    </nav>
  );
}

export default Navbar;
