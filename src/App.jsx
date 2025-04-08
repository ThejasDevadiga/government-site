import React from "react";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Reports from "./components/Reports";
import Angarachane from "./components/Angarachane";
import Privacy from "./components/Privacy";  // Correct import

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/angarachane" element={<Angarachane />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/form" element={<Form />} />
        <Route path="/privacy" element={<Privacy />} />  {/* Corrected route */}
      </Routes>
      <Footer />
      <div id="blob"></div>
    </>
  );
}

export default App;
