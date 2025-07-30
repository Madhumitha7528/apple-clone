import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white text-sm py-3 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="font-bold text-xl"></div>
        <ul className="hidden md:flex space-x-6">
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Support</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
