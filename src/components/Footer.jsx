import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-4">
        <p>© 2025 Apple Inc. All rights reserved.</p>
        <div className="flex flex-wrap space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Sales Policy</a>
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
