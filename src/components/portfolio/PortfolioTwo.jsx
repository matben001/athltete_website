import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const PortfolioTwo = () => {
  return (
    <div className="shane_tm_section" id="portfolio">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <span>Gallery</span>
                    <h3>Photo Gallery</h3>
                  </div>
                </div>
              </div>
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                <Tabs>
                  {/* <TabList>
                    <Tab>All</Tab>
                    <Tab>Design</Tab>
                    <Tab>Branding</Tab>
                    <Tab>Photography</Tab>
                  </TabList>
                  End tablist */}
                  <div className="portfolio_list">
                    <SRLWrapper>
                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li data-aos="fade-right" data-aos-duration="1200">
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/lausane.jpg">
                                  <img
                                    src="/img/lausane.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>AG World Champ</h3>
                                <span>Lausane Swiss</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/bikecuenca-2-2.jpg">
                                  <img
                                    src="/img/bikecuenca-2-2.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Riding in the moutains</h3>
                                <span>Cuenca</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/DSC02704-jHalliday-web.jpg">
                                  <img
                                    src="/img/DSC02704-jHalliday-web.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Bike</h3>
                                <span>Caledon</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="0"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/IMG_20201010_115323.jpg">
                                  <img
                                    src="/img/IMG_20201010_115323.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>MTB</h3>
                                <span>Quebec, Can</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/IMG-20210113-WA0001.jpg">
                                  <img
                                    src="/img/IMG-20210113-WA0001.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Run</h3>
                                <span>Cuenca Ecuador</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/IMG_4342.jpg">
                                  <img
                                    src="/img/IMG_4342.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Hike</h3>
                                <span>Cuenca, Ecuador</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End portfolio list */}
                      </TabPanel>
                      {/* END ALL PORTFOLIO GALLERY */}

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li data-aos="fade-right" data-aos-duration="1200">
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/13.jpg">
                                  <img
                                    src="/img/portfolio/13.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Blue Lemon</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/14.jpg">
                                  <img
                                    src="/img/portfolio/14.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Cherry</h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End portfolio list */}
                      </TabPanel>

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li data-aos="fade-right" data-aos-duration="1200">
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/24.jpg">
                                  <img
                                    src="/img/portfolio/24.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Fruit</h3>
                                <span>Design</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/15.jpg">
                                  <img
                                    src="/img/portfolio/15.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Good Present</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* End single image block */}
                      </TabPanel>

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li data-aos="fade-right" data-aos-duration="1200">
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/11.jpg">
                                  <img
                                    src="/img/portfolio/11.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Blue Lemon</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay="100"
                          >
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/16.jpg">
                                  <img
                                    src="/img/portfolio/16.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Cherry</h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* End single image block */}
                      </TabPanel>
                    </SRLWrapper>
                    {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>
    </div>
  );
};

export default PortfolioTwo;
