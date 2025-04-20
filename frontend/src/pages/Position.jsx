import React, { useEffect, useState } from "react";
import positionData from "../data/positions.json";
import { Link } from "react-router-dom";

const Position = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPositions, setFilteredPositions] = useState(positionData.positions);

  useEffect(() => {
    const filtered = positionData.positions.filter((position) =>
      position.title.toLowerCase().includes(searchQuery.toLowerCase()) // Fixed filtering logic
    );
    setFilteredPositions(filtered);
  }, [searchQuery]);


  return (
    <div className="p-6">
      <h1 className="text-center text-4xl font-bold opacity-85  mb-6">Positions</h1>
       {/* CONTAINER TO DISPLAY POSITIONS */}
       <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filteredPositions.map((position, idx) => (
          <div className="relative rounded-lg overflow-hidden shadow-lg" key={idx}>
            <img src={position.cover} className="position-image" alt={position.title} />
            <div className="absolute from-black to-transparent w-full bg-gradient-to-t p-3 bottom-0">
              <p className="text-white text-lg font-semibold">{position.title}</p>
              <Link
                to={`/position/${encodeURIComponent(position.search)}`} // Updated to new route
                className="font-semibold inline-block mt-2 px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-md transition duration-300"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Position;