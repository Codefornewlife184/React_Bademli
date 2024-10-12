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
        <title>{t("Bademli Anaokulu")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <div className="container-fluid py-0">
        <div className="container">
          <div className="text-center wow bounceInUp mb-4" data-wow-delay="0.1s">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-5 py-3 mb-3">
              Hakkımızda
            </small>
          </div>
          <div className="row g-5 align-items-start">
            <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
              <div className="video">
                <button
                  type="button"
                  className="btn btn-play"
                  onClick={() => setShowVideoModal(true)}
                >
                  <span></span>
                </button>
              </div>
            </div>
            <div className="col-lg-7 wow bounceInUp" data-wow-delay="0.3s">
              <p className="mb-4 paraf">
                Günümüzü şekillendiren teknolojileri, içinde yaşadığımız
                şehirleri, tıptaki devrimi yaratan beyinlerin bundan 20-30 sene
                önce anaokulu çağında olduğunu hiç düşündünüz mü?
                <br />
                Peki yarınlarımızı? <br />
                Nasıl bir dünyada, nasıl bir yaşam süreceğiz?
                <br />
                İşte tüm bunlar bizim yola çıkarken hissettiğimiz heyecan ve
                inancın temelleriydi. Biz dünyayı onların minik ellerinin,
                kocaman yüreklerinin ve keskin zekalarının değiştireceğini
                biliyoruz. Ve onlara iyi bir başlangıç için en iyisini sunmak
                için buradayız.
                <br />
                Okulumuzda tek bir prensip var… <br />
                <strong className="text-primary">
                  “Çocuklarımız için en iyi olan ne ise doğru olan O’dur.”
                </strong>
              </p>

              <h3 className="product-details__description__title text-info">
                Vizyonumuz
              </h3>
              <p className="mb-4 paraf">
                Keşfetmeyi, öğrenmeyi ve beceriler kazanmayı mutlu bir eylem
                haline getirebilen bir kurum olmaktır.
              </p>

              <h3 className="product-details__description__title text-info">
                Misyonumuz
              </h3>
              <p className="mb-4 paraf">
                Özel Bademli Anaokulu, dünyaya entegre olabilen, Atatürk ilke ve
                devrimlerini benimsemiş birer evrensel vatandaş yetiştirmeyi
                amaç edinmiştir.
              </p>

              <h3 className="product-details__description__title text-info">
                Değerlerimiz
              </h3>
              <div className="row g-4 text-black mb-5 mt-1">
                <div className="col-sm-12">
                  <i className="fas fa-share text-primary me-2"></i>Sevgi
                </div>
                <div className="col-sm-12">
                  <i className="fas fa-share text-primary me-2"></i>
                  Yardımseverlik
                </div>
                <div className="col-sm-12">
                  <i className="fas fa-share text-primary me-2"></i>Hoşgörü
                </div>
                <div className="col-sm-12">
                  <i className="fas fa-share text-primary me-2"></i>Paylaşım
                </div>
                <div className="col-sm-12">
                  <i className="fas fa-share text-primary me-2"></i>Liderlik ve
                  Saygı
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal show={showVideoModal} onHide={closeVideoModal}>
          <Modal.Body>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeVideoModal}
            ></button>
            <iframe
              title="Video"
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/DvV9x8EdDs8"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </Modal.Body>
        </Modal>
      </div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-6">
              <img
                src="assets/img/about/hakkimizda.webp"
                className="img-fluid mb-4"
                style={{ borderRadius: "10px" }}
                alt=""
              />
              Günümüzü şekillendiren teknolojileri, içinde yaşadığımız
              şehirleri, tıptaki devrimi yaratan beyinlerin bundan 20-30 sene
              önce anaokulu çağında olduğunu hiç düşündünüz mü?
              <br /><br />
              Peki yarınlarımızı? <br /><br />
              Nasıl bir dünyada, nasıl bir yaşam süreceğiz?
              <br /><br />
              İşte tüm bunlar bizim yola çıkarken hissettiğimiz heyecan ve
              inancın temelleriydi. Biz dünyayı onların minik ellerinin, kocaman
              yüreklerinin ve keskin zekalarının değiştireceğini biliyoruz. Ve
              onlara iyi bir başlangıç için en iyisini sunmak için buradayız.
              <br /><br />
              Okulumuzda tek bir prensip var… <br /><br />
              <strong className="text-primary">
                “Çocuklarımız için en iyi olan ne ise doğru olan O’dur.”
              </strong>
            </div>
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5">
                <h3 className="product-details__description__title text-info">
                  Vizyonumuz
                </h3>
                <p className="mb-4 paraf">
                  Keşfetmeyi, öğrenmeyi ve beceriler kazanmayı mutlu bir eylem
                  haline getirebilen bir kurum olmaktır.
                </p>

                <h3 className="product-details__description__title text-info">
                  Misyonumuz
                </h3>
                <p className="mb-4 paraf">
                  Özel Bademli Anaokulu, dünyaya entegre olabilen, Atatürk ilke
                  ve devrimlerini benimsemiş birer evrensel vatandaş
                  yetiştirmeyi amaç edinmiştir.
                </p>
                
                <ul>
                <h3 className="product-details__description__title text-info">
                  Değerlerimiz
                </h3>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Sevgi
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Yardımseverlik
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Hoşgörü
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Paylaşım
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill"></i> Liderlik ve Saygı
                  </li>
                </ul>
                

                <div className="position-relative mt-4">
                  <img
                    src="assets/img/about/hakkimizda-1.webp"
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                    alt=""
                  />
                  {/* <a
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox play-btn"
                  ></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
