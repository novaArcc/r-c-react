import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"

const Footer = () => {
    return (
      <div className="footer">
        <div className="container justify-content-center pt-3">
          <div className="row pt-3">
            <div className="col h5 pt-1 pb-2 d-lg-block d-none">About Us</div>
            <div className="col h5 pt-1 pb-2">Opening Times</div>
            <div className="col h5 pt-1 pb-2">Contact Us</div>
          </div>
  
          <div className="row">
            <div className="col d-lg-block d-none">
              <div className="row ps-3 text-muted fa-text pb-4 pe-5 fa-text">
                The Rose & Crown is a family-owned 16th-century pub located in the Welsh-border town of Hay-On-Wye.
              </div>
              <div className="row pe-4 ps-1 pt-2 text-muted">
              <a className="text-decoration-none text-muted fa-text" href="https://maps.app.goo.gl/AZKPYiZCpSW764NB7">
               <FontAwesomeIcon className="hover-red" icon={faMapMarkerAlt} /> Broad Street, Hay-On-Wye, HR3 5DB
              </a>
              </div>
            </div>
  
            <div className="col">
              <div className="row ps-3 text-muted fa-text">Sunday-Thursday: 12pm-12am</div>
              <div className="row ps-3 text-muted fa-text">Friday-Saturday: 12pm-1am</div>
              <div className="row h5 ps-3 pt-4">Food Service Times:</div>
              <div className="row ps-3 text-muted fa-text">Monday-Thursday: 12pm-7pm</div>
              <div className="row ps-3 text-muted fa-text">Friday & Saturday: 12pm-6pm</div>
            </div>
  
            <div className="col">
              <div className="row ps-1 pb-3 text-muted">
                <a className="text-decoration-none text-muted fa-text" href="https://maps.app.goo.gl/AZKPYiZCpSW764NB7"><FontAwesomeIcon className="me-1 hover-red" icon={faMapMarkerAlt} />Broad Street, Hay-On-Wye, HR3 5DB
                </a>
              </div>
              <div className="row ps-1 pb-3 text-muted">
                <a className="text-decoration-none text-muted fa-text" href="tel:07704345124"><FontAwesomeIcon className="hover-red" icon={faPhone} />   07704345124</a>
              </div>
              <div className="row text-muted ps-1 pb-3">
                <a className="text-decoration-none text-muted fa-text" href="mailto:theroseandcrown@gmail.com"><FontAwesomeIcon className="hover-red" icon={faEnvelope} />   theroseandcrown@gmail.com</a>
              </div>
              <div className="row ps-1 pt-1 text-muted">
                <p>
                  <a href="https://www.facebook.com/profile.php?id=61558040639094" className=" fa-2x fa-black pe-4 icon-no-underline" style={{ color: 'rgb(123, 123, 123)' }}><FontAwesomeIcon className="hover-red" icon={faFacebook} /></a>
                  <a href="https://www.instagram.com/roseandcrown_hay/?igsh=NGF5ZTltZWh6aG5y" className="fa-2x icon-no-underline" style={{ color: 'rgb(123, 123, 123)' }}><FontAwesomeIcon className="hover-red" icon={faInstagram} /></a>
                </p>
              </div>
            </div>
          </div>
  
          <div className="row justify-content-center mt-1 pt-3 pb-3 designed text-secondary fa-text" style={{ fontSize: '12px' }}>
            Designed and developed by Anya Gardner
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;
  
