import React from "react";
import PhotoSearch from "./PhotoSearch";
import Footer from "./Footer";
import "./App.css";
import Logo from "./img/SVG/Logo.svg"

function App() {
  return (
    <div className="App">
      <div className="header">
        <a href="#default" class="logo">
          <img src={Logo} href=""/>
        </a>
        <div className="header-right">
          <button className="active button" href="https://unsplash.com/documentation">
            API Documentation
          </button>
        </div>
      </div>
      <div className="container">
        <PhotoSearch />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
