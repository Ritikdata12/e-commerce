import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Heroslider.css";

const Heroslider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <>
     <div className="hero">
    <Carousel activeIndex={index} onSelect={handleSelect} fade>


          <Carousel.Item style={{  backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/Budget/NEw/D156384865_WLD-Jupiter24_Central-Inputs_Design-SIM-PC_Hero_3000x1200._CB562885398_.jpg')`}}>
            <div className="carousel-container">
              <div className="containerss">
                <h2 className="animate__animated animate__fadeInDown">Wide Product Selection</h2>
                <p className="animate__animated animate__fadeInUp">Access to a vast range of products across multiple categories, from electronics to fashion and home goods, all in one place</p>
                <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item" style={{  backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img21/sept25/PC_Hero_3000x1200-2._CB562550691_.jpg')`,}}>
            <div className="carousel-container">
              <div className="containerss">
                <h2 className="animate__animated animate__fadeInDown">Secure Payments</h2>
                <p className="animate__animated animate__fadeInUp">Multiple secure payment options, including credit/debit cards, net banking, UPI, and wallets, with encrypted transactions for a worry-free shopping experience..</p>
                <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item" style={{  backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Jupiter24/Event/GW/CE4/1stOct/D161993266_WLD_Jup24_OnePlus_NordCE4_PC_Hero_3000x1200._CB562998229_.jpg')`,}}>
            <div className="carousel-container">
              <div className="containerss">
                <h2 className="animate__animated animate__fadeInDown">Easy Returns and Refunds</h2>
                <p className="animate__animated animate__fadeInUp">Hassle-free return policies with a simple process for refunds, ensuring customer satisfaction.</p>
                <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item" style={{  backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img22/vernac-t/header/PC_Hero_3000x1200_Toddler_1._CB562359921_.jpg')`,}}>
            <div className="carousel-container">
              <div className="containerss">
                <h2 className="animate__animated animate__fadeInDown">User-Friendly Interface</h2>
                <p className="animate__animated animate__fadeInUp"> An intuitive and responsive design that provides seamless navigation across devices, making shopping easy for everyone.</p>
                <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item" style={{  backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/2024/Cons/Jupiter/Pets/Phase1/Hero/PC/PC_Hero_3000x1200_03_3._CB562345280_.jpg')`,}}>
            <div className="carousel-container">
              <div className="containerss">
                <h2 className="animate__animated animate__fadeInDown">Personalized Recommendations: </h2>
                <p className="animate__animated animate__fadeInUp">AI-powered product recommendations based on browsing and purchase history for a tailored shopping experience..</p>
                <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </Carousel.Item>

      
    </Carousel>
  </div>
    </>
  )
}

export default Heroslider