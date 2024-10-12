/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const TestimonialSlider = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const handlePrev = () => {
    handleSelect(activeIndex === 0 ? 5 : activeIndex - 1);
  };

  const handleNext = () => {
    handleSelect(activeIndex === 5 ? 0 : activeIndex + 1);
  };

  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };
  
    return (
      <div>
        <Carousel interval={null}>
          {testimonials.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row>
                {chunk.map(testimonial => (
                  <Col key={testimonial.id}>
                    <Card className="testimonial-item rounded bg-info">
                      <div className="d-flex mb-3">
                        <img
                          src={testimonial.imgSrc}
                          className="img-fluid rounded-circle flex-shrink-0"
                          alt=""
                        />
                        <div
                          className="position-absolute"
                          style={{ top: '15px', right: '20px' }}
                        >
                          <i className="fa fa-quote-right fa-2x text-danger"></i>
                        </div>
                        <div className="ps-3 my-auto">
                          <h4 className="mt-5 text-danger text-center">{testimonial.name}</h4>
                          <p className="m-0 text-danger">{testimonial.profession}</p>
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <div className="d-flex">
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                          <i className="fas fa-star text-primary"></i>
                        </div>
                        <p className="fs-5 m-0 pt-3 text-white">{testimonial.content}</p>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <div style={{ textAlign: 'center' }}>
          <span className="carousel-control-prev-icons"></span>
          <span className="carousel-control-next-icons"></span>
        </div>
      </div>
    );
  };

export default TestimonialSlider;
