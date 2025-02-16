import contact_img from "./images/contact-img.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="container-fluid mt-5 contact-us-container p-0 d-none d-sm-block">
    <div className="row p-0 me-0 h-100 pb-sm-0 pb-5 pt-3">
        <div className="col d-flex flex-column justify-content-center ps-0 ps-sm-5 mx-5 py-5">
            <h1 className="get-in-touch-header pt-4 pt-sm-0" style={{ fontSize: '4vw' }}>Get in Touch</h1>
            <p className="get-in-touch-caption" style={{ fontSize: '2vw' }}>Have questions or want to book a table? We'd love to hear from you. Here's how you can reach us:</p>
        </div>
        <div className="col p-0 d-none d-sm-block">
            <img className="img-fluid contact-us-img ps-3" rel="preload" src={contact_img} alt="Contact Us"/>
        </div>
    </div>
</div>

{/* Contact us small screen */}
<div className="container d-xl-none mt-5 mt-sm-2 pt-5 pt-sm-2">
    <div className="row d-flex justify-content-center mt-md-5">
        <div className="col col-md-4 col-7 bg-white mb-5 rounded mt-0 mt-md-0 overflow-hidden">
            <div className="d-flex justify-content-center"><i className="fa fa-phone contact-icon mt-3"></i></div>
            <p className="contact-text d-flex justify-content-center pt-2">Call Us</p>
            <p className="d-flex justify-content-center text-center px-3">Want to book a table or learn more about our events? Just pick up the phone to chat with a member of our team.</p>
            <p className="d-flex justify-content-center text-center pt-4">
                <a className="contact-link" href="tel: 07704345124">
                    <button className="call-email-button call-email-type1 mt-3"></button>
                </a>
            </p>
        </div>

        <div className="col col-md-4 col-7 bg-white offset-md-2 mb-5 rounded overflow-hidden">
            <div className="d-flex justify-content-center"><i className="fa fa-envelope contact-icon mt-3"></i></div>
            <p className="contact-text d-flex justify-content-center pt-2">Email Us</p>
            <p className="d-flex justify-content-center text-center px-3">Got questions or want to make a reservation? Send us an email and our team will be happy to assist you.</p>
            <p className="d-flex justify-content-center text-center pt-4">
                <a className="contact-link" href="mailto: theroseandcrown@gmail.com">
                    <button className="call-email-button call-email-type2 mt-3"></button>
                </a>
            </p>
        </div>
    </div>
</div>

{/* Contact us small screen end */}

<div className="contact-us-phone d-none d-xl-block">
    <div className="d-flex justify-content-center"><i className="fa fa-phone contact-icon mt-3"></i></div>
    <p className="contact-text d-flex justify-content-center pt-2">Call Us</p>
    <p className="d-flex justify-content-center text-center px-3">Interested in booking a table or learning more about our events? Just pick up the phone to chat with a member of our team.</p>
    <p className="d-flex justify-content-center text-center pt-4">
        <a className="contact-link" href="tel: 07704345124">
            <button className="call-email-button call-email-type1 mt-3"></button>
        </a>
    </p>
</div>

<div className="contact-us-email d-none d-xl-block">
    <div className="d-flex justify-content-center"><i className="fa fa-envelope contact-icon mt-3"></i></div>
    <p className="contact-text d-flex justify-content-center pt-2">Email Us</p>
    <p className="d-flex justify-content-center text-center px-3">Got questions or want to make a reservation? Send us an email and our team will be happy to assist you.</p>
    <p className="d-flex justify-content-center text-center pt-4">
        <a className="contact-link" href="mailto: theroseandcrown@gmail.com">
            <button className="call-email-button call-email-type2 mt-3"></button>
        </a>
    </p>
</div>

{/* Google maps row */}
<div className="container">
    <div className="row google-maps-row d-flex justify-content-center pb-5 mb-5">
        <div className="col col-md-9 col-10 p-0">
            <iframe
                className="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.2349252574277!2d-3.128667723345768!3d52.07545317194799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870298fd5a143bb%3A0xe038b5f0866e51ef!2sRose%20and%20Crown!5e0!3m2!1sen!2suk!4v1718963172644!5m2!1sen!2suk"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

        <div className="col col-md-3 col-10 google-maps-col-2 ps-4 pt-md-0 d-flex p-0 flex-column justify-content-center border-left-md-0">
            <h3>Find Us</h3>
            <p className="mb-0">Broad Street,</p>
            <p className="mb-0">Hay-On-Wye,</p>
            <p>HR3 5DB</p>
            <h3 className="pt-4">Phone</h3>
            <a className="maps-link" href="tel: 07704345124">07704 345124</a>
            <h3 className="pt-4 mt-3">Email</h3>
            <a className="maps-link pb-md-0 pb-3" href="mailto: theroseandcrown@gmail.com">theroseandcrown@gmail.com</a>
        </div>
    </div>
</div>
{/* Google maps row end */}

    </div>
  )
}

export default Contact
