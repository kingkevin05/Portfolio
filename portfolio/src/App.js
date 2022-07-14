import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import NavBar from "./components/Navigation";
import Projects from "./components/Projects";

import Footer from "./components/Footer";
// import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    switch (currentPage) {
      case "projects":
        return <Projects />;
      // case "contact":
      //   return <Contact />;
      // case "resume":
      //   return <Resume />;
      default:
        return (
          <>
            <About />
            <Projects />
          </>
        );
    }
  };
  return (
    <div className="App">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage}>
        {" "}
      </NavBar>
      <main>{renderPage(currentPage)}</main>
      <Footer />
    </div>
  );
}

export default App;
