import React from 'react';
import "./Electronicsslider.css";

const SliderComponent = () => {
  const products = [
    { title: "Mobile Accessories", price: "₹89", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_2._CB563907533_.jpg" },
    { title: "Headsets", price: "₹199", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_9._CB563907533_.jpg" },
    { title: "Powerbanks", price: "₹449", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_1._CB563907533_.jpg" },
    { title: "Cables", price: "₹89", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_2._CB563907533_.jpg" },
    { title: "Chargers", price: "₹89", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_4._CB563907533_.jpg" },
    { title: "Cases & Covers", price: "₹99", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_5._CB563907533_.jpg" },
    { title: "Mobile Accessories", price: "₹89", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_2._CB563907533_.jpg" },
    { title: "Headsets", price: "₹199", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_9._CB563907533_.jpg" },
    { title: "Powerbanks", price: "₹449", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_1._CB563907533_.jpg" },
    { title: "Cables", price: "₹89", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_2._CB563907533_.jpg" },
    { title: "Chargers", price: "₹89", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_4._CB563907533_.jpg" },
     { title: "Cases & Covers", price: "₹99", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_5._CB563907533_.jpg" },
    { title: "Screen Protectors", price: "₹99", imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/Jupiter24/Phase1/MSO/DESKTOP/02_200_3._CB563907533_.jpg" }
  ];

  const scrollLeft = () => {
    document.getElementById('slider-container').scrollLeft -= 300;
  };

  const scrollRight = () => {
    document.getElementById('slider-container').scrollLeft += 300;
  };

  return (
    <div className="deals-slider">
      <h2>Starting ₹89 | Deals on mobile accessories</h2>
      <div className="slider-controls">
        <button onClick={scrollLeft} className="scroll-button left">&lt;</button>
        <div id="slider-container" className="slider-container">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={product.imgSrc} alt={product.title} />
              </div>
              <div className="product-info">
                <p className="product-title">{product.title}</p>
                <p className="product-price">Starting {product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="scroll-button right">&gt;</button>
      </div>
    </div>
  );
};

export default SliderComponent;
