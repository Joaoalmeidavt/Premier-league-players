import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const NationPlayers = () => {
  const { code } = useParams(); // Get the nation code (e.g., 'GER')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    if (code) {
      axios
        .get(
          `${
            import.meta.env.VITE_API_URL
          }/api/v1/player?nation=${encodeURIComponent(code)}`
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
  }, [code]);

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

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Players from {code.toUpperCase()}
      </h1>

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
                  {[
                    player.name,
                    player.pos,
                    player.age,
                    player.matchesPlayed,
                    player.goals,
                    player.assists,
                  ].map((value, i) => (
                    <td key={i} className="py-3 px-4">
                      {value}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-3 px-4">
                  No players found for this nation.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NationPlayers;
