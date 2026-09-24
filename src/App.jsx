import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import PageBackground from "./components/PageBackground"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Sectors from "./pages/Sectors"
import Impact from "./pages/Impact"
import Resources from "./pages/Resources"
import Careers from "./pages/Careers"
import Contact from "./pages/Contact"
import Admin from "./pages/Admin"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTop />
      <PageBackground />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<Services />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
