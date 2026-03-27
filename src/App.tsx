import { Route, Routes } from "react-router";
import MobileNavbar from "./components/MobileNavbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import DesktopNavbar from "./components/DesktopNavbar";

function App() {
  return (
    <div className="App">
      <MobileNavbar />
      <DesktopNavbar />
      <main className="md:fixed md:left-[4.5%]">
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
