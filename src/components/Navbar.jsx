import React, { useState } from 'react';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = ({isHomePage}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={`flex justify-between items-center w-full p-5   ${isHomePage ? 'bg-black bg-opacity-50 bg-fixed' : 'bg-black'} text-white ${isHomePage ? 'absolute' : ''} top-0 left-0 z-10`}>
      <div className="flex items-center">
          <h1 className="text-xl font-bold">Logo</h1>
        </div>
        <div className="hidden md:flex">
          <ul className='flex gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className='bg-green-500 p-3 rounded-full '>Enquiry Now</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? "close" : "open"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-70 text-white z-10">
          <ul className='flex flex-col  gap-5 p-5'>
            <li onClick={toggleMenu}>Home</li>
            <li onClick={toggleMenu}>About</li>
            <li onClick={toggleMenu}>Services</li>
            <li onClick={toggleMenu}>Contact</li>
            <li onClick={toggleMenu}>Blog</li>
            <button className='bg-green-500 p-3 rounded-full '>Enquiry Now</button>
            </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
