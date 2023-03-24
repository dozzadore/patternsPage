import React, { Component } from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";
import { Link } from "react-router-dom";

import img01 from "./Images/01.jpg";
import img02 from "./Images/02.jpg";
import img03 from "./Images/03.jpg";
import img04 from "./Images/04.jpg";
import img05 from "./Images/05.jpg";
import img06 from "./Images/06.jpg";

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


export default class SimpleSlider extends Component {
  render() {
  
    const settings = {
      infinite: true,
      fade: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <Link to="/items">
      <div className="slider-main">
        <Slider {...settings}>
        
          <div className="slider-box">
              <img src={img01} alt="" />
          </div>
          <div className="slider-box">
              <img src={img02} alt="" />
          </div>
          <div className="slider-box">
              <img src={img03} alt="" />
          </div>
          <div className="slider-box">
              <img src={img04} alt="" />
          </div>
          <div className="slider-box">
              <img src={img05} alt="" />
          </div>
          <div className="slider-box">
              <img src={img06} alt="" />
          </div>
          
        </Slider>
      </div>
      </Link>
    );
  }
}