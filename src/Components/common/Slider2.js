/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

function Slider2() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handlePrev = () => {
    handleSelect(activeIndex === 0 ? 1 : activeIndex - 1);
  };

  const handleNext = () => {
    handleSelect(activeIndex === 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="row">
        <div className="col">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 4"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 5"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 6"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 7"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 8"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 9"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 10"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 11"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="12" aria-label="Slide 12"></button>
                  </div>
                  <div className="carousel-inner">
                      <div className="carousel-item active">
                          <img src="assets/img/slider/1.webp" className="d-block w-100 resimSlider" alt="Slide 0"/>
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="assets/img/slider/2.webp" className="d-block w-100 resimSlider" alt="Slide 1"/>
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="assets/img/slider/3.webp" className="d-block w-100 resimSlider" alt="Slide 2"/>
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="assets/img/slider/4.webp" className="d-block w-100 resimSlider" alt="Slide 3"/>
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="assets/img/slider/5.webp" className="d-block w-100 resimSlider" alt="Slide 4"/>
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="assets/img/slider/6.webp" className="d-block w-100 resimSlider" alt="Slide 5"/>
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="assets/img/slider/7.webp" className="d-block w-100 resimSlider" alt="Slide 6"/>
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="assets/img/slider/8.webp" className="d-block w-100 resimSlider" alt="Slide 7"/>
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="assets/img/slider/9.webp" className="d-block w-100 resimSlider" alt="Slide 7"/>
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="assets/img/slider/10.webp" className="d-block w-100 resimSlider" alt="Slide 7"/>
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="assets/img/slider/11.webp" className="d-block w-100 resimSlider" alt="Slide 7"/>
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                      </div>
                      <div className="carousel-item">
                          <img src="assets/img/slider/12.webp" className="d-block w-100 resimSlider" alt="Slide 7"/>
                          <div className="carousel-caption d-none d-md-block">
                          </div>
                      </div>

                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
              </div>
      </div>
    </div>
    </div>
  );
}

export default Slider2;
