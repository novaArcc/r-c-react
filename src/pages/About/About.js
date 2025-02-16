import hero_img from "./images/hero-img.jpg";
import about_us_img_1 from "./images/about-us-img-1.jpg";
import about_us_img_2 from "./images/about-us-img-2.jpg";
import about_us_img_3 from "./images/about-us-img-3.jpg";
import about_us_img_4 from "./images/about-us-img-4.jpg";
import oldcrown from "./images/oldcrown.jpg";
import "./About.css"

const About = () => {
  return (
    <div>


{/*Hero*/}

<div className="container-fluid mt-5 contact-us-container p-0 d-none d-sm-block">
  <div className="row p-0 me-0 h-100 pb-sm-0 pb-5 pt-3">
    <div className="col d-flex flex-column justify-content-center ps-0 ps-sm-5 mx-5 py-5">
      <h1 className="get-in-touch-header pt-4 pt-sm-0" style={{ fontSize: '4vw' }}>About Us</h1>
      <p className="get-in-touch-caption" style={{ fontSize: '2vw' }}>Embracing Tradition, Community, and Family Values.</p>
    </div>
    <div className="col p-0 d-none d-sm-block">
      <img className="img-fluid contact-us-img ps-3" rel="preload" src={hero_img} alt="About Us" />
    </div>
  </div>
</div>

{/*Values*/}

<div className="container my-0 my-sm-5 values">
  <div className="row mt-5 mt-sm-0 pt-5 pt-sm-0">
    <div className="col-lg-6 d-flex flex-column justify-content-center px-4 px-sm-0">
      <h2 className="pb-3 values-header">Our <span className="heading-red">Values</span></h2>
      <div className="values-text">
        <p>Welcome to The Rose and Crown, a charming 16th-century pub in Hay-on-Wye, owned by husband-and-wife team Laura and Rob. As parents to three young children, they create a welcoming, family-friendly environment where everyone feels at home.</p>
        <p>At The Rose and Crown, we strive to be the local gathering spot for friends, families, and sports enthusiasts. Whether you're here to catch the latest game on one of our five TV screens, enjoy a meal with loved ones, or unwind after a long day, we have something for everyone.</p>
        <p>Our vision blends the vibrant atmosphere of a sports bar with the inviting ambiance of a traditional local pub. We show all live sports, have a pool table for friendly competition, a jukebox, and feature live music every weekend.</p>
        <p>Our menu caters to both adults and children. We're committed to strengthening community ties and creating lasting memories. Join us and experience the perfect blend of sports excitement and family-friendly hospitality in a historical setting. We look forward to welcoming you!</p>
      </div>
    </div>

    {/*Column with Grid of 4 Pictures*/}
    <div className="col-lg-6 pt-3 pt-lg-0 mt-lg-0">
      <div className="row d-flex justify-content-center">
        <div className="col-5 p-2">
          <img src={about_us_img_1} className="img-fluid rounded" alt="Image 1" />
        </div>
        <div className="col-5 p-2">
          <img src={about_us_img_2} className="img-fluid rounded" alt="Image 2" />
        </div>
        <div className="col-5 p-2">
          <img src={about_us_img_3} className="img-fluid rounded" alt="Image 3" />
        </div>
        <div className="col-5 p-2">
          <img src={about_us_img_4} className="img-fluid rounded" alt="Image 4" />
        </div>
      </div>
    </div>
  </div>
</div>

{/*History*/}

<div className="container pt-3 values mb-5">
  <div className="row mt-5">
    <div className="col col-lg-6 col-12 order-lg-1 order-2">
      <img className="img-fluid history-img" src={oldcrown} alt="Old Crown" />
    </div>

    <div className="col-lg-6 col-12 d-flex flex-column justify-content-center px-4 order-lg-2 order-1">
      <h2 className="pb-3 values-header pt-0 pt-sm-3">Our <span className="heading-red">History</span></h2>
      <div className="values-text">
        <p>The Rose and Crown has a storied past that reflects its importance in the community of Hay-on-Wye. Originally part of a larger complex that included the Crown, the building was significantly larger than it is today. While the Crown has since been converted into residential flats, the Rose and Crown has remained a licensed premises, preserving its heritage as a beloved local establishment.</p>
        <p>In the 19th century, the Rose and Crown was a key stopping point for the mail-coach, with coaches passing through from Hereford three times a week. The inn was a bustling hub, offering food and accommodation to travellers and hosting regular auctions, highlighting its role as a prominent local venue.</p>
        <p>The inn also played a significant role in local social life. In 1843, the Rose and Crown Benefit Club and Amicable Friendly Society famously met here, with celebrations continuing until dawn. This same society held a grand anniversary celebration in 1846, featuring a procession through town and a lavish dinner attended by 110 members and friends. Today, while the building may be smaller, the Rose and Crown continues to serve as a vibrant part of the Hay-on-Wye community, honouring its rich historical legacy.</p>
        <p className="text-secondary">Eisel, J. and Bennett, F. (2005) <em>The Pubs of Hay on Wye and the Golden Valley</em>. Almeley Herefordshire: Logaston Press, p. 196</p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default About
