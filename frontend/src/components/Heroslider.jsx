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
                <h2 className="animate__animated animate__fadeInDown">We are professional</h2>
                <p className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item" style={{  backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img21/sept25/PC_Hero_3000x1200-2._CB562550691_.jpg')`,}}>
            <div className="carousel-container">
              <div className="containerss">
                <h2 className="animate__animated animate__fadeInDown">At vero eos et accusamus</h2>
                <p className="animate__animated animate__fadeInUp">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item" style={{  backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Jupiter24/Event/GW/CE4/1stOct/D161993266_WLD_Jup24_OnePlus_NordCE4_PC_Hero_3000x1200._CB562998229_.jpg')`,}}>
            <div className="carousel-container">
              <div className="containerss">
                <h2 className="animate__animated animate__fadeInDown">Temporibus autem quibusdam</h2>
                <p className="animate__animated animate__fadeInUp">Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
                <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item" style={{  backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img22/vernac-t/header/PC_Hero_3000x1200_Toddler_1._CB562359921_.jpg')`,}}>
            <div className="carousel-container">
              <div className="containerss">
                <h2 className="animate__animated animate__fadeInDown">Nam libero tempore</h2>
                <p className="animate__animated animate__fadeInUp">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>
                <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="carousel-item" style={{  backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/2024/Cons/Jupiter/Pets/Phase1/Hero/PC/PC_Hero_3000x1200_03_3._CB562345280_.jpg')`,}}>
            <div className="carousel-container">
              <div className="containerss">
                <h2 className="animate__animated animate__fadeInDown">Magnam aliquam quaerat</h2>
                <p className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="#featured-services" className="btn-get-started scrollto animate__animated animate__fadeInUp">Get Started</a>
              </div>
            </div>
          </Carousel.Item>

        {/* </div> */}

        {/* <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </button>

      </div> */}
    </Carousel>
  </div>
    </>
  )
}

export default Heroslider