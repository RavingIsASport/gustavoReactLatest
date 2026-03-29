import { Route, Routes } from "react-router";
import MobileNavbar from "./components/Global/MobileNavbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import DesktopNavbar from "./components/Global/DesktopNavbar";
import ProfileLinks from "./components/Global/ProfileLinks";

function App() {
  return (
    <div className="bg-stone-950  min-h-screen">
      <ProfileLinks />
      <MobileNavbar />
      <DesktopNavbar />
      <main className="px-3 md:fixed md:left-15">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
