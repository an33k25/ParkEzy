import React from 'react';

const SeatLayout = () => {
  // Seat data as a 2D array with '1' for available and '0' for occupied
  const seatData = [
    ['1', '0', '1', '1', '0', '1', '1', '0', '1', '1'],
    ['1', '1', '0', '0', '1', '1', '0', '0', '1', '1'],
    ['1', '1', '1', '0', '1', '1', '1', '0', '1', '1'],
  ];

  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-lg font-bold mb-6">A Block</h2>
      <table className="table-auto border-collapse mb-8">
        <tbody>
          {/* Iterate over each column */}
          {seatData[0].map((_, colIndex) => (
            <tr key={colIndex} className="space-x-4">
              {/* For each column, go through each row */}
              {seatData.map((row, rowIndex) => (
                <td
                  key={rowIndex}
                  className={`w-10 h-10 m-20 border border-gray-300 ${
                    row[colIndex] === '0' ? 'bg-red-500' : 'bg-green-500'
                  }`}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
