import React, { Component } from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";
import images from "./images";


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
      dots: true,
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
      <div className="slider-main">
        <Slider {...settings}>
          <div className="slider-box">
            <img src={images[0]} alt="" />
          </div>
          <div className="slider-box">
            <img src={images[1]} alt="" />
          </div>
          <div className="slider-box">
            <img src={images[2]} alt="" />
          </div>
          <div className="slider-box">
            <img src={images[3]} alt="" />
          </div>
          <div className="slider-box">
            <img src={images[4]} alt="" />
          </div>
        </Slider>
       
        <p>After the weirdness of 2021-2022 fashion trends, with online business meetings and WFH, the current fashion trends of 2023 bring some refreshing changes you’ll love to hear about.

For 60 years or more, the “latest” fashion trends were gathered from runways and fashion magazines.

Nowadays, social media influencers and the overall streetwear culture dictate what’s cool and fresh in fashion.</p>
      </div>
    );
  }
}