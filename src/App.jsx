import React, { useEffect } from "react";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form";
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
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
      <div id="blob"></div>
    </>
  );
}

export default App;
