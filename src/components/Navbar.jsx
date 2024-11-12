import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-300 sticky top-0 z-10 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faCar} className="w-6 h-6" />
        <span className="text-xl font-bold text-black">ParkEzy</span>
      </div>
      {/* Hamburger icon for mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-black focus:outline-none"
      >
        <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
      </button>
      {/* Navigation links - hidden on mobile */}
      <nav className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="text-black font-semibold block py-2 md:py-0">Home</a>
        <a href="#" className="text-gray-500 block py-2 md:py-0">How it Works</a>
        <a href="#" className="text-gray-500 block py-2 md:py-0">View</a>
        <a href="#" className="text-gray-500 block py-2 md:py-0">Register</a>
        <a href="#" className="bg-white text-black px-4 py-2 rounded-md shadow block md:inline">Log In</a>
      </nav>
    </header>
  );
};

export default Navbar;
