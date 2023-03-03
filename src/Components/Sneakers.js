import React, { useState } from "react";
import next from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";
import dataSlider from "./dataSlider";


function Sneakers(props) {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //     return null;
  //   }

  

  

  return (
    <section className="slider">
      <img src={previous} alt="" onClick={prevSlide} className="left-arrow" />
      <img src={next} alt="" onClick={nextSlide} className="right-arrow" />
      {dataSlider.map((slide, index) => {
        console.log(slide)
        return (
        
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt=""
                className="image"
                style={{ opacity: props.show ? "0.6" : "1" }}
              />
            )}

         
          </div>
    

        );
      })}
    </section>
  );
}

export default Sneakers;
