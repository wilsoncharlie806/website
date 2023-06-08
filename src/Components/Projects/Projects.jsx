import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./products";
import "../Style/style.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./products.css";

class ProductSlider extends Component {
  
  constructor() {
    super();
    this.state = {
      slides: [
        {
          title: "House Price Prediction",
          description: "The hpp project is aimed at developing a machine learning model that can accurately predict the prices of houses based on various features.",
          img: "https://res.cloudinary.com/darrqmepw/image/upload/v1686153355/hpp_img_320x240_w2x0zv.png"
        },
        {
          title: "ECG Monitoring System",
          description: "The ECG Monitoring System provides real-time tracking and analysis of ECG signals for early detection and diagnosis of cardiovascular abnormalities.",
          img: "https://res.cloudinary.com/darrqmepw/image/upload/v1686217197/ECG_320x240_ydbol6.png"
        },
        {
          title: "Blockchain Website",
          description: "The Blockchain-based Portfolio Website leverages the power of blockchain technology to create a secure and decentralized portfolio website.",
          img: "https://res.cloudinary.com/darrqmepw/image/upload/v1686233569/dec_320x240_qqlzq8.png"
        },
      ]
    };
  }
  render() {

    const styles = {
      height: 0,
      color: "#111",
    };

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
    };

    return (
      <>
      <header className="header" style={{ minHeight: "fit-content" }}>
      <div className="container" style={{ minHeight: "fit-content" }}>
        <div className="con">
          <div className="fle text">
            <p className="t1" id="br">
              &lt;body&gt;
            </p>
            <p className="pad1 box2"></p>
            <p className="pad2 box1"></p>
            <p className="pad3 boxb"></p>
          </div>

          <div className="fle text">
            <p className="t1 mar" id="bl">
              &lt;h1&gt;
            </p>
            <p className="pad4 box3"></p>
            <p className="pad5 box4"></p>
            <p className="pad6 boxb"></p>
          </div>

          <div className="fle mar">
            <h1 className="t2 btn">P</h1>
            <h1 className="t2 btn">r</h1>
            <h1 className="t2 btn">o</h1>
            <h1 className="t2 btn">j</h1>
            <h1 className="t2 btn">e</h1>
            <h1 className="t2 btn">c</h1>
            <h1 className="t2 btn">t</h1>
          </div>

          <div className="fle text">
            <p className="t1 mar" id="br">
              &lt;/h1&gt;
            </p>
            <p className="pad7 box1"></p>
            <p className="pad8 boxb"></p>
          </div>

          <div className="fle text">
            <p className="t1 mar" id="bl">
              &lt;p&gt;
            </p>
            <p className="box4 pad9"></p>
            <p className="boxb pad10"></p>
          </div>

          <p className="t3 mar text">
          Exploring a diverse range of creative and technical skills, constantly seeking growth and development to become a versatile professional. Discover my journey through my portfolio website.
          </p>

          <div className="fle text">
            <p className="t1 mar" id="pr">
              &lt;/p&gt;
            </p>
            <p className="box5 pad11"></p>
            <p className="box4 pad12"></p>
          </div>

          <div className="fle text mar">
            <p className="t1" id="bl">
              &lt;div&gt;
            </p>
            <p className="box1 pad7"></p>
            <p className="box2 pad5"></p>
            <p className="boxb pad17"></p>
          </div>

        </div>
      </div>
      </header>

          <div>
          <Slider {...settings} className="fade">
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                <ProductCard title={slide.title} description={slide.description} img={slide.img} />
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
              </div>
            );
          })}
          </Slider>
          </div>


          <header style={{ marginTop: "25px", minHeight: "fit-content" }} className="header">
      <div className="container" style={{ minHeight: "fit-content" }}>
        <div className="con">
        <p style={styles}>
            I’m interested in freelance opportunities – especially ambitious or
            large projects.
          </p>
          <div className="fle text mar">
            <p className="t1" id="br">
              &lt;/form&gt;
            </p>
            <p className="box1 pad12"></p>
            <p className="box3 pad5"></p>
            <p className="boxb pad18"></p>
          </div>

          <div className="fle text">
            <p className="t1" id="db">
              &lt;/body&gt;
            </p>
            <p className="box4 pad14"></p>
            <p className="box2 pad15"></p>
            <p className="boxb pad16"></p>
          </div>
        </div>
      </div>
    </header>

      

          </>
    );
  }
}

export default ProductSlider;