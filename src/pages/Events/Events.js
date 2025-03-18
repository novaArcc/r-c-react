import heroImage from "./images/heroimg.JPG";
import killerPoolImg from "./images/killerpool.jpg";
import poolRules from "./poolrules.pdf";
import justAnna from "./images/justanna.jpg"
import sixNationsImg from "./images/sixnations.jpg"
import johnWilliams from "./images/johnwilliams.jpg";
import oneYear from "./images/oneyear.jpg"
import "./Events.css"

const EventsHero = () => {
  return (
    <div>
      {/* Hero Section */}
<div className="container-fluid mt-5 contact-us-container p-0 d-none d-sm-block">
  <div className="row p-0 me-0 h-100 pb-sm-0 pb-5 pt-3">
    <div className="col d-flex flex-column justify-content-center ps-0 ps-sm-5 mx-5 py-5">
      <h1 className="whats-on-header pt-4 pt-sm-0" style={{ fontSize: '4vw' }}>What's On</h1>
      <p className="whats-on-caption" style={{ fontSize: '2vw' }}>Planning your week? Discover the events we have in store for you.</p>
    </div>
    <div className="col p-0 d-none d-sm-block">
      <img className="img-fluid whats-on-img ps-3" src={heroImage} alt="What's On" />
    </div>
  </div>
</div>
</div>
)}

const events = [
    {
      title: "Flockin' Killer Pool",
      date: "Wednesday 19th March 20:00",
      description: "Supported by our wonderful Friends over at BaaadFlockers. Memorise the Rules, come on down & enjoy a perfect mix of Chaos and Fun!",
      image: killerPoolImg,
      link: poolRules
     },
    {
      title: "Just Anna",
      date: "Saturday 22nd March",
      description: "Experience an electrifying night with the lead singer of Anna & The Tonics, delivering floor-fillers from the '50s to today!",
      image: justAnna
    },
    {
      title: "Flockin' Killer Pool",
      date: "Wednesday 26th March 20:00",
      description: "Supported by our wonderful Friends over at BaaadFlockers. Memorise the Rules, come on down & enjoy a perfect mix of Chaos and Fun!",
      image: killerPoolImg,
      link: poolRules
     },
     {
      title: "One Year Birthday",
      date: "Saturday 29th March Open-Close!",
      description: "Pop down for some amazing drinks deals, Incredible tunes and the best vibes of the year! 🎂🎈",
      image: oneYear,
     },
     {
      title: "Flockin' Killer Pool",
      date: "Wednesday 2nd April 20:00",
      description: "Supported by our wonderful Friends over at BaaadFlockers. Memorise the Rules, come on down & enjoy a perfect mix of Chaos and Fun!",
      image: killerPoolImg,
      link: poolRules
     },
     {
      title: "Flockin' Killer Pool",
      date: "Wednesday 9th April 20:00",
      description: "Supported by our wonderful Friends over at BaaadFlockers. Memorise the Rules, come on down & enjoy a perfect mix of Chaos and Fun!",
      image: killerPoolImg,
      link: poolRules
     },
     {
      title: "Flockin' Killer Pool",
      date: "Wednesday 16th April 20:00",
      description: "Supported by our wonderful Friends over at BaaadFlockers. Memorise the Rules, come on down & enjoy a perfect mix of Chaos and Fun!",
      image: killerPoolImg,
      link: poolRules
     },
     {
      title: "Flockin' Killer Pool",
      date: "Wednesday 23rd April 20:00",
      description: "Supported by our wonderful Friends over at BaaadFlockers. Memorise the Rules, come on down & enjoy a perfect mix of Chaos and Fun!",
      image: killerPoolImg,
      link: poolRules
     },
     {
      title: "Flockin' Killer Pool",
      date: "Wednesday 30th April 20:00",
      description: "Supported by our wonderful Friends over at BaaadFlockers. Memorise the Rules, come on down & enjoy a perfect mix of Chaos and Fun!",
      image: killerPoolImg,
      link: poolRules
     },
  ];
  
  const EventCards = () => {
    return (
      <div className="container mt-5">
        {/* Event Cards Section */}
        <div className="row d-flex justify-content-around align-items-start mt-5 pt-5 pt-sm-5">
          {events.map((event, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-5 d-flex justify-content-center">
              <div className="card mb-5" style={{ width: '18rem' }}>
                <img className="card-img-top p-3" src={event.image} alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">{event.title}</h4>
                  <h6 className="text-muted">{event.date}</h6>
                  <p className="card-text">{event.description}</p>
                  {event.title === "Flockin' Killer Pool" && (
                  <a href={event.link}>
                    <button className="button type1"></button>
                  </a>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  



export { EventsHero , EventCards}
