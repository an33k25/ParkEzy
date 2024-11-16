import { useRef } from 'react';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ParCar from "./components/ParkingSpace";
import Working from "./components/Working";

function App() {
  // Create refs for scrolling
  const workingRef = useRef(null);
  const slotsRef = useRef(null);

  // Handle scroll when link is clicked
  const scrollToWorking = () => {
    workingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSlots = () => {
    slotsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-100 font-sans">
      {/* Render Navbar and pass scroll functions */}
      <Navbar scrollToWorking={scrollToWorking} scrollToSlots={scrollToSlots} />
      
      {/* Render Hero and pass scroll function for "View Now" button */}
      <Hero scrollToSlots={scrollToSlots} />
      
      {/* Sections you want to scroll to */}
      <div ref={workingRef}>
        <Working />
      </div>
      
      <div ref={slotsRef}>
        <ParCar />
      </div>
    </div>
  );
}

export default App;
