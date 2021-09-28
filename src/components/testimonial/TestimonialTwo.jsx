import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function TestimonialTwo() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
 
<div class="grid-container">
  <div class="grid-item">
  <a href="https://www.instagram.com/matben"><FontAwesomeIcon icon={faInstagram} size="6x" color="black" /></a>

  </div>
  <div class="grid-item">
<a href="https://www.linkedin.com/in/matben1"><FontAwesomeIcon icon={faLinkedin} size="6x" color="black"/></a> 

  </div>
  <div class="grid-item">
  <a href="mailto:matben@bell.net"><FontAwesomeIcon icon={faEnvelopeSquare} size="6x" color="black" />
</a>
  </div>

</div>

  );
}
