import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Commerce from "../pages/Commerce";
import Marketing from "../pages/Marketing";
import Development from "../pages/Development";
import Mobility from "../pages/Mobility";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/commerce-international" element={<Commerce />} />
      <Route path="/marketing-digital" element={<Marketing />} />
      <Route path="/developpement" element={<Development />} />
      <Route path="/mobilite-academique" element={<Mobility />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}