import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-auto"> {/* Using mt-auto to push it to the bottom */}
      <div className="container mx-auto text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Clothes Shop. All rights reserved.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-700">Terms of Service</a>
          </div>
      </div>
    </footer>
  );
}

export default Footer;

