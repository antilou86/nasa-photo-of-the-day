import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import TopCard from "./components/TopCard/TopCard"
import ImageCard from "./components/ImageCard/ImageCard"
import Footer from "./components/Footer/Footer"
import "./App.css";


function App() {

  const [imageData, setImageData] = useState();
  const [descriptionData, setDescriptionData] = useState();
  const [dateData, setDateData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=cfEGaKFBZ0jfgFy73Tb7czJEKwbavh26xRfts7i7').then((res) => {
      console.log('res= ' + res)
      setImageData(res.data)
      setDescriptionData(res.data.explanation)
      setDateData(res.data.date)
    }).catch(err => (console.log('error: ' + err)))
  }, [])

  return (
    <div className="App">
      <TopCard dateData={dateData} />
      <ImageCard imageData={imageData} descriptionData={descriptionData} />
      <Footer />
    </div>
  );
}

export default App;
