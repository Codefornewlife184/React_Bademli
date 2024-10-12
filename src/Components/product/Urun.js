/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SRLWrapper } from "simple-react-lightbox";
import Spacer2 from "../common/Spacer2";
import { t } from "i18next";

const Urun = () => {
  return (
    <>
      <SRLWrapper>
        <>
          <div className="container-fluid p-0 overflow-hidden mt-0 mb-0">
            <div className="row">
              <div className="col">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="assets/img/kum-saati/kum3.webp"
                        className="d-block w-100"
                        alt="Slide 0"
                      />
                      <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </SRLWrapper>
    </>
  );
};

export default Urun;
