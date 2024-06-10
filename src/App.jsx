import React, { useEffect } from "react";
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
function App() {
  // useEffect(() => {
  //   const blob = document.getElementById("blob");
  //   document.body.onpointermove = (event) => {
  //     const { clientX, clientY } = event;

  //     blob.animate({
  //       left: `${clientX}px`,
  //       top: `${clientY}px`,
  //     },{duration: 1000,fill:"forwards"});
  //   };
  // }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/angarachane" element={<Angarachane />} />
        <Route path="/reports" element={<Reports />}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
      <div id="blob"></div>
    </>
  );
}

export default App;
