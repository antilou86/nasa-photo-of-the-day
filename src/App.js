import React, { useState } from "react";
import TopCard from "./components/TopCard/TopCard"
import ImageCard from "./components/ImageCard/ImageCard"
import Footer from "./components/Footer/Footer"
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopCard/>
      <ImageCard/>
      <Footer/>
    </div>
  );
}

export default App;
