import { useState } from 'react';
import Slider from "react-slick";
import classes from './Slide.css';
import fish1 from "../../assets/fish1.png";
import fish2 from "../../assets/fish2.png";
import fish3 from "../../assets/fish3.png";
import fish4 from "../../assets/fish4.png";
import starfish from "../../assets/starfish.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [fish1, fish2, fish3, fish4, starfish]


function Slide () {

// this is the built in arrows from react icons 
const NextArrow =({onClick}) => {
          return (
                    <div className="arrow next" onClick={onClick}>
                    <FaArrowRight />
                    
                    </div>
          );
};

const PrevArrow =({onClick}) => {
          return (
                    <div className="arrow prev" onClick={onClick}>
                    <FaArrowLeft />
                    
                    </div>
          );
};

const [imageIndex, setImageIndex] = useState(0)


const settings = {
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: true,
          // lazyLoad: true,
          // speed: 300,
          slidesToShow: 3,
          centerMode: true,
          centerPadding: 0,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          beforeChange: (current, next) => setImageIndex(next)

};
          return (
          <div className={classes.Slide}>
                    <Slider {...settings}>
                    {images.map((img, idx) => (
                              <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                              <img src={img} alt={img} />
                              </div>
                              
                    ))}
                    </Slider>
          </div>
          )
}

export default Slide;
