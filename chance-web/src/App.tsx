import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import ForSchools from "./pages/ForSchools";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/for-schools" element={<ForSchools />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <BackToTop />
    </BrowserRouter>
  );
}
