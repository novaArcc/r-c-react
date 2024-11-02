import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { Carousel, Content } from "./pages/Home/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
