import React, { Component } from "react";
import Slider from "react-slick";
import { baseUrl } from "./config";
import "./itempage.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <div className="imgCarousel">
            <img src={`/image01.jpg`} alt=""/>
          </div>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <Slider {...settings}>
          <div>
            <img src={baseUrl + "/image01.jpg"} alt=""/>
          </div>
          <div>
            <img src={baseUrl + "/image02.jpg"} alt=""/>
          </div>
          <div>
            <img src={baseUrl + "/image03.jpg"} alt=""/>
          </div>
          <div>
            <img src={baseUrl + "/image04.jpg"} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}