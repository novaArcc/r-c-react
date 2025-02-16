import "./Home.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";      
import "../About/About";
import poolRules from "../Events/poolrules.pdf"

// Carousel images 
import carouselImage1 from "./images/carousel-img-1.jpg";
import carouselImage2 from "./images/carousel-img-2.JPG";
import carouselImage3 from "./images/carousel-img-3.jpg";
import carouselImage4 from "./images/carousel-img-4.JPG";

// Content images 
import homepagePool from "./images/homepage-pool1.jpg";
import liveMusic from "./images/live-music.jpg";
import beer from "./images/beer.jpg";
import beer2 from "./images/beer2.jpg"


const Carousel = () => {
  return (
    <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active c-item" data-bs-interval="4000">
            <img src={carouselImage1} 
                 className="d-block w-100 c-img" 
                 alt="Welcome to The Rose and Crown" />
            <div className="carousel-caption">
                <h1 className="carousel-heading text-center text-sm-start pb-3 pb-sm-0">
                    Welcome to The Rose and Crown
                </h1>
                <p className="caption text-center text-sm-start pb-3 pb-sm-0">
                    Join us at The Rose and Crown for a great time. Enjoy watching your favourite sports, 
                    sipping on exceptional beers, and savoring delicious food. We look forward to welcoming you!
                </p>
                <div className="d-flex justify-content-center justify-content-sm-start">
                    <a className="text-decoration-none" style={{ color: 'inherit' }} href="aboutus.html">
                        <button className="button type1"></button>
                    </a>
                </div>
            </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval="4000">
            <img src={carouselImage2} loading="lazy" 
                 className="d-block w-100 c-img" 
                 alt="Never Miss a Game" />
            <div className="carousel-caption">
                <h1 className="carousel-heading text-center text-sm-start pb-3 pb-sm-0">
                    Never Miss a Game
                </h1>
                <p className="caption text-center text-sm-start pb-3 pb-sm-0">
                    Experience every game on our 5 large screens. You'll never miss a moment of your favourite 
                    sports, all while enjoying exceptional beers and delicious food. We're excited to have you join us!
                </p>
                <div className="d-flex justify-content-center justify-content-sm-start">
                    <a className="text-decoration-none" style={{ color: 'inherit' }} href="aboutus.html">
                        <button className="button type2"></button>
                    </a>
                </div>
            </div>
        </div>
        <div className="carousel-item c-item" data-bs-interval="4000">
            <img src={carouselImage3} loading="lazy" 
                 className="d-block w-100 c-img" 
                 alt="A Pint for Every Taste" />
            <div className="carousel-caption">
                <h1 className="carousel-heading text-center text-sm-start pb-3 pb-sm-0">
                    A Pint for Every Taste
                </h1>
                <p className="caption text-center text-sm-start pb-3 pb-sm-0">
                    Explore our variety of beers and ales available on draught, each poured with expertise 
                    to ensure every sip is refreshingly satisfying and full of flavor.
                </p>
                <div className="d-flex justify-content-center justify-content-sm-start">
                    <a className="text-decoration-none" style={{ color: 'inherit' }} href="menus.html">
                        <button className="button type3"></button>
                    </a>
                </div>
            </div>
        </div>

        <div className="carousel-item c-item" data-bs-interval="4800">
            <img src={carouselImage4} loading="lazy" 
                 className="d-block w-100 c-img" 
                 alt="Challenge Your Friends" />
            <div className="carousel-caption">
                <h1 className="carousel-heading text-center text-sm-start pb-3 pb-sm-0">
                    Challenge Your Friends
                </h1>
                <p className="caption text-center text-sm-start pb-3 pb-sm-0">
                    Join us every Wednesday at 8 pm for Flockin' Killer Pool! Gather your friends, 
                    challenge each other, and enjoy an evening filled with friendly competition and great company.
                </p>
                <div className="d-flex justify-content-center justify-content-sm-start">
                    <a className="text-decoration-none" style={{ color: 'inherit' }} href="events.html">
                        <button className="button type5"></button>
                    </a>
                </div>
            </div>
        </div>
    </div>

    {/* Carousel controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>
  )
}


const Content = () => {
  return (
    <div className="container-fluid text-white">
      <div className="row ps-1 pe-1 pt-5 pb-5 d-flex align-items-center justify-content-center">
        <div className="col-lg-8 col-12">
          <h2 className="homepage-heading homepage-text-center pt-5 pb-2">
            About the <span className="heading-red homepage-heading-center">Rose and Crown</span>
          </h2>
          <p className="homepage-text text-center">
            Welcome to The Rose and Crown, a 16th-century pub in Hay-on-Wye. Family-owned and friendly, we offer live sports on five big screens, Flockin' Killer Pool every Wednesday at 8 pm, and live music every weekend from 8 pm. Enjoy delicious food and a wide selection of beers and ales. Come for the sports, stay for the food, music, and fun!
          </p>
          <a className="text-decoration-none d-flex justify-content-center" style={{ color: 'inherit' }} href="aboutus.html">
           <Link to="/about"><button className="button type7 mb-4"></button></Link>
          </a>
        </div>
      </div>

      <div className="row d-flex align-items-center grey-box">
        <div className="col-lg-6 p-0">
          <img className="homepage-img" loading="lazy" src={homepagePool} alt="Flockin' Killer Pool" />
        </div>
        <div className="col-lg-6 col-11 pb-5 pt-5 ps-5">
          <h2 className="homepage-heading pt-5 pb-2 light-heading">
            Try Out <span className="heading-red">Flockin' Killer Pool</span>
          </h2>
          <p className="homepage-text mt-3 light-text">
            Every Wednesday from 8pm till late, join us for 'Flockin' Killer Pool'! Supported by BaaadFlockers, this exciting pool game combines chaos and fun. Put in £1 to join, pot any ball to stay in, and avoid losing your three strikes. Pot the black for an extra life and be the last player standing. Check out the full rules and bring your best sportsmanship—banter is welcome, but rudeness isn't!
          </p>
          <a className="text-decoration-none" style={{ color: 'inherit' }} href="pool-rules.pdf">
            <a href={poolRules}><button className="button type8 mb-4"></button></a>
          </a>
        </div>
      </div>

      <div className="row d-flex align-items-center">
        <div className="col-lg-6 col-11 pb-5 pt-5 ps-5 order-lg-1 order-2">
          <h2 className="homepage-heading pt-5 pb-2">
            Live Music <span className="heading-red">Weekends from 8pm</span>
          </h2>
          <p className="homepage-text mt-3">
            Join us every weekend from 8pm for live music! Enjoy performances by local talent, adding a lively atmosphere to your evenings. With great tunes and a vibrant crowd, it's the perfect way to end your week at The Rose and Crown. Grab a drink, relax, and soak in the music!
          </p>
          <a className="text-decoration-none" style={{ color: 'inherit' }} href="events.html">
           <Link to="/events"><button className="button type9 mb-4"></button></Link> 
          </a>
        </div>
        <div className="col-lg-6 p-0 order-lg-2 order-1">
          <img className="homepage-img" loading="lazy" src={liveMusic} alt="Live Music" />
        </div>
      </div>
    </div>
  )
}


const GetInTouch = () => {
  return (
    <div className="grey-box">
      <div className="container-fluid pt-5 mb-4 d-flex justify-content-center flex-column">
        <div className="row">
          <h2 className="homepage-heading d-flex justify-content-center">
            Get In Touch <span className="heading-red ps-2"> With Us</span>
          </h2>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row pb-5 pt-3 justify-content-center">
          <div className="col-auto">
            <ul className="list-unstyled example-2 justify-content-center d-flex flex-wrap">
              <li className="icon-content mt-3">
                <a
                  href="https://www.facebook.com/p/Rose-Crown-Hay-on-Wye-61558040639094/"
                  aria-label="Facebook"
                  data-social="facebook"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M8.666 0C3.891 0 0 3.892 0 8.667 0 13.06 2.921 16.642 6.734 16V10.333H4.905V8h1.829V6.262c0-1.79 1.064-2.777 2.693-2.777.779 0 1.577.134 1.577.134v1.734H9.86c-.979 0-1.287.607-1.287 1.235V8h2.073l-.332 2.333h-1.741v5.667C13.079 16.642 16 13.06 16 8.667 16 3.892 12.109 0 8.666 0z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">Facebook</div>
              </li>
              <li className="icon-content mt-3">
                <a
                  href="https://www.instagram.com/roseandcrown_hay/"
                  aria-label="Instagram"
                  data-social="instagram"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0=" />
                  </svg>
                </a>
                <div className="tooltip">Instagram</div>
              </li>
              <li className="icon-content mt-3">
                <a
                  href="tel:07704345124"
                  aria-label="Phone"
                  data-social="phone"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <div className="tooltip">Phone</div>
              </li>
              <li className="icon-content mt-3">
                <a
                  href="mailto:theroseandcrown@gmail.com"
                  aria-label="Email"
                  data-social="email"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0H1v-.021L8 8.04l7-4.061V4zm-1-.91L8 7.52 2 3.09V12h12V3.09z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">Email</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


const RandomBeerFact = () => {

const [fact, setFact] = useState("");
const [joke, setJoke] = useState("");

const beerFacts = [
  "Beer is the world's most widely consumed alcoholic beverage.",
  "The oldest known recipe is for beer, dating back to 5,000 BCE in ancient Mesopotamia.",
  "There are over 100 different styles of beer.",
  "The first beer cans were produced in the 1930s.",
  "The world's largest beer festival is Oktoberfest in Munich, Germany.",
  "The foam on beer is called 'head'.",
  "Belgium is home to over 1,500 different types of beer.",
  "The average beer has about 150 calories.",
  "Beer was used as currency in ancient Egypt.",
  "The term 'beer belly' comes from excessive consumption of beer leading to weight gain around the stomach.",
  "The world's strongest beer has an ABV of 67.5%.",
  "Lager is a type of beer that is brewed and conditioned at low temperatures.",
  "Hops are the flowers used in beer to add bitterness and aroma.",
  "The earliest evidence of beer brewing in China dates back over 5,000 years.",
  "The word 'ale' refers to a beer brewed without hops, while 'beer' traditionally refers to a beer made with hops."
];

const beerJokes = [
  "Why don’t beers ever tell secrets? Because they’re always getting spilled!",
  "I drink beer because I’m not a quitter.",
  "Why did the beer go to school? To get a little brrrrrr-ains!",
  "What’s a skeleton’s favourite beer? A *dead* man’s ale.",
  "What did the bartender say after a beer joke? That was *hop*-ing funny!",
  "Why did the beer sit alone at the bar? Because it couldn’t find a pint of friends!",
  "I poured a glass of beer and it tasted just like the ocean... must’ve been a sea-sonal beer.",
  "What do you call a beer with no alcohol? A *root* beer.",
  "Why do beer drinkers never play hide and seek? Because good luck hiding after that many rounds!",
  "What do you call a beer that's made out of milk? A moo-lager.",
  "Why was the beer so good at playing the piano? Because it had great *bar*itone!",
  "What’s the difference between beer and your job? Your job doesn’t get better when you drink beer.",
  "How do you know you’re at a good party? The beer is flowing like a river, and the punchline’s just as smooth.",
  "Why do beer lovers make terrible detectives? Because they always find themselves in a *brew*-haha.",
  "Why do they never serve beer at a maths party? Because you can't drive and derive",
  "What do you call a Jewish beer? A Hebrew",
  "How do you know if someone likes craft beer? Don't worry, they'll tell you.",
  "How do you turn root beer into a regular beer? Pour it into a square cup",
];


const generateFact = () => {
  const randomFact = beerFacts[Math.floor(Math.random() * beerFacts.length)];
  setFact(randomFact);
};

const generateJoke = () => {
  const randomJoke = beerJokes[Math.floor(Math.random() * beerJokes.length)];
  setJoke(randomJoke);
};



  return (
    <div className="container mt-5">
  <div className="row">

    {/* Column 1 */}
    <div className="col-sm-12 col-md-6 mb-3 text-center d-flex flex-column align-items-center">

      <h2 className="p-3 homepage-heading">Generate a <span className="heading-red">Random Beer Fact</span></h2>
      <img className="rounded-circle beer-fact-img mt-3" src={beer} />
      <button className="button gen-btn mt-4 pb-2" onClick={generateFact}>Generate</button>
      {fact && <p className="mt-4 p-4 homepage-text fact-joke">{fact}</p>} {/* Display the random fact */}

    </div>
    {/* Column 2 */}
    <div className="col-sm-12 col-md-6 mb-3 text-center d-flex flex-column align-items-center">
      <h2 className="p-3 homepage-heading">Generate a <span className="heading-red"> Random Beer Joke</span></h2>
      <img className="rounded-circle beer-fact-img mt-3" src={beer2} />
      <button className="button gen-btn mt-4 pb-2" onClick={generateJoke}>Generate</button>
      {joke && <p className="mt-4 p-4 homepage-text fact-joke">{joke}</p>} {/* Display the random joke */}



    </div>
  </div>
</div>


  )
}



export default Carousel;  
export { Carousel, Content, GetInTouch, RandomBeerFact }; 
