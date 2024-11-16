
import { useEffect, useState } from "react";

const SeatLayout = () => {
  const [seatData, setSeatData] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data from the API
  const fetchSeatData = async () => {
    const apiUrl =
      "http://192.168.106.11:8000/get_parking_lot_state/?model_version=v8";

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          // "X-Requested-With": "XMLHttpRequest", // Add this header
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      // Transform the data
      const transformedData = [
        data.left.map(String), // Convert left to strings
        data.middle.map(String), // Convert middle to strings
        data.right.map(String), // Convert right to strings
      ];
      setSeatData(transformedData);
    } catch (err) {
      setError(err.message);
    }
  };

  // Call the fetchSeatData function when the component mounts
  useEffect(() => {
    fetchSeatData();
  }, []);

  // Handle refresh button click
  const handleRefresh = () => {
    fetchSeatData(); // Refresh seat data
  };

  // Render
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (seatData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-lg font-bold mb-6">A Block</h2>
      <button
        onClick={handleRefresh}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Refresh Parking Lot Data
      </button>
      <table className="table-auto border-collapse mb-1">
        <tbody>
          {/* Iterate over each row (seatData) and treat it as a column */}
          {seatData[0].map((_, colIndex) => (
            <tr key={colIndex}>
              {/* For each column (colIndex), iterate over each row */}
              {seatData.map((row, rowIndex) => (
                <td
                  key={rowIndex}
                  className={`w-[150px] h-10 border-[10px] border-gray-300 ${
                    row[colIndex] === "1"
                      ? "bg-red-500"
                      : row[colIndex] === "0"
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                  style={{ margin: "10px" }}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2 w-11 rounded-md bg-orange-300 text-center mb-6">Entry</div>
      <div className="flex gap-8">
        <span className="flex items-center gap-2">
          <span className="w-5 h-5 bg-red-500 inline-block"></span> Occupied
        </span>
        <span className="flex items-center gap-2">
          <span className="w-5 h-5 bg-green-500 inline-block"></span> Available
        </span>
      </div>
    </div>
  );
};

export default SeatLayout;

