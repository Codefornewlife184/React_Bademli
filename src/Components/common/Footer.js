/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";

function Footer() {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <SRLWrapper>
        <div
          className="container-fluid footer py-6 my-6 mb-0 bg-light wow"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                  <h4 className="mb-4 text-white">{t("Kurumsal")}</h4>
                  <hr style={{backgroundColor:"#fff"}}/>
                  <div className="d-flex flex-column align-items-start">
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>{" "}
                      {t("Anasayfa")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/hakkimizda"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Hakkımızda")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/gelisim-alanlarimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Gelişim Alanlarımız")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Etkinliklerimiz")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/dinamiklerimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Dinamiklerimiz")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/kazanimlarimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Kazanımlarımız")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/ailemiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Ailemiz")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/galeri"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Galeri")}
                    </Link>

                    <Link
                      className="text-body mb-5"
                      as={Link}
                      to="/iletisim"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("İletişim")}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                  <h4 className="mb-4 text-white">{t("Etkinliklerimiz")}</h4>
                  <hr style={{backgroundColor:"#fff"}}/>
                  <div className="d-flex flex-column align-items-start">
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Kids English")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Stem - Maker")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Robotik Kodlama")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Kids Cross-fit / Jimnastik")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Müzik / Orff Suzuki")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Yaratıcı Drama")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Bale")}
                    </Link>
                    <Link
                      className="text-body mb-3"
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Binicilik")}
                    </Link>
                    <Link
                      className="text-body mb-5"
                      as={Link}
                      to="/etkinliklerimiz"
                      onClick={handleClick}
                    >
                      <i className="fa fa-check text-primary me-2"></i>
                      {t("Jogging Trekking")}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                  <h4 className="mb-4 text-white">{t("İletişim")}</h4>
                  <hr style={{backgroundColor:"#fff"}}/>
                  <div className="d-flex flex-column align-items-start">
                    <p className="text-white">
                      <i className="fa fa-map-marker-alt text-primary me-2"></i>{" "}
                      Bademli, Eğitim Caddesi <br />
                      Kıvılcım Sk. No : 2, 16960 <br />
                      Mudanya / Bursa
                    </p>
                    <p className="text-white">
                      <i className="fa fa-phone-alt text-primary me-2"></i>{" "}
                      <a
                        href="tel:+905442601190"
                        className="mb-0 text-white"
                        onClick={handleClick}
                      >
                        0544 260 1190
                      </a>
                    </p>
                    <p className="text-white">
                      <i className="fas fa-envelope text-primary me-2"></i>{" "}
                      info@bademlianaokulu.com
                    </p>
                    <p className="text-white">
                      <i className="fa fa-clock text-primary me-2"></i>{" "}
                      {t("Haftaiçi")}: 08:00 - 19.00
                    </p>
                    <p className="text-white mb-5">
                      <i className="fa fa-clock text-primary me-2"></i>{" "}
                      {t("Haftasonu")} : 10:00 - 19.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-item">
                  <h4 className="mb-4 text-white">{t("Foto Galeri")}</h4>
                  <hr style={{backgroundColor:"#fff"}}/>
                  <div className="row g-2">
                    <div className="col-4">
                      <img
                        src="assets/img/footer/g-1.webp"
                        className="img-fluid rounded-circle border border-primary p-2"
                        alt=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="assets/img/footer/g-2.webp"
                        className="img-fluid rounded-circle border border-primary p-2"
                        alt=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="assets/img/footer/g-3.webp"
                        className="img-fluid rounded-circle border border-primary p-2"
                        alt=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="assets/img/footer/g-4.webp"
                        className="img-fluid rounded-circle border border-primary p-2"
                        alt=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="assets/img/footer/g-5.webp"
                        className="img-fluid rounded-circle border border-primary p-2"
                        alt=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="assets/img/footer/g-6.webp"
                        className="img-fluid rounded-circle border border-primary p-2"
                        alt=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="assets/img/footer/g-7.webp"
                        className="img-fluid rounded-circle border border-primary p-2"
                        alt=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="assets/img/footer/g-8.webp"
                        className="img-fluid rounded-circle border border-primary p-2"
                        alt=""
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="assets/img/footer/g-9.webp"
                        className="img-fluid rounded-circle border border-primary p-2"
                        alt=""
                      />
                    </div>
                  </div>
                  <br />
                  <div className="footer-icon d-flex">
                    <a
                      className="btn btn-primary btn-sm-square me-2 rounded-circle"
                      href="https://m.facebook.com/anaokulubademli/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/bademlianaokulu/"
                      target="_blank"
                      className="btn btn-primary btn-sm-square me-2 rounded-circle"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-primary btn-sm-square me-2 rounded-circle"
                      href="https://www.youtube.com/channel/UCOkNdIr0-eXsBjgNaABL3TQ"
                      target="_blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a
                      href="https://wa.me/905442601190"
                      target="_blank"
                      className="btn btn-primary btn-sm-square rounded-circle"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid copyright bg-dark py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-3 mb-md-0">
                <span className="text-light">
                  <a href="#">
                    <i className="fas fa-copyright text-light me-2"></i>
                    {t("Özel Bademli Anaokulu")}
                  </a>
                  <br />
                  &nbsp;{currentYear} | {t("Tüm Hakları Saklıdır.")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <a
          href="https://wa.me/905442601190"
          target="_blank"
          className="btn btn-md-square btn-primary rounded-circle back-to-tops"
          onClick={handleClick}
        >
          <i className="fab fa-whatsapp"></i>
        </a> */}

        <a
          href="#"
          className="btn btn-md-square btn-primary rounded-circle back-to-top"
          id="scrollTop"
          alt="Up-down"
          aria-label="Up-down"
          onClick={handleClick}
        >
          <i className="fas fa-arrow-up"></i>
        </a>
      </SRLWrapper>
    </>
  );
}

export default Footer;
