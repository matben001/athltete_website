import React from "react";

const SkillsTwo = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_skills">
          <div className="container">
            <div className="skills_inner">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="shane_tm_title">
                  <h3>Race Result</h3>
                </div>
                <div className="text">
                  <p>
                    3 Years of Racing Elite. Over 6 countris, spanning 3 continents.
                    12 Starts On the World Triathlon Elite Circuit.
                    Over 20 Elite Race International adn Domestic.
                  </p>
                </div>
              </div>
              {/* End .left */}

              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="tokyo_progress">
                  <div className="progress_inner">
                    <span>
                      <span className="label">15 @2019 ITU World Triathlon Grand Final Lausanne 20-24 AG Sprint</span>
                      <span className="number">2019</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 100 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">53 @Clermont PATCO Sprint Triathlon Panamerican Cup</span>
                      <span className="number">2020</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 100 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}

                  <div className="progress_inner">
                    <span>
                      <span className="label">46 @Europe Triathlon Cup Balıkesir Elite Men</span>
                      <span className="number">2021</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div
                          className="bar_in"
                          style={{ width: 100 + "%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  {/* End .progress_inner */}
                </div>
              </div>
              {/* End .right */}
            </div>
          </div>
          {/* End .conainer */}
        </div>
      </div>
    </>
  );
};

export default SkillsTwo;
