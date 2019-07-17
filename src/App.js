import React, { useState, useEffect } from "react";
import Axios from "axios";
import TopCard from "./components/TopCard/TopCard"
import ImageCard from "./components/ImageCard/ImageCard"
import Footer from "./components/Footer/Footer"
import "./App.css";


function App() {

  const [ImageData, setImageData] = useState();
  const [descriptionData, setDescriptionData] = useState();

  useEffect( () => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=cfEGaKFBZ0jfgFy73Tb7czJEKwbavh26xRfts7i7')
    .then(res => {
      setImageData(res.data)
      setDescriptionData(res.data.explanation)
    })
    .catch(err => (console.log(err)))
  },[]);

  return (
    <div className="App">
      <TopCard/>
      <ImageCard imageData={ImageData} descriptionData={descriptionData}/>
      <Footer/>
    </div>
  );
}

export default App;
