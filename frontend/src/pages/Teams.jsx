import React, { useEffect, useState } from 'react'
import teamData from "../data/teams.json"
import { Link } from 'react-router-dom';
import { use } from 'react';

const Teams = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTeams, setFilteredTeams] = useState(teamData.teams);

  useEffect(() => {
    const filtered = teamData.teams.filter(team =>
        team.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTeams(filtered);
}, [searchQuery]);

  return (
    <>
    <div className='container-teams-page p-6'>
      <h1 className='text-4xl font-bold opacity-85 mb-6 text-center'>Teams</h1>

      {/*SEARCH BAR INPUT*/}
      <div className='mb-6'>
        <input 
          type='text'
          placeholder='Search for teams'
          value={searchQuery}
          className='p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500'
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/*CONTAINER TO DISPLAY TEAMS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {filteredTeams.length > 0 ? (filteredTeams.map((team, idx) => (
        <div key={idx} className='relative rounded-lg overflow-hidden shadow-lg'>
          {/* Team logo */}
          <img src={team.cover} alt={team.title} className='w-full h-50  object-cover'/>
          <div className='absolute bottom-0 bg-gradient-to-t from-black to-transparent p-4 w-full'>
            {/*TEAM NAME*/}
            <p className='text-lg font-semibold text-white'>{team.title}</p>
            {/*LINK TO TEAM DETAILS*/}
            <Link className="font-semibold inline-block mt-2 px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded-md transition duration-300" to={`/data?team=${encodeURIComponent(team.title)}`}>View</Link>
          </div>
            
        </div>
      ))
    ) : (
        <p className='text-lg text-center col-span-full'>No teams found.</p>
      )}
      </div>
    </div>
    </>
  )
}

export default Teams