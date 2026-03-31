import { Route, Routes } from "react-router";
import MobileNavbar from "./components/Global/MobileNavbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import DesktopNavbar from "./components/Global/DesktopNavbar";
import ProfileLinks from "./components/Global/ProfileLinks";
import Footer from "./components/Global/Footer";

function App() {
  return (
    <div className="bg-stone-950 min-h-screen">
      <ProfileLinks />
      <MobileNavbar />
      <DesktopNavbar />
      <main className="container px-8 w-full md:mx-auto mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="mb-18 border-t border-stone-500 md:mb-0">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
