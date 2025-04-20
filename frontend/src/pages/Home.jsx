import React from "react";

const Home = () => {
  return (
    <div className="">
      {/* Home page content */}
      <div className="">
        <img src="/positions/Forward.jpeg" alt="Forward position" />
        <div className="relative text-center sm:p-5">
          <h1 className="text-5xl font-bold text-center p-5 opacity-85">
            Welcome to PremierZone
          </h1>
          <p className="text-[20px] mt-2 p-5 mb-7">
            Your go-to platform for football teams, nations, and positions.
          </p>
          <a href="/teams" className="mt-6 incline-block bg-yellow-500 px-7 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition  ">Explore Now</a>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <a href="/teams" className="bg-gray-600 text-white p-6 rounded-lg shadow-lg hover:bg-gray-300 transition text-center hover:text-black">
        <h2 className="text-2xl font-semibold">Teams</h2>
        <p className="">Discover teams from differente leagues and competitions</p>
       </a>
       <a href="/nation" className="bg-gray-600 text-white p-6 rounded-lg shadow-lg hover:bg-gray-300 transition text-center hover:text-black">
       <h2 className="text-2xl font-semibold">Nations</h2>
       <p>Explore national teams and their achievements</p>
       </a>
       <a href="/position" className="bg-gray-600 text-white p-6 rounded-lg shadow-lg hover:bg-gray-300 transition text-center hover:text-black">
       <h2 className="text-2xl font-semibold">Positions</h2>
       <p>Understand different player positions and roles.</p>
       </a>
      </div>

      {/* Call to Action Section */}
      <div className="bg-[#184E77] py-12 text-center">
        <h2 className="text-3xl font-semibold text-white">Join the PremierZone Community</h2>
        <p className="mt-2 opacity-80 text-white">Stay updated with the latest football trends and team insights.</p>
        <a href="/search" className="mt-6 inline-block bg-yellow-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition" >Start Searching</a>
      </div>
    </div>
          
    
  );
};

export default Home;
