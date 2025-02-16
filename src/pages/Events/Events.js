import heroImage from "./images/heroimg.JPG";
import killerPoolImg from "./images/killerpool.jpg";
import poolRules from "./poolrules.pdf";
import sixNationsImg from "./images/sixnations.jpg"
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
      title: "Six Nations: Wales VS Ireland",
      date: "Saturday 22nd February 14:15",
      description: "Watch Wales take on Ireland in the Six Nations live on our many screens this Friday at 2:15 PM!",
    },
    {
      title: "Six Nations: England VS Scotland",
      date: "Saturday 22nd February 16:45",
      description: "Watch England take on Scotland in the Six Nations live on our many screens this Friday at 4:45 PM!  ",
    },
    {
      title: "Six Nations: Italy VS France",
      date: "Sunday 23rd February 15:00",
      description: "Watch Italy take on France in the Six Nations live on our many screens this Friday at 3PM!",
    },
    {
      title: "Six Nations: Ireland VS Wales",
      date: "Saturday 8th March 14:15",
      description: "Watch Ireland take on Wales in the Six Nations live on our many screens this Friday at 2:15 PM!",
    },
    {
      title: "Six Nations: Scotland VS Wales",
      date: "Saturday 8th March 16:45",
      description: "Watch Scotland take on Wales in the Six Nations live on our many screens this Friday at 4:45 PM!",
    },
    {
      title: "Six Nations: England VS Italy",
      date: "Sunday 9th March 15:00",
      description: "Watch England take on Italy in the Six Nations live on our many screens this Friday at 3PM! ",
    },
    {
      title: "Six Nations: Italy VS Ireland",
      date: "Saturday 15th March 14:15",
      description: "Watch Italy take on Ireland in the Six Nations live on our many screens this Friday at 2:15 PM!",
    },
    {
      title: "Six Nations: Wales VS England",
      date: "Saturday 15th March 16:45",
      description: "Watch Wales take on England in the Six Nations live on our many screens this Friday at 4:45 PM!  ",
    },
    {
      title: "Six Nations: France VS Scotland",
      date: "Saturday 15th March 20:00",
      description: "Watch France take on Scotland in the Six Nations live on our many screens this Friday at 8PM! ",
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
                <img className="card-img-top p-3" src={sixNationsImg} alt="Card image cap" />
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
