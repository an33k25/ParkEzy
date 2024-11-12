import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ParCar from "./components/ParkingSpace"

import Working from "./components/Working"

function App() {


  return (
    <>
    <body className="bg-gray-100 font-sans">
    <Navbar className="" />
    <Hero />
    <Working />
    <ParCar />
    </body>
      
    </>
  )
}

export default App
