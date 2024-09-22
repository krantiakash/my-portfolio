import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ top: e.pageY, left: e.pageX });
    };

    const handleMouseOver = (e) => {
      const element = e.target;
      if (getComputedStyle(element).cursor === "pointer") {
        setCursorType("pointer");
      } else {
        setCursorType("default");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return { cursorPosition, cursorType };
};

const App = () => {
  const { cursorPosition, cursorType } = useCursorPosition();

  return (
    <>
      <div className="wrapper">
        <div
          className="cursor"
          style={{
            position: "absolute",
            top: `${cursorPosition.top}px`,
            left: `${cursorPosition.left}px`,
            pointerEvents: "none",
            width: cursorType === "pointer" ? "8rem" : "3.5rem",
            height: cursorType === "pointer" ? "8rem" : "3.5rem",
            opacity: cursorType === "pointer" ? 0.3 : 0.6,
            transition: "width 0.3s, height 0.3s, opacity 0.3s",
          }}
        ></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
