const Hero = () => {
    return (
      <>
        <section className="relative bg-gradient-to-r from-purple-500 via-blue-700 to-red-600 text-white h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-900 opacity-80"></div>
          <div className="relative z-10 p-8 max-w-xl text-center">
            <h1 className="text-lg uppercase font-semibold text-gray-100">Your Personalised Car Park Assistant</h1>
            <h2 className="text-3xl md:text-5xl font-bold my-4">FAST AND EASY WAY TO PARK A CAR</h2> {/* Adjusted font size */}
            <p className="text-base md:text-lg mb-6"> {/* Adjusted font size */}
              Our Car Parking Management and its online booking system are designed to meet the specific needs of car owners looking for a free place to park their cars. This easy-to-use application lets you use real-time updates to find your perfect spot.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-white text-black px-6 py-2 rounded-full shadow-lg font-semibold">Book Now</button>
              <button className="text-white font-semibold no-underline">See all spaces</button>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Hero;
  