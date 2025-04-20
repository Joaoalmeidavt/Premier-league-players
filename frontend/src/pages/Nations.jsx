import React, { useEffect, useState } from "react";
import nationData from "../data/nations.json";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";


const Nations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNations, setFilteredNations] = useState(nationData.nations);

  useEffect(() => {
    const filtered = nationData.nations.filter((nation) =>
      nation.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNations(filtered);
  }, [searchQuery]);

  return (
    <>
      <div className="container-nations-page p-6">
        <h1 className="text-4xl font-bold opacity-85 mb-6 text-center">
          Nations
        </h1>
        
        {/* SEARCH BAR INPUT */}
        <div className="mb-6">
          <input
          type="text"
          placeholder="Search for nations"
          value={searchQuery}
          className="p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onChange={(e)=> setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* CONTAINER TO DISPLAY NATIONS */}
        <div className="grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-6">
          {filteredNations.length > 0 ? (
            filteredNations.map((nation, idx) => (
              <div key={idx} className="relative rounded-lg overflow-hidden shadow-lg">
                  {/* Nation Flag */}
                  <ReactCountryFlag 
                  countryCode={nation.code}
                  svg
                  className="w-full h-40 object-cover"
                  style={{ width: "100%", height: "100%" }}
                  />
                  <div className="absolute from-black to-transparent w-full bg-gradient-to-t p-3 bottom-0">
                    {/* Nation Name */}
                    <p className="text-white text-lg font-semibold">{nation.name}</p>
                    {/* LINK TO NATION DETAILS */}
                    <Link className="font-semibold inline-block mt-2 px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-md transition duration-300"   to={`/nation/${encodeURIComponent(nation.code)}`}>View
                    </Link>
                    </div>
                </div>
            ))
          ): (
            <p className="text-lg text-center col-span-full">No nations found.</p>
          )}

        </div>
      </div>
    </>
  );
};

export default Nations;
