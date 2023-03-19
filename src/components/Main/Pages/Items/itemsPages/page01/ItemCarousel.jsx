import React, { Component } from "react";
import Slider from "react-slick";
import "./itempage.css";
import image from "../../../../SliderMain/images";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

  
  export default class CenterMode extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div className="carousel-page">
          <Slider {...settings}>
            <div>
              <h3><img src={image[0]} alt="" /></h3>
            </div>
            <div>
              <img src={image[1]} alt="" /> 
            </div>
            <div>
              <img src={image[2]} alt="" /> 
            </div>
            <div>
              <img src={image[3]} alt="" /> 
            </div>
            <div>
              <img src={image[4]} alt="" /> 
            </div>
            <div>
              <img src={image[5]} alt="" /> 
            </div>
          </Slider>
        </div>
      );
    }
  }