/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";
import ProductCarousel from "./ProductCarousel";

function ProductDetails() {
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
        <section className="product-details section-space">
          <div className="container">
            <div className="row gutter-y-50">
              <div
                className="col-lg-6 col-xl-6 wow fadeInLeft"
                data-wow-delay="200ms"
              >
                <div className="product-details__img">
                  <div className="swiper product-details__gallery-top p-5">
                    <ProductCarousel />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 product-info-details">
                <div className="profuct-info">
                  <h1 className="product-title text-info">Detay</h1>
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
                <p className="mb-4 paraf">
                  Özel Bademli Anaokulu, çocukların eğitim ve gelişimine
                  odaklanan bir eğitim kurumudur. Anaokulu, çocukların okul
                  öncesi dönemde temel becerilerini geliştirmelerine ve sosyal,
                  duygusal, bilişsel ve fiziksel alanlarda ilerlemelerine destek
                  olur. <br />
                  <br />
                  Özel Bademli Anaokulu, nitelikli öğretmenler tarafından
                  yönetilir ve modern eğitim yöntemlerini kullanarak
                  öğrencilerin potansiyellerini maksimize etmeye çalışır.
                  <br />
                  <br />
                  Özel Bademli Anaokulu, çocukların sağlıklı bir şekilde
                  büyümelerine, öğrenmeye ve keşfetmeye teşvik eden,
                  destekleyici bir eğitim ortamı sunar.
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
          <div className="product-details__description-wrapper">
            <div className="container">
              <div className="product-details__description">
                <h3 className="product-details__description__title text-info">
                  Description
                </h3>
                <div
                  className="product-details__text__box wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <p className="product-details__description__text paraf">
                    Neque porro est qui dolorem ipsum quia quaed inventor
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Aelltes port lacus quis enim var sed efficitur
                    turpis gilla sed sit amet finibus eros. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                  </p>
                  <p className="product-details__description__text paraf">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. Aelltes port
                    lacus quis enim var sed efficitur turpis gilla sed sit{" "}
                    <br />
                    amet finibus eros. Neque porro est qui dolorem ipsum quia
                    quaed inventor veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Aelltes port lacus quis enim var sed
                    efficitur turpis gilla sed sit amet finibus eros. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry
                  </p>
                  <p className="product-details__description__text paraf">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. Aelltes port
                    lacus quis enim var sed efficitur turpis gilla sed sit amet
                    finibus eros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
}

export default ProductDetails;
