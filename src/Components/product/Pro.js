/* eslint-disable jsx-a11y/anchor-is-valid */
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Pro = () => {
  const pageDescription = "";
  const pageKeywords = "";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://bademlianaokulu.com/etkinliklerimiz";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);
  return (
    <>
      <Helmet>
        <title>{t("Etkinliklerimiz")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <div className="container-fluid service">
        <div className="container">
          <div className="text-center wow bounceInUp fonti" data-wow-delay="0.1s">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-5 py-3 mb-5">
            {t("Etkinliklerimiz")}
            </small>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-white rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center fontim">
                    {/* <i className="fas fa-language fa-7x text-primary mb-4"></i> */}
                    <img
                      src="/assets/img/etkinlik/2.webp"
                      alt="Ballet Icon"
                      width="100"
                      height="100"
                    />
                    <h4 className="mt-3 fontim">{t("Kids English")}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-white rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    {/* <i className="fas fa-code fa-7x text-primary mb-4"></i> */}
                    <img
                      src="/assets/img/etkinlik/4.webp"
                      alt="Ballet Icon"
                      width="100"
                      height="100"
                    />
                    <h4 className="mt-3">{t("Stem - Maker")}</h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.3s"
            >
              <div className="bg-white rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    {/* <i className="fas fa-code fa-7x text-primary mb-4"></i> */}
                    <img
                      src="/assets/img/etkinlik/7.webp"
                      alt="Ballet Icon"
                      width="100"
                      height="100"
                    />
                    <h4 className="mt-3">{t("Robotik Kodlama")}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.5s"
            >
              <div className="bg-white rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    {/* <i className="fas fa-gymnastics fa-7x text-primary mb-4"></i> */}
                    <img
                      src="/assets/img/etkinlik/6.webp"
                      alt="Ballet Icon"
                      width="100"
                      height="100"
                    />
                    <h4 className="mt-3">{t("Kids Cross-fit / Jimnastik")}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.7s"
            >
              <div className="bg-white rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    {/* <i className="fas fa-music fa-7x text-primary mb-4"></i> */}
                    <img
                      src="/assets/img/etkinlik/3.webp"
                      alt="Ballet Icon"
                      width="100"
                      height="100"
                    />
                    <h4 className="mt-3">{t("Müzik / Orff Suzuki")}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-white rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    {/* <i className="fas fa-theater-masks fa-7x text-primary mb-4"></i> */}
                    <img
                      src="/assets/img/etkinlik/8.webp"
                      alt="Ballet Icon"
                      width="100"
                      height="100"
                    />
                    <h4 className="mt-3">{t("Yaratıcı Drama")}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.3s"
            >
              <div className="bg-white rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    {/* <i className="fas fa-running fa-7x text-primary mb-4"></i> */}
                    <img
                      src="/assets/img/etkinlik/1.webp"
                      alt="Ballet Icon"
                      width="100"
                      height="100"
                    />
                    <h4 className="mb-3">{t("Bale")}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.5s"
            >
              <div className="bg-white rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    {/* <i className="fas fa-horse-head fa-7x text-primary mb-4"></i> */}
                    <img
                      src="/assets/img/etkinlik/11.webp"
                      alt="Ballet Icon"
                      width="100"
                      height="100"
                    />
                    <h4 className="mb-3">{t("Binicilik")}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.7s"
            >
              <div className="bg-white rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    {/* <i className="fas fa-running fa-7x text-primary mb-4"></i> */}
                    <img
                      src="/assets/img/etkinlik/10.webp"
                      alt="Ballet Icon"
                      width="100"
                      height="100"
                    />
                    <h4 className="mb-3">{t("Jogging Trekking")}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pro;
