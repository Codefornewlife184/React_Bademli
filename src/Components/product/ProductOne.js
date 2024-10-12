/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

const ProductOne = () => {
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
    <>
      <section className="overview-section section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-sm-8 col-md-6">
              <div className="overview-content">
                <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                  <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-5 py-3 mb-3">
                    Etkinliklerimiz
                  </small>
                </div>
                <ul className="features-list text-center">
                  <li >
                    {" "}
                    <span className="active wow bounceInUp">{t("Kids English")}</span>
                  </li>
                  <li className="wow bounceInUp">
                    {" "}
                    <span>{t("Stem - Maker")}</span>
                  </li>
                  <li className="wow bounceInUp">
                    {" "}
                    <span> {t("Robotik Kodlama")}</span>
                  </li>
                  <li className="wow bounceInUp">
                    {" "}
                    <span>{t("Kids Cross-fit / Jimnastik")}</span>
                  </li>
                  <li className="wow bounceInUp">
                    {" "}
                    <span> {t("Müzik / Orff Suzuki")}</span>
                  </li>
                  <li className="wow bounceInUp">
                    {" "}
                    <span> {t("Yaratıcı Drama")}</span>
                  </li>
                  <li className="wow bounceInUp">
                    {" "}
                    <span> {t("Bale")}</span>
                  </li>
                  <li className="wow bounceInUp">
                    {" "}
                    <span>{t("Jogging Trekking / Binicilik")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOne;
