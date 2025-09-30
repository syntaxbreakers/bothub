import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TopBar from "../Components/NavBar/TopBar"
import Threads from "../Components/ThreadsBackground/Threads"
import Legal from "../Pages/Legal/Legal"
import { AboutUs } from "../Pages/Aboutus/AboutUs"
import Home from "../Pages/Home/Home"

export const NavBarRoutes = () => {
  return (
    <Router>
      <Threads />
      <TopBar />
      <Routes>
        <Route path="/bothub" element={<Home />} />
        <Route path="/bothub/aboutus" element={<AboutUs />} />
        <Route path="/bothub/legal" element={<Legal />} />
      </Routes>
    </Router>
  )
}