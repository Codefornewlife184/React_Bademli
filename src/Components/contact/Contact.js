/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Contact() {
  const pageDescription = "";
  const pageKeywords = "";

  const [canonicalUrl, setCanonicalUrl] = useState("");

  useEffect(() => {
    const dynamicCanonicalUrl = "https://bademlianaokulu.com/iletisim";
    setCanonicalUrl(dynamicCanonicalUrl);
  }, []);
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vzhem5v",
        "template_q6tt0ps",
        e.target,
        "vHITrMwYs-OEE439x"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(t("Email başarıyla gönderildi!"));
        },
        (error) => {
          console.log(error.text);
          alert(t("Email gönderilirken bir hata oluştu!"));
        }
      );
    e.target.reset();
  }

  return (
    <>
      <Helmet>
        <title>{t("Özel Bademli Anaokulu")}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <div
        className="container-fluid team py-0 wow bounceInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="">
            <div className="row g-4">
              <div className="col-12 text-center fonti">
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-5 py-3 mb-3">
                  {t("İletişim")}
                </small>
              </div>
              <div className="container-fluid faqt">
                <div className="container">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-12">
                      <div className="row g-4">
                        <div
                          className="col-md-6 col-lg-4 wow bounceInUp"
                          data-wow-delay="0.3s"
                        >
                          <div className="faqt-item bg-pink rounded p-4 text-center">
                            <i
                              className="fas fa-map-marker-alt fa-4x mb-4"
                              style={{ color: "#4c99d3" }}
                            ></i>
                            <h4 style={{ color: "#4c99d3" }}>{("Adres")}</h4>
                            <p className="mb-2 text-white">
                              Bademli, Eğitim Caddesi Kıvılcım Sk.
                            </p>
                            <p className="mb-0 text-white">
                              No : 2, 16960 Mudanya / Bursa
                            </p>
                          </div>
                        </div>
                        <div
                          className="col-md-6 col-lg-4 wow bounceInUp"
                          data-wow-delay="0.5s"
                        >
                          <div className="faqt-item bg-pink rounded p-4 text-center">
                            <i
                              className="fas fa-envelope fa-4x mb-4"
                              style={{ color: "#4c99d3" }}
                            ></i>
                            <h4 style={{ color: "#4c99d3" }}>E-Mail</h4>
                            <p
                              className="mb-2 text-white"
                              style={{ color: "#4c99d3" }}
                            >
                              info@bademlianaokulu.com
                            </p>
                            <p className="mb-0" style={{ color: "#de3f92" }}>
                              ....
                            </p>
                          </div>
                        </div>
                        <div
                          className="col-md-6 col-lg-4 wow bounceInUp"
                          data-wow-delay="0.7s"
                        >
                          <div className="faqt-item bg-pink rounded p-4 text-center">
                            <i
                              className="fas fa-phone-alt fa-4x mb-4"
                              style={{ color: "#4c99d3" }}
                            ></i>
                            <h4 style={{ color: "#4c99d3" }}>{t("Telefon")}</h4>
                            <p className="mb-2 text-white">
                              <a
                                href="https://wa.me/905442601190"
                                className="mb-2 text-white"
                                target="_blank"
                                onClick={handleClick}
                              >
                                (+90) 544 260 11 90
                              </a>
                            </p>
                            <p className="mb-0" style={{ color: "#de3f92" }}>
                              ....
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-12">
                <div>
                  <iframe
                    title="Google Map"
                    className="rounded w-100 "
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97470.5803270568!2d28.862078721623305!3d40.2322886327779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca1324ff9841a5%3A0xda85cecca73e7062!2s%C3%96zel%20Bademli%20Anaokulu!5e0!3m2!1str!2str!4v1708687898914!5m2!1str!2str"
                    style={{ border: "0", height: "475px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
