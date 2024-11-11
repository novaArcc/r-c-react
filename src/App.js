import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { Carousel, Content, GetInTouch, RandomBeerFact } from "./pages/Home/Home";
import About from "./pages/About/About";
import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      <Navbar />

    <Routes>

     <Route path="/" element={
      <>
      <Carousel />
      <Content />
      <GetInTouch />
      <RandomBeerFact />
      </>
     }/>

      <Route path="/about" element={<About />} />

    </Routes>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
