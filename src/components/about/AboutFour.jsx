import React from "react";

const AboutFour = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div className="image">
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/about/4.jpg"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div className="shane_tm_title">
                  <span>About Me</span>
                  <h3>Triathlete based in Canada</h3>
                </div>
                <div className="text">
                  <p>
                  Good morning, everyone! I'm Mathieu! I was very active when I was young. I was involved in all sports: competitive alpine skiing, running,cross-crountry skiing, mountain biking and, finally, triathlon. I started triathlon at an elite level at the age of 18. Since that day, I have never stopped doing triathlon and my passion has never stopped growing. 
This triathlon journey has taken me to many place around the world and I can't wait to discover more
                  </p>
                </div>
                <div className="shane_tm_button">
                  <a href="img/resume/resume.jpg" download>
                    Download CV
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default AboutFour;
