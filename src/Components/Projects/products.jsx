import React, { useState, useEffect } from "react";
import "./products.css";
import "../Style/style.css";

const ProductCard = (props) => {
  const [rotation, setRotation] = useState({ ax: 0, ay: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const ax = -((window.innerWidth / 2 - e.pageX) / 70);
      const ay = (window.innerHeight / 2 - e.pageY) / 60;
      setRotation({ ax, ay });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="ze-card-invi-wrap">
        <div
          className="ze-card"
          style={{
            transform: `rotateY(${rotation.ax}deg) rotateX(${rotation.ay}deg)`,
            WebkitTransform: `rotateY(${rotation.ax}deg) rotateX(${rotation.ay}deg)`,
            MozTransform: `rotateY(${rotation.ax}deg) rotateX(${rotation.ay}deg)`
          }}
        >
          <div className="ze-title">{props.title}</div>
          <div className="ze-description">{props.description}</div>
          <div>
            <a href=""><i class="fa-brands fa-github"></i></a>
            <a href=""><i class="fa-sharp fa-solid fa-globe"></i></a>
          </div>
          <div className="ze-img-w">
            <img src={props.img} alt="" style={{ width:"100%", height:"100%", objectFit: "fill" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;