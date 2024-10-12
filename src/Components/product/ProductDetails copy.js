/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import { useTranslation } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";
import ProductCarousel from "./ProductCarousel";

const ProductDetails = () => {
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
    <>
      <SRLWrapper>
        <div className="product-single mb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-5">
              <ProductCarousel />
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details">
                <div className="profuct-info">
                  <h1 className="product-title">Matbaa</h1>
                  <div className="pro-revi-arrow clearfix">
                    <div className="product-starrating pull-left text-primary">
                      <i className="spr-icon fa fa-star"></i>
                      <i className="spr-icon fa fa-star"></i>
                      <i className="spr-icon fa fa-star"></i>
                      <i className="spr-icon fa fa-star"></i>
                      <i className="spr-icon fa fa-star"></i>
                    </div>
                  </div>
                </div>
                <br />
                <p className="mb-4 text-black">
                  İndizayn Matbaa 15 yılı aşkın süredir matbaa sektöründe öncü
                  olan firmalardan biridir. <br />
                  Yıllar geçtikçe müşteri memnuniyeti bizi farklı matbaa
                  işlerini de yapmaya yöneltti.
                  <br />
                  Müşterilerimizin memnuniyetini bir adım ileri taşıdık ve
                  Karton Kutu, Mukavva Kutu, Broşür, Katalog, Kartvizit, Ambalaj
                  Ürünleri gibi birçok matbaa ürününde de bu kulvardaki öncü
                  firmalardan biri haline geldik.
                </p>
                <div className="row g-4 text-black mb-5">
                  <div className="col-12">
                    <i className="fas fa-share text-primary me-2"></i>Kaliteli
                    ve Güvenilir Hizmet
                  </div>
                  <div className="col-12">
                    <i className="fas fa-share text-primary me-2"></i>24/7
                    Müşteri Desteği
                  </div>
                  <div className="col-12">
                    <i className="fas fa-share text-primary me-2"></i>Zamanında
                    Teslimat
                  </div>
                  <div className="col-12">
                    <i className="fas fa-share text-primary me-2"></i>Yenilikçi
                    Hizmetler
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-3 mb-5">
          <h3 className="mb-4">Categories</h3>
          <div className="bg-secondary" style={{ padding: "30px" }}>
            <ul className="list-inline m-0">
              <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                <Link className="text-dark" to="/Aboutus">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Web Design
                </Link>
                <span className="badge badge-secondary badge-pill">150</span>
              </li>
              <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                <a className="text-dark" href="#">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Web
                  Development
                </a>
                <span className="badge badge-secondary badge-pill">131</span>
              </li>
              <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                <a className="text-dark" href="#">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Online
                  Marketing
                </a>
                <span className="badge badge-secondary badge-pill">78</span>
              </li>
              <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                <a className="text-dark" href="#">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Keyword
                  Research
                </a>
                <span className="badge badge-secondary badge-pill">56</span>
              </li>
              <li className="py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                <a className="text-dark" href="#">
                  <i className="fa fa-angle-right text-primary mr-2"></i>Email
                  Marketing
                </a>
                <span className="badge badge-secondary badge-pill">98</span>
              </li>
            </ul>
          </div>
        </div> */}
      </SRLWrapper>
    </>
  );
};

export default ProductDetails;
