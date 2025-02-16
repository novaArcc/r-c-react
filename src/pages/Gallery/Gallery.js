import "./Gallery.css";
import gal_img_1 from "./images/gal-img-1.JPG";
import gal_img_2 from "./images/gal-img-2.JPG";
import gal_img_3 from "./images/gal-img-3.jpg";
import gal_img_4 from "./images/gal-img-4.jpg";
import gal_img_5 from "./images/gal-img-5.jpg";
import gal_img_6 from "./images/gal-img-6.jpg";
import gal_img_7 from "./images/gal-img-7.jpg";
import gal_img_8 from "./images/gal-img-8.jpg";
import gal_img_9 from "./images/gal-img-9.jpg";
import gal_img_10 from "./images/gal-img-10.jpg";
import gal_img_11 from "./images/gal-img-11.jpg";
import gal_img_12 from "./images/gal-img-12.JPG";
import gal_img_13 from "./images/gal-img-13.JPG";
import gal_img_14 from "./images/gal-img-14.JPG";
import gal_img_15 from "./images/gal-img-15.JPG";
import gal_img_16 from "./images/gal-img-16.jpg";

const Gallery = () => {
    const images = [
        { src: gal_img_1 },
        { src: gal_img_2 },
        { src: gal_img_3 },
        { src: gal_img_4 },
        { src: gal_img_5 },
        { src: gal_img_6 },
        { src: gal_img_7 },
        { src: gal_img_8 },
        { src: gal_img_9 },
        { src: gal_img_10 },
        { src: gal_img_11 },
        { src: gal_img_12 },
        { src: gal_img_13 },
        { src: gal_img_14 },
        { src: gal_img_15 },
        { src: gal_img_16 },
      ];


 return (
<div>
    <div className="container text-white pt-5 mb-5 mt-5">
      <div className="row d-flex justify-content-center mt-5">
      {images.map((image, index) => (
        <div key={index} className="col col-6 col-lg-3 pb-3">
          <img className="img-fluid fade-in" src={image.src} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
      </div>
    </div>
</div>
  )
}

export default Gallery
