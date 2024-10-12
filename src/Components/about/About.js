/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Helmet } from "react-helmet";

const About = () => {
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
        <title>
          {t("Montessorı, Waldorf, Froebel, EmIllıa ve Köy Enstitülerimiz")}
        </title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Helmet>
      <div className="container-fluid py-6">
        <div className="container">
          <div
            className="text-center wow bounceInUp mb-4 fonti"
            data-wow-delay="0.1s"
          >
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-info border border-info rounded-pill px-5 py-3 mb-3">
              {t("Montessorı, Waldorf, Froebel, EmIllıa ve Köy Enstitülerimiz")}
            </small>
          </div>
          <div className="row g-5 align-items-start">
            <div className="col-lg-12 wow bounceInUp" data-wow-delay="0.3s">
              <p className="mb-4 paraf text-center">
                {t(
                  "Bu duyduğunuz isimler dünya çapında okul öncesi eğitim sistemine katkı sağlamış başlı başına birer ekol ve modeldirler."
                )}
                <br />
                {t("Her biri çocuğu merkeze alır.")} <br />
                {t(
                  "Çocukları çağının ihtiyaçlarını karşılayabilir niteliklere ulaştırır."
                )}
                <br />
                {t(
                  "Aynı zamanda spiritüel olgunluğa da eriştirmeyi amaçlayan birer ekoldürler."
                )}
                <br />
                {t(
                  "Eğitim sistemi tarih boyunca revizyona uğrarken, her bir model bir öncekine yeni ilkeler ekleyerek birer akım oluşturmuştur."
                )}
                <br />
                {
                  "Kendi eğitim sistemimizde ise tüm dünyada eğitim otoritelerinin dikkatlerini üzerine çeken hatta inceleme amaçlı gezilere muhatap kalan bizden bir sistem bulunmaktadır:"
                }
                &nbsp;
                <strong>{t("‘Köy Enstitüleri’...")}</strong>
                <br />
                {t(
                  "Cumhuriyet dönemi sonrası kısa sürede yurdun her yanına kalkınmayı götüren kendi ekolümüzdür köy enstitüleri."
                )}
                <br />
                {t(
                  "Bu durumda bizler, çocuklarımız için uygulayacağımız sistemin sürekli güncellenmesi gerektiğinin bilincindeyiz. Ve hepsinde ortak bulunan, bizim de"
                )}{" "}
                <br />
                {t(
                  "Özel Bademli Anaokulu olarak öz eğitim felsefemizi oluşturan hedeflerimiz ise, bahsettiğimiz bu ekollerin eklektik bir özeti olarak;"
                )}
                <br />
                <strong className="text-primary">
                  {t("Çocuk merkezli Mutlu öğrenme atmosferi")}
                </strong>
                <br />
                <strong className="text-info">
                  {t("Monitör eğitimci ve lider öğretmenlik modeli")}
                </strong>
                <br />
                <strong className="text-primary">
                  {t("Yaparak ve yaşayarak keşfetme")}
                </strong>
                <br />
                <strong className="text-info">
                  {t(
                    "Ve tüm bu eğitim dinamiklerimizin hayat bulması için ise,"
                  )}
                </strong>
                <br />
                <strong className="text-primary">
                  {t("GÜVENLİ VE ÖZENLİ BİR AİLE SICAKLIĞI…")}
                </strong>
              </p>
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
    </>
  );
};

export default About;
