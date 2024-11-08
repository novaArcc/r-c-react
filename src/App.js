import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { Carousel, Content, GetInTouch, RandomBeerFact } from "./pages/Home/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Content />
      <GetInTouch />
      <RandomBeerFact />
      <Footer />
    </div>
  );
}

export default App;
