import { HashRouter as Router, Routes, Route } from "react-router-dom"
import TopBar from "../Components/NavBar/TopBar"
import Threads from "../Components/ThreadsBackground/Threads"
import Legal from "../Pages/Legal/Legal"
import AboutUs from "../Pages/Aboutus/AboutUs"
import Home from "../Pages/Home/Home"
import Commission from "../Pages/Client/commision"
import Developer from "../Pages/Developers/Developer"

export const NavBarRoutes = () => {
  return (
    <Router>
      <Threads />
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/commission" element={<Commission/>}/>
        <Route path="/on-boarding" element={<Developer/>}/>
      </Routes>
    </Router>
  )
}