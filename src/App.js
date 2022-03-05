import './App.css';
import DashBoard from './MyComponents/DashBoard';
import Footer from './MyComponents/Footer';
import Header from "./MyComponents/Header";
import ImageSlider from './MyComponents/ImageSlider';
import Informations from './MyComponents/Informations';
import { SliderData } from './MyComponents/SliderData';

function App() {
  return (
     <>
     <Header/>
     <DashBoard/>
     <ImageSlider slides={SliderData}/>
     <Informations/>
     <Footer/>
     </>
  );
}

export default App;
