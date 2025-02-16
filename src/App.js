import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { Carousel, Content, GetInTouch, RandomBeerFact } from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { EventsHero, EventCards } from "./pages/Events/Events"
import Gallery from "./pages/Gallery/Gallery"
import Menus from "./pages/Menus/Menus";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
  <Router>
    <div className="App">
    <ScrollToTop />
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
      <Route path="/contact" element={<Contact />} />
      <Route path="/menus" element={<Menus />} />
      <Route path="/events" element={
        <>
        <EventsHero /> 
        <EventCards />
        </>
      } />
      <Route path="/gallery" element={<Gallery />} />


    </Routes>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
