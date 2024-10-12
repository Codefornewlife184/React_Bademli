/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "react-bootstrap";
import Counter from "../counter/Counter";
import { Helmet } from "react-helmet";

const Aboutus = () => {
  const pageDescription = "";
  const pageKeywords = "";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://bademlianaokulu.com/hakkimizda";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);

  const { t } = useTranslation();
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const [expanded, setExpanded] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  useEffect(() => {
    if (lightboxController.toggler) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightboxController.toggler]);

  const openVideo = () => {
    setLightboxController({
      toggler: !lightboxController.toggler,
    });
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <>
      <Helmet>
        <title>{t("Hakkımızda")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <div className="container-fluid py-0">
        <div className="container">
          <div
            className="text-center wow bounceInUp mb-4 fonti"
            data-wow-delay="0.1s"
          >
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-5 py-3 mb-3">
              {t("Hakkımızda")}
            </small>
          </div>
        </div>
      </div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-6 wow bounceInUp">
              {t(
                "Günümüzü şekillendiren teknolojileri, içinde yaşadığımız şehirleri, tıptaki devrimi yaratan beyinlerin bundan 20-30 sene önce anaokulu çağında olduğunu hiç düşündünüz mü?"
              )}
              <br />
              <br />
              {t("Peki yarınlarımızı?")}
              <br />
              <br />
              {t("Nasıl bir dünyada, nasıl bir yaşam süreceğiz?")}
              <br />
              <br />
              {t("İşte tüm bunlar bizim yola çıkarken hissettiğimiz heyecan ve inancın temelleriydi. Biz dünyayı onların minik ellerinin, kocaman yüreklerinin ve keskin zekalarının değiştireceğini biliyoruz. Ve onlara iyi bir başlangıç için en iyisini sunmak için buradayız.")}
              <br />
              <br />
              {t("Okulumuzda tek bir prensip var…")} <br />
              <br />
              <strong className="text-primary">
               {t(" “Çocuklarımız için en iyi olan ne ise doğru olan O’dur.” ")}
              </strong>
              <br />
              <br />
              {/* <img
                src="assets/img/about/hakkimizda.webp"
                className="img-fluid mb-4"
                style={{ borderRadius: "10px" }}
                alt=""
              /> */}
            </div>
            <div className="col-lg-6 wow bounceInUp">
              <div className="content ps-0 ps-lg-5">
                <img
                  src="assets/img/about/hakkimizda.webp"
                  className="img-fluid mb-4"
                  style={{ borderRadius: "10px" }}
                  alt=""
                />

                <div className="position-relative mt-4">
                  {/* <img
                    src="assets/img/about/hakkimizda-1.webp"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                    alt=""
                  /> */}
                  {/* <a
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox play-btn"
                  ></a> */}
                </div>
              </div>
            </div>
            <div className="content col-lg-12 wow bounceInUp">
              <h3 className="product-details__description__title text-info">
                {t("Vizyonumuz")}
              </h3>
              <p className="mb-4 paraf">
                {t("Keşfetmeyi, öğrenmeyi ve beceriler kazanmayı mutlu bir eylem haline getirebilen bir kurum olmaktır.")}
              </p>

              <h3 className="product-details__description__title text-info">
                {t("Misyonumuz")}
              </h3>
              <p className="mb-4 paraf">
               {t("Özel Bademli Anaokulu, dünyaya entegre olabilen, Atatürk ilke ve devrimlerini benimsemiş birer evrensel vatandaş yetiştirmeyi amaç edinmiştir.")}
              </p>

              <ul>
                <h3 className="product-details__description__title text-info">
                  {t("Değerlerimiz")}
                </h3>
                <li>
                  <i className="bi bi-check-circle-fill"></i> {t("Sevgi")}
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> {t("Yardımseverlik")}
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> {t("Hoşgörü")}
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> {t("Paylaşım")}
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i> {t("Liderlik ve Saygı")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
