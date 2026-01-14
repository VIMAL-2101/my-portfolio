import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SnowBackground from "./components/SnowBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import MSGoal from "./pages/MSGoal";
import Songs from "./pages/Songs";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./styles/global.css";

const App = () => (
  <BrowserRouter>
    <SnowBackground />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/ms-goal" element={<MSGoal />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
