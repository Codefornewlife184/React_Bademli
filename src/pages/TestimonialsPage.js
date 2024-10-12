/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import TestimonialSlider from "../Components/testimonial/TestimonialSlider"; // TestimonialSlider bileşenini uygun şekilde import edin

const TestimonialsPage = () => {
  // Testimonial verileri
  const testimonials = [
    [
      {
        id: 1,
        imgSrc: "assets/img/6.jpg",
        name: "Person Name 1",
        profession: "Profession 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        imgSrc: "assets/img/7.jpg",
        name: "Person Name 2",
        profession: "Profession 2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    [
      {
        id: 3,
        imgSrc: "assets/img/8.jpg",
        name: "Person Name 3",
        profession: "Profession 3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },

      {
        id: 4,
        imgSrc: "assets/img/g-9.jpg",
        name: "Person Name 4",
        profession: "Profession 4",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    [
      {
        id: 5,
        imgSrc: "assets/img/g-10.jpg",
        name: "Person Name 5",
        profession: "Profession 5",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 6,
        imgSrc: "assets/img/g-11.jpg",
        name: "Person Name 6",
        profession: "Profession 6",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  ];

  return (
    <div className="container text-center">
      <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
        <small
          className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-5 py-3 mb-3"
          style={{ color: "#f78787" }}
        >
          Veli Yorumları
        </small>
        <h1 className="display-5 mb-5">
          Memnuniyet ve Şikayetleriniz
        </h1>
      </div>
      <h1 className="text-center"></h1>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default TestimonialsPage;
