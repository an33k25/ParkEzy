import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ scrollToWorking, scrollToSlots }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-300 sticky top-0 z-20 p-4 flex justify-between items-center h-16">
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
      {/* Full-screen overlay for mobile navigation */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-0 z-10 ${
          isOpen ? 'block' : 'hidden'
        } md:hidden`}
        onClick={() => setIsOpen(false)} // Close menu when clicking outside
      ></div>
      {/* Navigation links */}
      <nav
        className={`fixed md:relative top-0 left-0 h-full md:h-auto w-3/4 mt-2 md:w-auto bg-gray-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out p-4 md:p-0 md:flex space-y-4 md:space-y-0 md:space-x-6`}
      >
        <a href="#" className="text-black font-semibold block py-2 md:py-0">Home</a>
        
        {/* Button to scroll to "How it Works" */}
        <button
          onClick={scrollToWorking}
          className="text-gray-500 block py-2 md:py-0"
        >
          How it Works
        </button>
        
        {/* Button to scroll to "View" */}
        <button
          onClick={scrollToSlots}
          className="text-gray-500 block py-2 md:py-0"
        >
          View
        </button>
      </nav>
    </header>
  );
};

// Prop validation
Navbar.propTypes = {
  scrollToWorking: PropTypes.func.isRequired,
  scrollToSlots: PropTypes.func.isRequired,
};

export default Navbar;
