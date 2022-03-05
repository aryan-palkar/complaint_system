import "./App.css";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import Login from "./MyComponents/Login";
import Home from "./MyComponents/Home";
import Signup from "./MyComponents/Signup";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/signup" element={<Signup />} ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
