import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const NotFound = () => {
  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-4xl font-bold text-white mb-4">404</h1>
      <p className="text-lg text-white mb-8">Oops! Page not found.</p>
      <a href="/" className="bg-[#22647b] hover:bg-[#22647b] text-white font-bold py-2 px-4 rounded">
        Go to Home
      </a>
    </div>
    <Footer />
    </>
  );
};

export default NotFound;
