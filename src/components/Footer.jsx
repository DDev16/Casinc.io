import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-gray-500 bg-blue-950">
      <div className="flex justify-center space-x-4 items-center">
        {/* Add the logo to the left */}
        <img src="src/assets/footer_logo.png" alt="Footer Logo" className="h-8 w-68" />

        {/* Navigation links */}
        <a href="/about" className="text-white hover:text-yellow-500 hover:underline transition-all duration-300">About</a>
        <a href="/support" className="text-white hover:text-yellow-500 hover:underline transition-all duration-300">Support</a>
        <a href="/faq" className="text-white hover:text-yellow-500 hover:underline transition-all duration-300">FAQ</a>
        <a href="/provably-fair" className="text-white hover:text-yellow-500 hover:underline transition-all duration-300">Provably Fair</a>
      </div>
      <p className="text-white">&copy; 2024 All rights reserved.</p>
    </footer>
  );
};

export default Footer;
