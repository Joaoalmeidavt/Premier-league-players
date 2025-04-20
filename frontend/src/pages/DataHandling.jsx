import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

// Main component for handling and displaying player data
const DataHandling = () => {
  // Retrieves search parameters from the URL
  const [searchParams] = useSearchParams();
  // Extracts the 'team' parameter value from URL
  const teamValue = searchParams.get("team");
  // State to track loading status of data fetch
  const [loading, setLoading] = useState(true);
  // State to store any errors during data fetch
  const [error, setError] = useState(null);
  // State to store fetched player data
  const [playerData, setPlayerData] = useState([]);

  // Effect hook to fetch player data when teamValue changes
  useEffect(() => {
    if (teamValue) {
      axios
        .get(
          `${
            import.meta.env.VITE_API_URL
          }/api/v1/player?team=${encodeURIComponent(teamValue)}`
        )
        .then((response) => {
          setPlayerData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [teamValue]);

  if (loading) {
    return (
      <p className="text-center text-gray-500 text-lg mt-10">Loading...</p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 text-lg mt-10">
        Error: {error.message}
      </p>
    );
  }

  // player data table
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Position</th>
              <th className="py-3 px-4">Age</th>
              <th className="py-3 px-4">Matches Played</th>
              <th className="py-3 px-4">Starts</th>
              <th className="py-3 px-4">Minutes Played</th>
              <th className="py-3 px-4">Goals</th>
              <th className="py-3 px-4">Assists</th>
              <th className="py-3 px-4">Penalties</th>
              <th className="py-3 px-4">Yellow Cards</th>
              <th className="py-3 px-4">Red Cards</th>
              <th className="py-3 px-4">xG</th>
              <th className="py-3 px-4">xAG</th>
              <th className="py-3 px-4">Team</th>
            </tr>
          </thead>
          <tbody>
            {playerData.map((player, index) => (
              <tr
                key={index}
                className={`border-b border-gray-300 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="py-3 px-4">{player.name}</td>
                <td className="py-3 px-4">{player.pos}</td>
                <td className="py-3 px-4">{player.age}</td>
                <td className="py-3 px-4">{player.mp}</td>
                <td className="py-3 px-4">{player.starts}</td>
                <td className="py-3 px-4">{player.min}</td>
                <td className="py-3 px-4">{player.gls}</td>
                <td className="py-3 px-4">{player.ast}</td>
                <td className="py-3 px-4">{player.pk}</td>
                <td className="py-3 px-4">{player.crdy}</td>
                <td className="py-3 px-4">{player.crdr}</td>
                <td className="py-3 px-4">{player.xg}</td>
                <td className="py-3 px-4">{player.xag}</td>
                <td className="py-3 px-4">{player.team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataHandling;
