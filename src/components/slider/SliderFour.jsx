import React from "react";
import Particles from "react-particles-js";
import TextLoop from "react-text-loop";
import ParticleAnim from "./ParticleAnim.tsx"
const Slider = () => {
  return (
    <div className="slider-four">
      <div className="shane_tm_hero" id="home" data-style="one">
        <div className="frame-layout__particles">
          <ParticleAnim />
        </div>
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "img/slider/3.jpg"
                })`,
            }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>
                Mathieu <br /> Benoit
                  <br />
                </span>{" "}
                  <div className="job_wrap">
              <span className="job">
                
                <span className="overlay_effect"></span>
              </span>
            </div>
                <TextLoop>
                  <span className="loop-text">Swim</span>
                  <span className="loop-text">Bike</span>
                  <span className="loop-text">Run</span>
                  <span className="loop-text">Triathlon</span>

                </TextLoop>{" "}
                <span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

          
            {/* End designation */}
         
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
    </div>
  );
};

export default Slider;
