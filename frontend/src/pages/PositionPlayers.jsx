import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PositionPlayers = () => {
  const { position } = useParams(); // e.g., 'GK', 'DF'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    if (position) {
      axios
        .get(
          `${import.meta.env.VITE_API_URL}/api/v1/player?position=${encodeURIComponent(position)}`
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
  }, [position]);

  if (loading) {
    return <p className="text-center text-gray-500 text-lg mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-lg mt-10">Error: {error.message}</p>;
  }

  const positionMap = {
    GK: "Goalkeeper",
    DF: "Defender",
    MF: "Midfielder",
    FW: "Forward",
  };

  const positionTitle = positionMap[position.toUpperCase()] || position.toUpperCase();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">{positionTitle} Players</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Position</th>
              <th className="py-3 px-4">Age</th>
              <th className="py-3 px-4">Matches Played</th>
              <th className="py-3 px-4">Goals</th>
              <th className="py-3 px-4">Assists</th>
              <th className="py-3 px-4">Team</th>
            </tr>
          </thead>
          <tbody>
            {playerData.length > 0 ? (
              playerData.map((player, index) => (
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
                  <td className="py-3 px-4">{player.gls}</td>
                  <td className="py-3 px-4">{player.ast}</td>
                  <td className="py-3 px-4">{player.team}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-3 px-4">
                  No players found for this position.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PositionPlayers;