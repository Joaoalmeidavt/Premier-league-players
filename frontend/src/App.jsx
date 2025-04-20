import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Teams from "./pages/Teams"
import Nations from "./pages/Nations"
import Position from "./pages/Position"
import Search from "./pages/Search"
import DataHandling from "./pages/DataHandling"
import NationPlayers from "./pages/NationPlayers"
import PositionPlayers from "./pages/PositionPlayers"



function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="teams" element={<Teams />} />
        <Route path="nation" element={<Nations />} />
        <Route path="position" element={<Position />} />
        <Route path="search" element={<Search />} />
        <Route path="/data" element={<DataHandling />} />
        <Route path="/nation/:code" element={<NationPlayers />} />
        <Route path="/position/:position" element={<PositionPlayers />} /> 

    </Route>
      </Routes>
    </>
  )
}

export default App
