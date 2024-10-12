import React from "react";
import Slider from "react-slick";
import { products } from "../products";
import Button from 'react-bootstrap/Button';

import "./Slider.css";

// Function to truncate description
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

export default function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4, 
        lazyload: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false, 
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
    };

  return (
    <div className="slide-container">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="slide">
            <div className="card ">
              <img src={product.image} alt={product.name} />
              <div className="card-body product-body">
                <h5 className="card-title product-title">{product.name}</h5>
                <p className="card-text product-description">
                  {truncateText(product.description, 10)}
                </p>
                <p className="card-text product-price">
                  <strong>Price: </strong>{product.price}
                </p>

                <div className="but">
             <Button variant="primary">add to card</Button>
              <Button variant="primary">buy now</Button>
             </div>

              </div>
            
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
