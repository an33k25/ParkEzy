import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot, faMobile, faSquareParking } from "@fortawesome/free-solid-svg-icons";

const Working = () => {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center text-center bg-white p-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">How it works</h2> {/* Adjusted font size */}
        <p className="text-gray-600 mb-12 text-lg">
          A high-performing AI-based car parking management system<br />
          for any cars on campus
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-16 mt-4">

          {/* Step 1 */}
          <div className="flex flex-col items-center mb-8 md:mb-0 p-2 md:p-0"> {/* Added padding */}
            <div className="bg-red-100 p-6 rounded-lg mb-4">
              <FontAwesomeIcon className="w-12 h-12 text-red-500" icon={faMobile} />
            </div>
            <h3 className="text-xl font-semibold">Open the Web-App</h3>
          </div>

          {/* Connecting Line */}
          <div className="h-24 w-16 flex-shrink-0 relative md:block hidden">
            <svg viewBox="0 0 100 100" className="absolute w-full h-full text-gray-300">
              <path d="M0,50 Q50,0 100,50 T200,50" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center mb-8 md:mb-0 p-2 md:p-0"> {/* Added padding */}
            <div className="bg-blue-100 p-6 rounded-lg mb-4">
              <FontAwesomeIcon className="w-12 h-12 text-blue-500" icon={faSquareParking} />
            </div>
            <h3 className="text-xl font-semibold">Select your preferred parking-lot</h3>
          </div>

          {/* Connecting Line */}
          <div className="h-24 w-16 flex-shrink-0 relative md:block hidden">
            <svg viewBox="0 0 100 100" className="absolute w-full h-full text-gray-300">
              <path d="M0,50 Q50,0 100,50 T200,50" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center p-2 md:p-0"> {/* Added padding */}
            <div className="bg-purple-100 p-6 rounded-lg mb-4">
              <FontAwesomeIcon className="w-12 h-12 text-purple-500" icon={faCheckToSlot} />
            </div>
            <h3 className="text-xl font-semibold">View the available Slots</h3>
          </div>

        </div>
      </section>
    </>
  );
};

export default Working;
