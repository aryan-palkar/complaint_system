import React from 'react'
import ImageSlider from "./ImageSlider";
import Informations from "./Informations";
import { SliderData } from "./SliderData";
import DashBoard from "./DashBoard";

function Home() {
  return (
    <div>
        <DashBoard />
        <ImageSlider slides={SliderData} />
        <Informations />
    </div>
  )
}

export default Home